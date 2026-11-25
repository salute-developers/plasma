import fs from 'node:fs';
import path from 'node:path';

import type { Site } from '../site.ts';
import type { ResolvedMcpDataConfig } from '../config.ts';

import {
    ComponentOutputFileSchema,
    ComponentsIndexSchema,
    IndexItemSchema,
    ManifestSchema,
    SimpleOutputFileSchema,
} from './schemas.ts';
import type { CategoryIndexItem, InputItem, OutputFile } from './schemas.ts';
import { extractExamples } from './examples.ts';
import { extractProps } from './props.ts';
import { extractSummary } from './summary.ts';
import { readTokensSource } from './tokens.ts';
import {
    asString,
    cleanText,
    extractCategoryFromUrl,
    normalizeCategory,
    normalizeFullContent,
    stripCssVarFallbacks,
    uniqueFileName,
} from './text.ts';

const COMPONENTS_CATEGORY = 'components';
const SOURCE_REPO = 'https://github.com/salute-developers/plasma';

interface OutputContext {
    config: ResolvedMcpDataConfig;
    lib: string;
    /** Имя npm-пакета вертикали, например `@salutejs/sdds-finai`. */
    npmName: string;
    isComponentCategory: (category: string) => boolean;
    /** Имя beta-компонента без префикса → путь импорта. По нему стабильный паспорт ссылается на beta-версию. */
    betaImportPaths: Map<string, string>;
}

type PackageContext = Pick<OutputContext, 'lib' | 'npmName'>;

/** `sdds-finai/beta` → `@salutejs/sdds-finai/beta`: путь импорта по имени npm-пакета вертикали. */
function toImportPath(categoryPackage: string, { lib, npmName }: PackageContext): string {
    if (!npmName || (categoryPackage !== lib && !categoryPackage.startsWith(`${lib}/`))) {
        return categoryPackage;
    }

    return `${npmName}${categoryPackage.slice(lib.length)}`;
}

function getBetaWarning(importPath: string): string {
    return (
        `Beta-компонент: импортируется только из \`${importPath}\`. ` +
        'Если есть стабильный компонент с тем же именем, предпочитай beta-версию.'
    );
}

function getBetaRecommendation(name: string, importPath: string): string {
    return (
        `У компонента есть beta-версия \`beta/${name}\` (импорт из \`${importPath}\`). ` +
        `Предпочитай её: паспорт — get_component с именем \`beta/${name}\`.`
    );
}

function getItemCategory(item: InputItem): string {
    const rawCategory =
        asString(item.metadata?.category) || extractCategoryFromUrl(asString(item.metadata?.source?.url));

    return normalizeCategory(rawCategory);
}

/** Собирает beta-компоненты: имя без префикса → путь импорта. При повторе имени остаётся первый. */
function collectBetaImportPaths(
    items: InputItem[],
    config: ResolvedMcpDataConfig,
    packageContext: PackageContext,
): Map<string, string> {
    const betaImportPaths = new Map<string, string>();

    items.forEach((item) => {
        const categoryConfig = config.extraComponentCategories[getItemCategory(item)];
        const name = asString(item.metadata?.heading?.text);

        if (categoryConfig?.stability === 'beta' && name && !betaImportPaths.has(name)) {
            betaImportPaths.set(name, toImportPath(categoryConfig.package, packageContext));
        }
    });

    return betaImportPaths;
}

function toOutputItem(item: InputItem, context: OutputContext) {
    const { config, isComponentCategory } = context;
    const pageContent = asString(item.pageContent);
    const name = asString(item.metadata?.heading?.text);
    const packageName = asString(item.metadata?.productId);
    const category = getItemCategory(item);

    if (!isComponentCategory(category)) {
        return SimpleOutputFileSchema.parse({
            name,
            package: packageName,
            category,
            summary: normalizeFullContent(pageContent),
        });
    }

    const categoryConfig = config.extraComponentCategories[category];
    const componentPackage = categoryConfig?.package ?? packageName;
    const summary = extractSummary(pageContent, name);
    const common = {
        package: componentPackage,
        category,
        api: {
            props: extractProps(pageContent),
        },
        examples: extractExamples(pageContent),
    };

    if (categoryConfig?.stability === 'beta') {
        // Префикс отличает beta-компонент от одноимённого стабильного: get_component ищет по точному имени.
        return ComponentOutputFileSchema.parse({
            name: `beta/${name}`,
            ...common,
            summary: `[BETA] ${summary}`,
            stability: 'beta',
            warning: getBetaWarning(toImportPath(componentPackage, context)),
        });
    }

    // Ссылка на beta-версию — только у стабильного компонента из `components`, а не у других категорий.
    const betaImportPath = category === COMPONENTS_CATEGORY ? context.betaImportPaths.get(name) : undefined;

    return ComponentOutputFileSchema.parse({
        name,
        ...common,
        summary,
        ...(betaImportPath && { recommendation: getBetaRecommendation(name, betaImportPath) }),
    });
}

/** Превращает `index.json` в `mcpData/`: файлы по категориям, `<категория>/index.json` и `manifest.json`. */
export function generateMcpData(site: Site, config: ResolvedMcpDataConfig): void {
    const isComponentCategory = (category: string): boolean =>
        category === COMPONENTS_CATEGORY || Object.keys(config.extraComponentCategories).includes(category);

    if (!fs.existsSync(site.indexJsonPath)) {
        throw new Error(`Не найден ${site.indexJsonPath}. Сначала выполните шаг index.`);
    }

    const parsedInput = JSON.parse(fs.readFileSync(site.indexJsonPath, 'utf8')) as unknown;
    if (!Array.isArray(parsedInput)) {
        throw new Error('index.json must contain an array');
    }

    const parsedPackageManifest = JSON.parse(fs.readFileSync(site.packageJsonPath, 'utf8')) as {
        name?: unknown;
        version?: unknown;
    };
    const packageVersion = asString(parsedPackageManifest.version);
    const inputItems = parsedInput.map((item) => (item ?? {}) as InputItem);
    const packageContext: PackageContext = { lib: site.lib, npmName: asString(parsedPackageManifest.name) };
    const outputContext: OutputContext = {
        config,
        ...packageContext,
        isComponentCategory,
        betaImportPaths: collectBetaImportPaths(inputItems, config, packageContext),
    };

    // Читаем до очистки outputDir: если модуль токенов не найден, прошлый результат остаётся целым.
    const tokensSource = config.tokens ? readTokensSource(site, config.tokens.entry) : undefined;

    // Rebuild output from scratch on every run.
    if (fs.existsSync(site.outputDir)) {
        fs.rmSync(site.outputDir, { recursive: true, force: true });
    }
    fs.mkdirSync(site.outputDir, { recursive: true });

    const usedNamesByCategory = new Map<string, Set<string>>();
    const indexItemsByCategory = new Map<string, CategoryIndexItem[]>();
    // Компоненты из дополнительных категорий, которые нужно добавить в индекс components.
    const extraComponentItems: CategoryIndexItem[] = [];
    let created = 0;

    const getUsedNames = (category: string): Set<string> => {
        const existing = usedNamesByCategory.get(category);
        if (existing) {
            return existing;
        }

        const createdSet = new Set<string>();
        usedNamesByCategory.set(category, createdSet);
        return createdSet;
    };

    const getCategoryIndexItems = (category: string): CategoryIndexItem[] => {
        const existing = indexItemsByCategory.get(category);
        if (existing) {
            return existing;
        }

        const createdItems: CategoryIndexItem[] = [];
        indexItemsByCategory.set(category, createdItems);
        return createdItems;
    };

    const writeOutputFile = (output: OutputFile, baseName: string, indexSummary: string): void => {
        const categoryDir = path.join(site.outputDir, output.category);
        fs.mkdirSync(categoryDir, { recursive: true });

        const filename = uniqueFileName(baseName, getUsedNames(output.category));
        const filePath = path.join(categoryDir, `${filename}.json`);
        fs.writeFileSync(filePath, `${JSON.stringify(output, null, 2)}\n`, 'utf8');

        const indexItem = IndexItemSchema.parse({
            name: output.name,
            href: `${filename}.json`,
            summary: indexSummary,
            category: output.category,
        });
        getCategoryIndexItems(output.category).push(indexItem);

        if (output.category !== COMPONENTS_CATEGORY && isComponentCategory(output.category)) {
            // href разрешается относительно components/index.json, поэтому файл остаётся в папке своей категории.
            extraComponentItems.push({ ...indexItem, href: `../${output.category}/${filename}.json` });
        }

        created += 1;
    };

    inputItems.forEach((inputItem, index) => {
        const output = toOutputItem(inputItem, outputContext);
        const pageContent = asString(inputItem.pageContent);
        // Файл называется по исходному имени: у beta-компонентов `name` с префиксом, а папка и так `beta/`.
        const baseName = asString(inputItem.metadata?.heading?.text) || output.name || `item-${index + 1}`;
        const indexSummary = isComponentCategory(output.category)
            ? output.summary
            : extractSummary(pageContent, output.name);
        writeOutputFile(output, baseName, indexSummary);
    });

    if (tokensSource !== undefined) {
        const transformedTokensSource = stripCssVarFallbacks(tokensSource);
        const tokensOutput = SimpleOutputFileSchema.parse({
            name: 'tokens.ts',
            package: 'plasma-tokens',
            category: 'tokens',
            summary: transformedTokensSource,
        });

        writeOutputFile(
            tokensOutput,
            tokensOutput.name,
            cleanText(transformedTokensSource).slice(0, 300) || tokensOutput.name,
        );
    }

    getCategoryIndexItems(COMPONENTS_CATEGORY).push(...extraComponentItems);

    const manifestPaths: Record<string, string> = {};

    indexItemsByCategory.forEach((items, category) => {
        const categoryIndexPath = path.join(site.outputDir, category, 'index.json');
        const categoryIndex = ComponentsIndexSchema.parse(items);
        fs.writeFileSync(categoryIndexPath, `${JSON.stringify(categoryIndex, null, 2)}\n`, 'utf8');
        manifestPaths[category] = path.posix.join(category, 'index.json');
        console.log(`Created category index: ${categoryIndexPath}`);
    });

    const manifest = ManifestSchema.parse({
        builtAt: new Date().toISOString(),
        version: packageVersion,
        source: {
            repo: SOURCE_REPO,
        },
        tools: config.tools,
        paths: manifestPaths,
    });

    const manifestPath = path.join(site.outputDir, 'manifest.json');
    fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');

    console.log(`Created ${created} files in ${site.outputDir}`);
    console.log(`Created manifest: ${manifestPath}`);
}
