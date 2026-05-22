import * as fs from 'fs';
import * as path from 'path';
import { getIconAsset, getIconComponent, getSingleSizeIconComponent } from './utils';

const rootPath = './src-build/scalable';

const sourceDirectory16 = `${rootPath}/Icon.svg.16`;
const sourceDirectory36 = `${rootPath}/Icon.svg.36`;
const sourceDirectory = `${rootPath}/Icon.svg.24`;

const AssetDirectory16 = `${rootPath}/Icon.assets.16`;
const AssetDirectory24 = `${rootPath}/Icon.assets.24`;
const AssetDirectory36 = `${rootPath}/Icon.assets.36`;

const IconsDirectory = `${rootPath}/Icons`;
// Single-size компоненты — каждый тянет только свой ассет, что даёт tree-shaking-у
// убрать неиспользуемые размеры через subpath-импорт `@salutejs/plasma-icons/16|24|36`.
const IconsDirectory16 = `${rootPath}/Icons.16`;
const IconsDirectory24 = `${rootPath}/Icons.24`;
const IconsDirectory36 = `${rootPath}/Icons.36`;

const IndexPath = `${rootPath}/index.ts`;
const IndexPath16 = `${rootPath}/index.16.ts`;
const IndexPath24 = `${rootPath}/index.24.ts`;
const IndexPath36 = `${rootPath}/index.36.ts`;
const IconPath = `${rootPath}/Icon.tsx`;

const destinations = [
    AssetDirectory16,
    AssetDirectory24,
    AssetDirectory36,
    IconsDirectory,
    IconsDirectory16,
    IconsDirectory24,
    IconsDirectory36,
];

const files = fs.readdirSync(sourceDirectory);

// INFO: заглушка под другие размеры, использовать по необходимости
// const assetContentNull = `export const ${componentName} = null;\n`;
// @example
// fs.writeFileSync(getPath(AssetDirectory42, componentName), assetContentNull, 'utf8')

// Создаем директории, если нет
destinations.forEach((destination) => {
    if (!fs.existsSync(destination)) {
        fs.mkdirSync(destination);
    }
});

const names: Array<string> = [];

const getPath = (dir: string, name: string) => {
    return path.join(dir, `${name}.tsx`);
};

files.forEach((file) => {
    const extension = path.extname(file);

    if (extension !== '.svg') {
        return;
    }

    const svg16 = fs.readFileSync(path.join(sourceDirectory16, file), 'utf8');
    const svg24 = fs.readFileSync(path.join(sourceDirectory, file), 'utf8');
    const svg36 = fs.readFileSync(path.join(sourceDirectory36, file), 'utf8');

    const componentName = path.parse(file).name;

    let replacedName = path.parse(file).name;
    const hasKeyWord = /sber/i.test(componentName);

    // INFO: После того как устаревшие иконки будут удалены, часть дублирования уйдет.
    if (hasKeyWord) {
        // INFO: Заменяем ключевое слово и приводим к формату аля SbBoomCast, вместо SbboomCast
        replacedName = componentName
            .replace(/sber/i, 'Sb')
            .replace(/(Sb)(.)/, (_, sb, char) => sb + char.toUpperCase());

        // INFO: Если дизайн уже поставил исправленный вектор с правильным именем
        // (например, `SbBoomCast.svg`), не создаем переименованную копию из устаревшего
        // вектора - правильная иконка сгенерируется напрямую из нового файла.
        // Устаревшая иконка всё равно будет помечена @deprecated со ссылкой @see Icon<replacedName>.
        const correctedFileName = `${replacedName}.svg`;
        const correctedExists = files.includes(correctedFileName);

        if (correctedExists) {
            // INFO: Триггером отключения дедупликации считаем наличие файла в Icon.svg.24
            // (по этой директории идёт итерация). Дизайн, как правило, поставляет все размеры, поэтому
            // отсутствие 16/36 — повод задать вопрос правильно ли это.
            const missingSizes = [
                { dir: sourceDirectory16, label: 'Icon.svg.16' },
                { dir: sourceDirectory36, label: 'Icon.svg.36' },
            ]
                .filter(({ dir }) => !fs.existsSync(path.join(dir, correctedFileName)))
                .map(({ label }) => label);

            if (missingSizes.length > 0) {
                // eslint-disable-next-line no-console
                console.warn(
                    `[generateReactComponents] Неполный набор размеров для исправленной иконки "${correctedFileName}": отсутствует в ${missingSizes.join(
                        ', ',
                    )}.`,
                );
            }
        } else {
            const componentContent = getIconComponent(replacedName);

            names.push(replacedName);

            const assetContent16 = getIconAsset(svg16, replacedName);
            const assetContent24 = getIconAsset(svg24, replacedName);
            const assetContent36 = getIconAsset(svg36, replacedName);

            fs.writeFileSync(getPath(AssetDirectory16, replacedName), assetContent16, 'utf8');
            fs.writeFileSync(getPath(AssetDirectory24, replacedName), assetContent24, 'utf8');
            fs.writeFileSync(getPath(AssetDirectory36, replacedName), assetContent36, 'utf8');

            fs.writeFileSync(getPath(IconsDirectory, `Icon${replacedName}`), componentContent, 'utf8');

            // single-size компоненты для tree-shaking-friendly subpath-импортов
            fs.writeFileSync(
                getPath(IconsDirectory16, `Icon${replacedName}`),
                getSingleSizeIconComponent(replacedName, 16),
                'utf8',
            );
            fs.writeFileSync(
                getPath(IconsDirectory24, `Icon${replacedName}`),
                getSingleSizeIconComponent(replacedName, 24),
                'utf8',
            );
            fs.writeFileSync(
                getPath(IconsDirectory36, `Icon${replacedName}`),
                getSingleSizeIconComponent(replacedName, 36),
                'utf8',
            );
        }
    }

    names.push(componentName);

    const assetContent16 = getIconAsset(svg16, componentName);
    const assetContent24 = getIconAsset(svg24, componentName);
    const assetContent36 = getIconAsset(svg36, componentName);

    const componentContent = getIconComponent(componentName, {
        deprecated: hasKeyWord,
        replacement: `Icon${replacedName}`,
    });

    // генерируем файлы-assets
    fs.writeFileSync(getPath(AssetDirectory16, componentName), assetContent16, 'utf8');
    fs.writeFileSync(getPath(AssetDirectory24, componentName), assetContent24, 'utf8');
    fs.writeFileSync(getPath(AssetDirectory36, componentName), assetContent36, 'utf8');

    // генерируем компонент
    fs.writeFileSync(getPath(IconsDirectory, `Icon${componentName}`), componentContent, 'utf8');

    // single-size компоненты — пробрасываем @deprecated для Sber-aliased имён,
    // чтобы IDE подсказывал миграцию на `Icon${replacedName}` и через subpath-импорты.
    const singleSizeOptions = { deprecated: hasKeyWord, replacement: `Icon${replacedName}` };
    fs.writeFileSync(
        getPath(IconsDirectory16, `Icon${componentName}`),
        getSingleSizeIconComponent(componentName, 16, singleSizeOptions),
        'utf8',
    );
    fs.writeFileSync(
        getPath(IconsDirectory24, `Icon${componentName}`),
        getSingleSizeIconComponent(componentName, 24, singleSizeOptions),
        'utf8',
    );
    fs.writeFileSync(
        getPath(IconsDirectory36, `Icon${componentName}`),
        getSingleSizeIconComponent(componentName, 36, singleSizeOptions),
        'utf8',
    );
});

// Помечаем root-экспорты `@deprecated`: компонент из общего barrel-а тянет ассеты
// для всех трёх размеров (16/24/36), что ломает tree-shaking — потребитель получает
// ~3x больший вес даже при статическом `size`. Миграция тривиальна для статических
// размеров: импортировать тот же `IconX` из `@salutejs/plasma-icons/16|24|36`.
// Для динамического `size` миграции нет — этот warning стоит подавить локально.
const indexExport = names
    .map((name) => {
        return `/**
 * @deprecated Импорт \`Icon${name}\` из \`@salutejs/plasma-icons\` тянет ассеты для всех 3 размеров (16/24/36),
 * что увеличивает бандл в ~3 раза и не поддаётся tree-shaking-у. Замените на
 * \`import { Icon${name} } from '@salutejs/plasma-icons/16'\` (или \`/24\`, \`/36\`) —
 * потребитель получит ровно один размер. Если \`size\` определяется в рантайме динамически,
 * подавите предупреждение локально (\`// eslint-disable-next-line deprecation/deprecation\`).
 */
export { Icon${name} } from '.${IconsDirectory.replace(rootPath, '')}/Icon${name}';`;
    })
    .join('\n');

fs.appendFileSync(IndexPath, indexExport, 'utf8');

// barrel-файлы для single-size subpath-импортов.
// Legacy-иконки (`old/Icons/*`) тоже реэкспортируем — у них размер фиксирован
// в самом SVG, потребитель ожидает что они доступны через тот же entry.
const legacyIconsDir = './src-build/old/Icons';
const legacyNames = fs.existsSync(legacyIconsDir)
    ? fs
          .readdirSync(legacyIconsDir)
          .filter((f) => f.endsWith('.tsx') && /^Icon/.test(f))
          .map((f) => f.replace(/\.tsx$/, ''))
    : [];
const legacyBarrel = legacyNames
    .map((iconName) => `export { ${iconName} } from '../old/Icons/${iconName}';`)
    .join('\n');

for (const [iconsDir, indexPath] of [
    [IconsDirectory16, IndexPath16],
    [IconsDirectory24, IndexPath24],
    [IconsDirectory36, IndexPath36],
] as const) {
    const dirRel = iconsDir.replace(rootPath, '.');
    const sizedExports = names.map((name) => `export { Icon${name} } from '${dirRel}/Icon${name}';`).join('\n');
    fs.writeFileSync(indexPath, sizedExports + '\n' + legacyBarrel + '\n', 'utf8');
}

// добавляем mapping по категориям
let dataIconFile = fs.readFileSync(IconPath, 'utf8');

const iconImports = [];

names.forEach((name) => {
    const regex = new RegExp(`'${name}'`);
    const iconName = `Icon${name}`;

    // INFO: В файле Icon.tsx заменяем строку типа alarmAddFill: 'AlarmAddFill' -> alarmAddFill: IconAlarmAddFill
    dataIconFile = dataIconFile.replace(regex, iconName);

    iconImports.push(`import { ${iconName} } from './Icons/${iconName}';`);
});

const resultIconFile = iconImports.join('\n') + '\n\n' + dataIconFile;

fs.writeFileSync(IconPath, resultIconFile, 'utf8');
