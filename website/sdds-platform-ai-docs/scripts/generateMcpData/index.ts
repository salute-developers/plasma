import * as fs from 'fs';
import * as path from 'path';
import { z } from 'zod';

const OutputPropSchema = z.object({
    name: z.string(),
    type: z.string(),
    required: z.boolean(),
    default: z.string(),
    description: z.string(),
});

const ComponentOutputFileSchema = z.object({
    name: z.string(),
    package: z.string(),
    category: z.string(),
    summary: z.string(),
    api: z.object({
        props: z.array(OutputPropSchema),
    }),
    examples: z.array(
        z.object({
            title: z.string(),
            snippet: z.string(),
        }),
    ),
});

const SimpleOutputFileSchema = z.object({
    name: z.string(),
    package: z.string(),
    category: z.string(),
    summary: z.string(),
});

type ComponentOutputFile = z.infer<typeof ComponentOutputFileSchema>;
type SimpleOutputFile = z.infer<typeof SimpleOutputFileSchema>;
type OutputFile = ComponentOutputFile | SimpleOutputFile;

const IndexItemSchema = z.object({
    name: z.string(),
    href: z.string(),
    summary: z.string(),
    category: z.string(),
});

const ComponentsIndexSchema = z.array(IndexItemSchema);

const ManifestSchema = z.object({
    builtAt: z.string(),
    version: z.string(),
    source: z.object({
        repo: z.string(),
    }),
    paths: z.record(z.string(), z.string()),
});

interface InputItem {
    pageContent?: unknown;
    metadata?: {
        heading?: {
            text?: unknown;
        };
        source?: {
            url?: unknown;
        };
        category?: unknown;
        productId?: unknown;
    };
}

type IndexItem = z.infer<typeof IndexItemSchema>;

function asString(value: unknown): string {
    return typeof value === 'string' ? value : '';
}

function sanitizeFilename(name: string): string {
    return (
        name
            .trim()
            // eslint-disable-next-line no-control-regex
            .replace(/[<>:"/\\|?*\u0000-\u001f]/g, '_')
            .replace(/\s+/g, ' ')
    );
}

function normalizeCategory(value: string): string {
    return sanitizeFilename(value) || 'uncategorized';
}

function uniqueFileName(baseName: string, used: Set<string>): string {
    const safeBase = sanitizeFilename(baseName) || 'untitled';
    let candidate = safeBase;
    let suffix = 2;

    while (used.has(candidate)) {
        candidate = `${safeBase}-${suffix}`;
        suffix += 1;
    }

    used.add(candidate);
    return candidate;
}

function extractCategoryFromUrl(url: string): string {
    if (!url) {
        return '';
    }

    try {
        const parsed = new URL(url);
        const segments = parsed.pathname.split('/').filter(Boolean);
        if (segments.length >= 2) {
            return segments[segments.length - 2] ?? '';
        }
        return segments[0] ?? '';
    } catch {
        return '';
    }
}

function cleanText(value: string): string {
    return value
        .replace(/\r\n/g, '\n')
        .replace(/\s+\n/g, '\n')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
}

function normalizeFullContent(value: string): string {
    return value.replace(/\r\n/g, '\n').trim();
}

function stripCssVarFallbacks(value: string): string {
    let result = '';

    for (let i = 0; i < value.length; i += 1) {
        if (value.startsWith('var(', i)) {
            let depth = 0;
            let commaIndex = -1;
            let endIndex = -1;

            for (let j = i; j < value.length; j += 1) {
                const char = value[j];

                if (char === '(') {
                    depth += 1;
                } else if (char === ')') {
                    depth -= 1;
                    if (depth === 0) {
                        endIndex = j;
                        break;
                    }
                } else if (char === ',' && depth === 1 && commaIndex === -1) {
                    commaIndex = j;
                }
            }

            if (endIndex !== -1) {
                if (commaIndex !== -1) {
                    result += `${value.slice(i, commaIndex)})`;
                } else {
                    result += value.slice(i, endIndex + 1);
                }
                i = endIndex;

                // eslint-disable-next-line no-continue
                continue;
            }
        }

        result += value[i];
    }

    return result;
}

function escapeRegExp(value: string): string {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function normalizeMarkdown(value: string): string {
    return value
        .replace(/\r\n/g, '\n')
        .replace(/([^\n])\s(#{2,6}\s+)/g, '$1\n$2')
        .replace(/([^\n])\s(```[\w-]*\n)/g, '$1\n$2');
}

function extractSummary(pageContent: string, headingText: string): string {
    const normalized = normalizeMarkdown(pageContent);
    const heading = headingText.trim();
    const headingRegex = heading ? new RegExp(`^#\\s+${escapeRegExp(heading)}\\s*`, 'i') : /^#\s+\S+\s*/;
    const afterHeading = normalized.replace(headingRegex, '').trim();
    const beforeProps = afterHeading.split(/\bProps\b/i)[0] ?? afterHeading;
    const withoutBlocks = beforeProps
        .replace(/```[\s\S]*?```/g, ' ')
        .replace(/^#{1,6}\s+.*$/gm, ' ')
        .replace(/:::[\s\S]*?:::/g, ' ')
        .replace(/`([^`]+)`/g, '$1')
        .replace(/\s+/g, ' ')
        .trim();
    // @ts-ignore
    const sentence = withoutBlocks.match(/^(.{1,300}?[.!?])(?:\s|$)/u)?.[1];
    const summary = sentence ?? withoutBlocks.slice(0, 300);
    return cleanText(summary);
}

function findJsonArrayChunk(source: string, fromIndex: number): string {
    const start = source.indexOf('[', fromIndex);
    if (start === -1) {
        return '';
    }

    let depth = 0;
    let inString = false;
    let escaped = false;

    for (let i = start; i < source.length; i += 1) {
        const char = source[i];

        if (inString) {
            if (escaped) {
                escaped = false;
            } else if (char === '\\') {
                escaped = true;
            } else if (char === '"') {
                inString = false;
            }
            // eslint-disable-next-line no-continue
            continue;
        }

        if (char === '"') {
            inString = true;
            // eslint-disable-next-line no-continue
            continue;
        }

        if (char === '[') {
            depth += 1;
            // eslint-disable-next-line no-continue
            continue;
        }

        if (char === ']') {
            depth -= 1;
            if (depth === 0) {
                return source.slice(start, i + 1);
            }
        }
    }

    return '';
}

function toTypeString(type: unknown): string {
    if (typeof type === 'string') {
        return type;
    }

    if (type && typeof type === 'object') {
        const typeRecord = type as Record<string, unknown>;
        if (typeof typeRecord.raw === 'string') {
            return typeRecord.raw;
        }
        if (typeof typeRecord.name === 'string') {
            return typeRecord.name;
        }
        return JSON.stringify(typeRecord);
    }

    return '';
}

function toDefaultString(propRecord: Record<string, unknown>): string {
    if (typeof propRecord.default === 'string') {
        return propRecord.default;
    }

    const { defaultValue } = propRecord;
    if (typeof defaultValue === 'string') {
        return defaultValue;
    }

    if (defaultValue && typeof defaultValue === 'object') {
        const defaultRecord = defaultValue as Record<string, unknown>;
        if (typeof defaultRecord.value === 'string') {
            return defaultRecord.value;
        }
        return JSON.stringify(defaultRecord);
    }

    return '';
}

function extractProps(pageContent: string): ComponentOutputFile['api']['props'] {
    const propsMatch = /\bProps\b/i.exec(pageContent);
    if (!propsMatch) {
        return [];
    }

    const jsonChunk = findJsonArrayChunk(pageContent, propsMatch.index);
    if (!jsonChunk) {
        return [];
    }

    try {
        const parsed = JSON.parse(jsonChunk);
        if (!Array.isArray(parsed)) {
            return [];
        }

        return parsed.map((item) => {
            const propRecord = item && typeof item === 'object' ? (item as Record<string, unknown>) : {};
            const result = {
                name: asString(propRecord.name),
                type: toTypeString(propRecord.type),
                required: typeof propRecord.required === 'boolean' ? propRecord.required : false,
                default: toDefaultString(propRecord),
                description: asString(propRecord.description),
            };
            return OutputPropSchema.parse(result);
        });
    } catch {
        return [];
    }
}

function nearestHeading(markdown: string, offset: number): string {
    const before = markdown.slice(0, offset);
    const headings = before.match(/^#{2,6}\s+.+$/gm);
    if (!headings || headings.length === 0) {
        return '';
    }

    const last = headings[headings.length - 1] ?? '';
    return last.replace(/^#{2,6}\s+/, '').trim();
}

function compactTitle(rawTitle: string, fallbackIndex: number): string {
    const cleaned = cleanText(rawTitle).replace(/`/g, '');
    if (!cleaned) {
        return `Example ${fallbackIndex}`;
    }

    const firstTwoWords = cleaned.split(/\s+/).slice(0, 2).join(' ');
    if (firstTwoWords) {
        const repeatedAt = cleaned.toLowerCase().indexOf(firstTwoWords.toLowerCase(), firstTwoWords.length + 1);
        if (repeatedAt > 0) {
            return cleaned.slice(0, repeatedAt).trim();
        }
    }

    return cleaned.split(':')[0].trim() || `Example ${fallbackIndex}`;
}

function extractExamples(pageContent: string): ComponentOutputFile['examples'] {
    const normalized = normalizeMarkdown(pageContent);
    const examplesStart = normalized.search(/^##\s*Примеры\b/im);
    const source = examplesStart >= 0 ? normalized.slice(examplesStart) : normalized;

    const regex = /```[\t ]*([a-zA-Z0-9_-]+)?\n([\s\S]*?)```/g;
    const examples: ComponentOutputFile['examples'] = [];
    let match: RegExpExecArray | null;
    let count = 1;

    // eslint-disable-next-line no-cond-assign
    while ((match = regex.exec(source)) !== null) {
        const snippet = cleanText(match[2] ?? '');
        if (!snippet) {
            // eslint-disable-next-line no-continue
            continue;
        }

        const headingTitle = nearestHeading(source, match.index);
        const title = compactTitle(headingTitle, count);
        count += 1;

        examples.push({
            title,
            snippet,
        });
    }

    return examples;
}

function toOutputItem(item: InputItem): OutputFile {
    const pageContent = asString(item.pageContent);
    const name = asString(item.metadata?.heading?.text);
    const packageName = asString(item.metadata?.productId);
    const rawCategory =
        asString(item.metadata?.category) || extractCategoryFromUrl(asString(item.metadata?.source?.url));
    const category = normalizeCategory(rawCategory);

    if (category !== 'components') {
        return SimpleOutputFileSchema.parse({
            name,
            package: packageName,
            category,
            summary: normalizeFullContent(pageContent),
        });
    }

    return ComponentOutputFileSchema.parse({
        name,
        package: packageName,
        category,
        summary: extractSummary(pageContent, name),
        api: {
            props: extractProps(pageContent),
        },
        examples: extractExamples(pageContent),
    });
}

function getPackageManifestPath(): string {
    const docsPackageName = path.basename(path.resolve(__dirname, '../..'));
    const packageName = docsPackageName.replace(/-docs$/, '');

    return path.join(__dirname, `../../../../packages/${packageName}/package.json`);
}

function main(): void {
    const inputPath = path.join(__dirname, '../../index.json');
    const tokensInputPath = path.join(__dirname, '../../tokens.ts');
    const packageManifestPath = getPackageManifestPath();
    const outputDir = path.join(__dirname, '../..', 'mcpData');

    const rawInput = fs.readFileSync(inputPath, 'utf8');
    const parsedInput = JSON.parse(rawInput) as unknown;
    if (!Array.isArray(parsedInput)) {
        throw new Error('index.json must contain an array');
    }

    const rawPackageManifest = fs.readFileSync(packageManifestPath, 'utf8');
    const parsedPackageManifest = JSON.parse(rawPackageManifest) as { version?: unknown };
    const packageVersion = asString(parsedPackageManifest.version);

    // Rebuild output from scratch on every run.
    if (fs.existsSync(outputDir)) {
        fs.rmSync(outputDir, { recursive: true, force: true });
    }
    fs.mkdirSync(outputDir, { recursive: true });

    const usedNamesByCategory = new Map<string, Set<string>>();
    const indexItemsByCategory = new Map<string, IndexItem[]>();
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

    const getCategoryIndexItems = (category: string): IndexItem[] => {
        const existing = indexItemsByCategory.get(category);
        if (existing) {
            return existing;
        }

        const createdItems: IndexItem[] = [];
        indexItemsByCategory.set(category, createdItems);
        return createdItems;
    };

    const writeOutputFile = (output: OutputFile, baseName: string, indexSummary: string): void => {
        const categoryDir = path.join(outputDir, output.category);
        fs.mkdirSync(categoryDir, { recursive: true });

        const filename = uniqueFileName(baseName, getUsedNames(output.category));
        const filePath = path.join(categoryDir, `${filename}.json`);
        fs.writeFileSync(filePath, `${JSON.stringify(output, null, 2)}\n`, 'utf8');

        getCategoryIndexItems(output.category).push(
            IndexItemSchema.parse({
                name: output.name,
                href: `${filename}.json`,
                summary: indexSummary,
                category: output.category,
            }),
        );

        created += 1;
    };

    parsedInput.forEach((item, index) => {
        const inputItem = (item ?? {}) as InputItem;
        const output = toOutputItem(inputItem);
        const pageContent = asString(inputItem.pageContent);
        const baseName = output.name || `item-${index + 1}`;
        const indexSummary =
            output.category === 'components' ? output.summary : extractSummary(pageContent, output.name);
        writeOutputFile(output, baseName, indexSummary);
    });

    if (fs.existsSync(tokensInputPath)) {
        const tokensSource = fs.readFileSync(tokensInputPath, 'utf8');
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

    const manifestPaths: Record<string, string> = {};

    indexItemsByCategory.forEach((items, category) => {
        const categoryIndexPath = path.join(outputDir, category, 'index.json');
        const categoryIndex = ComponentsIndexSchema.parse(items);
        fs.writeFileSync(categoryIndexPath, `${JSON.stringify(categoryIndex, null, 2)}\n`, 'utf8');
        manifestPaths[category] = path.posix.join(category, 'index.json');
        console.log(`Created category index: ${categoryIndexPath}`);
    });

    const manifest = ManifestSchema.parse({
        builtAt: new Date().toISOString(),
        version: packageVersion,
        source: {
            repo: 'https://github.com/salute-developers/plasma',
        },
        paths: manifestPaths,
    });

    const manifestPath = path.join(outputDir, 'manifest.json');
    fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');

    console.log(`Created ${created} files in ${outputDir}`);
    console.log(`Created manifest: ${manifestPath}`);
}

if (require.main === module) {
    main();
}
