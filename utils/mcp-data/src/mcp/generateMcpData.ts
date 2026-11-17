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

function toOutputItem(item: InputItem, config: ResolvedMcpDataConfig, isComponentCategory: (c: string) => boolean) {
    const pageContent = asString(item.pageContent);
    const name = asString(item.metadata?.heading?.text);
    const packageName = asString(item.metadata?.productId);
    const rawCategory =
        asString(item.metadata?.category) || extractCategoryFromUrl(asString(item.metadata?.source?.url));
    const category = normalizeCategory(rawCategory);

    if (!isComponentCategory(category)) {
        return SimpleOutputFileSchema.parse({
            name,
            package: packageName,
            category,
            summary: normalizeFullContent(pageContent),
        });
    }

    return ComponentOutputFileSchema.parse({
        name,
        package: config.extraComponentCategories[category]?.package ?? packageName,
        category,
        summary: extractSummary(pageContent, name),
        api: {
            props: extractProps(pageContent),
        },
        examples: extractExamples(pageContent),
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

    const parsedPackageManifest = JSON.parse(fs.readFileSync(site.packageJsonPath, 'utf8')) as { version?: unknown };
    const packageVersion = asString(parsedPackageManifest.version);

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

    parsedInput.forEach((item, index) => {
        const inputItem = (item ?? {}) as InputItem;
        const output = toOutputItem(inputItem, config, isComponentCategory);
        const pageContent = asString(inputItem.pageContent);
        const baseName = output.name || `item-${index + 1}`;
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
