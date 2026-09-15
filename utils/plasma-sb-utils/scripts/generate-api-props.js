/* eslint-disable no-console, no-bitwise, @typescript-eslint/no-var-requires */
/**
 * Собирает публичные пропсы компонентов, чтобы Storybook мог отделить API компонента
 * от пропсов, заведённых только ради стори (`enableContentLeft`, `hasHint` и т.п.).
 *
 * Два режима:
 *
 * 1. База — типы `plasma-new-hope`:
 *      npm run generate:api-props            (из корня репозитория)
 *    Результат: `utils/plasma-sb-utils/src/apiProps.generated.ts`.
 *
 * 2. Оверлей пакета — компоненты вертикали, которые расширяют или подменяют API new-hope:
 *      npm run generate:api-props            (из папки пакета, вызывается сам на `prestorybook`)
 *    Результат: `<пакет>/.storybook/apiProps.generated.ts`.
 *
 * Чтобы файлы не разрастались, атрибуты DOM (`className`, `onClick`, `aria-*`, ...) хранятся
 * одним общим списком, а у компонента остаются только его собственные пропсы.
 */
const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const ts = require('typescript');

const ROOT = path.resolve(__dirname, '../../..');
const NEW_HOPE = path.join(ROOT, 'packages/plasma-new-hope');
const BASE_OUT = path.resolve(__dirname, '../src/apiProps.generated.ts');

const PROBE_NAME = 'apiPropsProbe.generated.ts';
const PROBE_SOURCE = `import type { AllHTMLAttributes, AriaAttributes, DOMAttributes, RefAttributes } from 'react';

export type Probe = AllHTMLAttributes<HTMLElement> &
    AriaAttributes &
    DOMAttributes<HTMLElement> &
    RefAttributes<HTMLElement>;
`;

/** Пропс «свой», если объявлен в исходниках репозитория, а не унаследован из типов React */
const isOwnProp = (prop) => {
    const file = prop.declarations?.[0]?.getSourceFile().fileName;

    if (!file) {
        return false;
    }

    const realPath = fs.realpathSync.native(file);

    return realPath.startsWith(ROOT) && !realPath.includes(`${path.sep}node_modules${path.sep}`);
};

const readConfig = (projectDir) => {
    const { config } = ts.readConfigFile(path.join(projectDir, 'tsconfig.json'), ts.sys.readFile);
    const parsed = ts.parseJsonConfigFileContent(config, ts.sys, projectDir);

    return { ...parsed.options, noEmit: true, skipLibCheck: true };
};

const readDirs = (dir) =>
    fs.existsSync(dir) ? fs.readdirSync(dir).filter((name) => fs.statSync(path.join(dir, name)).isDirectory()) : [];

/**
 * Точки входа компонента: `Button/index.ts`, `Button/Button.tsx`, `Button/Button.types.ts`.
 * Папки, начинающиеся с `_` (`_beta`, `_ai`), просматриваются на уровень глубже.
 */
const findComponentEntries = (componentDirs) => {
    const entries = new Map();
    const topLevel = new Set();

    componentDirs.forEach((dir) => readDirs(dir).forEach((name) => !name.startsWith('_') && topLevel.add(name)));

    const collect = (dir, name, namespace) => {
        const componentDir = path.join(dir, name);
        const files = ['index.ts', `${name}.tsx`, `${name}.ts`, `${name}.types.ts`, `${name}.types.tsx`]
            .map((file) => path.join(componentDir, file))
            .filter((file) => fs.existsSync(file));

        if (!files.length) {
            return;
        }

        const key = namespace && topLevel.has(name) ? `${namespace}/${name}` : name;

        entries.set(key, { key, component: name, files: [...(entries.get(key)?.files || []), ...files] });
    };

    componentDirs.forEach((dir) => {
        readDirs(dir).forEach((name) => {
            if (name.startsWith('_')) {
                readDirs(path.join(dir, name)).forEach((nested) => collect(path.join(dir, name), nested, name));
            }

            collect(dir, name);
        });
    });

    return Array.from(entries.values());
};

const createExtractor = (checker) => {
    const collectProps = (type, acc, depth = 0) => {
        if (depth > 5) {
            return acc;
        }

        if (type.isUnionOrIntersection()) {
            type.types.forEach((inner) => collectProps(inner, acc, depth + 1));

            return acc;
        }

        checker.getPropertiesOfType(type).forEach((prop) => acc.add(prop));

        return acc;
    };

    /** Пропсы из экспортированного типа: `export type ButtonProps = ...` */
    const fromType = (symbol, acc) => collectProps(checker.getDeclaredTypeOfSymbol(symbol), acc);

    /** Пропсы из самого компонента: `export const Button = ...` — берём первый аргумент вызова */
    const fromComponent = (symbol, acc) => {
        const declaration = symbol.valueDeclaration || symbol.declarations?.[0];

        if (!declaration) {
            return acc;
        }

        const type = checker.getTypeOfSymbolAtLocation(symbol, declaration);

        [...type.getCallSignatures(), ...type.getConstructSignatures()].forEach((signature) => {
            const [props] = signature.getParameters();

            if (props) {
                collectProps(checker.getTypeOfSymbolAtLocation(props, props.valueDeclaration || declaration), acc);
            }
        });

        return acc;
    };

    return { collectProps, fromType, fromComponent };
};

const forEachExport = (checker, program, file, callback) => {
    const source = program.getSourceFile(file);
    const moduleSymbol = source && checker.getSymbolAtLocation(source);

    if (!moduleSymbol) {
        return;
    }

    checker.getExportsOfModule(moduleSymbol).forEach((symbol) => {
        const aliased = symbol.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(symbol) : symbol;

        callback(symbol.getName(), aliased);
    });
};

const toEntry = (props) => {
    const own = new Set();
    const inherited = new Set();

    props.forEach((prop) => (isOwnProp(prop) ? own : inherited).add(prop.getName()));

    return {
        // пропсы из типов React (`id`, `rows`, `accept`, ...) не дублируем — они лежат общим списком `htmlProps`
        htmlAttributes: inherited.size > 0,
        htmlRatio: inherited.size / props.size,
        props: Array.from(own).sort(),
    };
};

/** `--stats`: показать, сколько пропсов у компонента свои, а сколько унаследовано из типов React */
const printStats = (components, skipped = []) => {
    const rows = Object.entries(components)
        .map(([name, { htmlAttributes, htmlRatio, props }]) => ({
            name,
            percent: Math.round(htmlRatio * 100),
            htmlAttributes,
            own: props.length,
        }))
        .sort((a, b) => b.percent - a.percent);

    rows.forEach(({ name, percent, htmlAttributes, own }) =>
        console.log(
            `${name.padEnd(22)} своих: ${String(own).padStart(3)}   из React: ${String(percent).padStart(3)}%  ${
                htmlAttributes ? '(htmlAttributes)' : ''
            }`,
        ),
    );

    const withHtml = rows.filter((row) => row.htmlAttributes);
    const withoutHtml = rows.filter((row) => !row.htmlAttributes);
    console.log(`\nВсего: ${rows.length}. С DOM-атрибутами: ${withHtml.length}, без: ${withoutHtml.length}`);
    console.log(`Без DOM-атрибутов: ${withoutHtml.map(({ name }) => name).join(', ') || '—'}`);

    if (skipped.length) {
        console.log(`\nБез типов: ${skipped.join(', ')}`);
    }
};

const format = (source, filePath) =>
    prettier.format(source, { ...prettier.resolveConfig.sync(filePath), filepath: filePath });

const render = (components, htmlProps) => {
    const toList = (props) => (props.length ? `'${props.join(' ')}'.split(' ')` : '[]');

    const withoutHtmlProps = Object.entries(components)
        .filter(([, { htmlAttributes }]) => !htmlAttributes)
        .map(([name]) => name);

    return [
        '// Сгенерировано скриптом plasma-sb-utils/scripts/generate-api-props.js. Не редактировать вручную.',
        '',
        ...(htmlProps
            ? [
                  '/** Пропсы, унаследованные из типов React: их принимает почти любой компонент */',
                  `export const htmlProps: string[] = ${toList(Array.from(htmlProps).sort())};`,
                  '',
              ]
            : []),
        '/** Компоненты, которые не пробрасывают пропсы в DOM — к ним `htmlProps` не применяются */',
        `export const withoutHtmlProps: string[] = ${toList(withoutHtmlProps)};`,
        '',
        '/** Собственные пропсы компонентов */',
        'export const apiProps: Record<string, string[]> = {',
        ...Object.entries(components).map(
            ([name, { props }]) => `    ${/^[A-Za-z_$][\w$]*$/.test(name) ? name : `'${name}'`}: ${toList(props)},`,
        ),
        '};',
        '',
    ].join('\n');
};

/**
 * Программа по исходникам new-hope плюс список пропсов из типов React.
 * Probe-файл нужен только на время анализа, поэтому удаляем его в `finally`:
 * иначе после падения он останется в `src` и попадёт в коммит или в сборку.
 */
const createBaseProgram = (entries) => {
    const probe = path.join(NEW_HOPE, 'src', PROBE_NAME);

    fs.writeFileSync(probe, PROBE_SOURCE);

    try {
        const program = ts.createProgram([probe, ...entries.flatMap(({ files }) => files)], readConfig(NEW_HOPE));
        const checker = program.getTypeChecker();
        const { fromType } = createExtractor(checker);

        const probeProps = new Set();

        forEachExport(checker, program, probe, (name, symbol) => name === 'Probe' && fromType(symbol, probeProps));

        return { program, checker, fromType, htmlProps: Array.from(probeProps, (prop) => prop.getName()).sort() };
    } finally {
        fs.rmSync(probe, { force: true });
    }
};

/**
 * База: компонент описан типом `<Name>Props`, дочерние компоненты добавляем к нему.
 */
const generateBase = (stats, check) => {
    const entries = findComponentEntries([
        path.join(NEW_HOPE, 'src/components'),
        path.join(NEW_HOPE, 'src/examples/components'),
    ]);

    const { program, checker, fromType, htmlProps } = createBaseProgram(entries);

    const components = {};
    const skipped = [];

    entries.forEach(({ key, component, files }) => {
        const main = new Set();
        const props = new Set();

        files.forEach((file) =>
            forEachExport(checker, program, file, (name, symbol) => {
                if (name === `${component}Props`) {
                    fromType(symbol, main);
                }

                if (name.endsWith('Props')) {
                    fromType(symbol, props);
                }
            }),
        );

        if (main.size) {
            components[key] = toEntry(props);
        } else {
            skipped.push(component);
        }
    });

    if (stats) {
        printStats(components, skipped);

        return;
    }

    const content = format(render(components, htmlProps), BASE_OUT);

    if (check) {
        const actual = fs.existsSync(BASE_OUT) ? fs.readFileSync(BASE_OUT, 'utf8') : '';

        if (actual !== content) {
            console.error(
                `${path.relative(ROOT, BASE_OUT)} устарел: типы компонентов изменились.\n` +
                    'Запустите `npm run generate:api-props` в корне репозитория и закоммитьте результат.',
            );
            process.exit(1);
        }

        console.log(`${path.relative(ROOT, BASE_OUT)} актуален`);

        return;
    }

    fs.writeFileSync(BASE_OUT, content);

    const skippedNote = skipped.length
        ? ` (${skipped.length} без типа <Name>Props, подробности — с флагом --stats)`
        : '';

    console.log(
        `Карта пропсов: ${Object.keys(components).length} компонентов -> ${path.relative(
            ROOT,
            BASE_OUT,
        )}${skippedNote}`,
    );
};

/**
 * Оверлей пакета: пропсы берём из типа самого компонента, поэтому здесь видны правки вертикали.
 */
const generatePackage = (packagePath, stats) => {
    const fromCwd = path.resolve(process.cwd(), packagePath);
    const packageDir = fs.existsSync(path.join(fromCwd, 'package.json')) ? fromCwd : path.resolve(ROOT, packagePath);
    const out = path.join(packageDir, '.storybook/apiProps.generated.ts');
    const entries = findComponentEntries([path.join(packageDir, 'src/components')]);

    const program = ts.createProgram(
        entries.flatMap(({ files }) => files),
        readConfig(packageDir),
    );
    const checker = program.getTypeChecker();
    const { fromType, fromComponent } = createExtractor(checker);

    const components = {};

    entries.forEach(({ key, component, files }) => {
        const props = new Set(components[key]?.raw);

        files.forEach((file) =>
            forEachExport(checker, program, file, (name, symbol) => {
                if (name === component) {
                    fromComponent(symbol, props);
                }

                if (name === `${component}Props`) {
                    fromType(symbol, props);
                }
            }),
        );

        if (props.size) {
            components[key] = { ...toEntry(props), raw: props };
        }
    });

    Object.values(components).forEach((entry) => delete entry.raw);

    if (stats) {
        printStats(components);

        return;
    }

    if (!Object.keys(components).length) {
        console.error(
            `${path.basename(packageDir)}: не удалось прочитать ни одного компонента.\n` +
                'Похоже, не собраны типы зависимостей — выполните `npm run setup:packages`.',
        );
        process.exit(1);
    }

    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, format(render(components), out));

    console.log(
        `${path.basename(packageDir)}: ${Object.keys(components).length} компонентов -> ${path.relative(ROOT, out)}`,
    );
};

const main = () => {
    const stats = process.argv.includes('--stats');
    const check = process.argv.includes('--check');
    const packageIndex = process.argv.indexOf('--package');

    if (packageIndex !== -1) {
        generatePackage(process.argv[packageIndex + 1], stats);

        return;
    }

    generateBase(stats, check);
};

main();
