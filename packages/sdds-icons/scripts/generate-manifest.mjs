import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const sizes = [16, 24, 36];
const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const svgRoot = path.join(packageRoot, 'svg');
const outputRoot = path.join(packageRoot, 'mcpData');
const manifestPath = path.join(outputRoot, 'manifest.json');

const compareNames = (left, right) => left.localeCompare(right, 'en');

const decodeXmlEntities = (value, filePath) =>
    value.replace(/&(#x[\da-f]+|#\d+|amp|apos|gt|lt|quot);/gi, (entity, code) => {
        const namedEntities = {
            amp: '&',
            apos: "'",
            gt: '>',
            lt: '<',
            quot: '"',
        };
        const normalizedCode = code.toLowerCase();

        if (Object.prototype.hasOwnProperty.call(namedEntities, normalizedCode)) {
            return namedEntities[normalizedCode];
        }

        const radix = normalizedCode.startsWith('#x') ? 16 : 10;
        const rawCodePoint = normalizedCode.replace(/^#x?/, '');
        const codePoint = Number.parseInt(rawCodePoint, radix);

        if (!Number.isSafeInteger(codePoint)) {
            throw new Error(`Invalid XML entity "${entity}" in ${filePath}`);
        }

        return String.fromCodePoint(codePoint);
    });

const assertNonEmptyString = (value, field, filePath) => {
    if (typeof value !== 'string' || value.trim() === '') {
        throw new Error(`SVG metadata field "${field}" must be a non-empty string in ${filePath}`);
    }

    return value;
};

const readMetadata = async ({ fileName, size }) => {
    const filePath = path.join(svgRoot, String(size), fileName);
    const svg = await fs.readFile(filePath, 'utf8');
    const metadataMatch = svg.match(/<metadata(?:\s[^>]*)?>([\s\S]*?)<\/metadata>/i);

    if (!metadataMatch) {
        throw new Error(`SVG does not contain a <metadata> element: ${filePath}`);
    }

    let metadata;

    try {
        metadata = JSON.parse(decodeXmlEntities(metadataMatch[1].trim(), filePath));
    } catch (error) {
        throw new Error(`Cannot parse SVG metadata in ${filePath}: ${error.message}`, { cause: error });
    }

    if (!metadata || typeof metadata !== 'object' || Array.isArray(metadata)) {
        throw new Error(`SVG metadata must be a JSON object in ${filePath}`);
    }

    if (!Array.isArray(metadata.aliases) || metadata.aliases.length === 0) {
        throw new Error(`SVG metadata field "aliases" must be a non-empty array in ${filePath}`);
    }

    const aliases = metadata.aliases.map((alias, index) =>
        assertNonEmptyString(alias, `aliases[${index}]`, filePath),
    );
    const category = assertNonEmptyString(metadata.category, 'category', filePath);
    const source = assertNonEmptyString(metadata.source, 'source', filePath);
    const metadataSize = Number(metadata.size);

    if (metadataSize !== size) {
        throw new Error(`SVG metadata size "${metadata.size}" does not match directory size "${size}" in ${filePath}`);
    }

    return {
        aliases,
        category,
        size: metadataSize,
        source,
    };
};

const getIconNames = async (size) => {
    const entries = await fs.readdir(path.join(svgRoot, String(size)), { withFileTypes: true });

    return entries
        .filter((entry) => entry.isFile() && path.extname(entry.name) === '.svg')
        .map((entry) => entry.name)
        .sort(compareNames);
};

const assertSameIconSets = (iconNamesBySize) => {
    const referenceNames = iconNamesBySize[0];

    for (let index = 1; index < iconNamesBySize.length; index += 1) {
        if (referenceNames.join('\n') !== iconNamesBySize[index].join('\n')) {
            throw new Error(`Icon sets for sizes ${sizes[0]} and ${sizes[index]} are different`);
        }
    }
};

const assertSameSearchMetadata = ({ iconName, metadataBySize }) => {
    const reference = metadataBySize[0];

    for (let index = 1; index < metadataBySize.length; index += 1) {
        const current = metadataBySize[index];

        if (reference.category !== current.category || reference.aliases.join('\n') !== current.aliases.join('\n')) {
            throw new Error(
                `Search metadata for icon "${iconName}" differs between sizes ${reference.size} and ${current.size}`,
            );
        }
    }
};

const readPackageVersion = async () => {
    const packageJsonPath = path.join(packageRoot, 'package.json');
    const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf8'));

    return assertNonEmptyString(packageJson.version, 'version', packageJsonPath);
};

const generateManifest = async () => {
    const [version, ...iconNamesBySize] = await Promise.all([
        readPackageVersion(),
        ...sizes.map((size) => getIconNames(size)),
    ]);

    assertSameIconSets(iconNamesBySize);

    const icons = [];

    for (const fileName of iconNamesBySize[0]) {
        const name = path.basename(fileName, '.svg');
        const metadataBySize = await Promise.all(sizes.map((size) => readMetadata({ fileName, size })));

        assertSameSearchMetadata({ iconName: name, metadataBySize });

        icons.push({
            name,
            aliases: metadataBySize[0].aliases,
            category: metadataBySize[0].category,
            sizes: metadataBySize.map(({ size }) => size),
        });
    }

    return {
        schemaVersion: 1,
        builtAt: new Date().toISOString(),
        version,
        source: {
            repo: 'https://github.com/salute-developers/plasma',
            path: 'packages/sdds-icons',
        },
        icons,
    };
};

const manifest = await generateManifest();

await fs.rm(outputRoot, { recursive: true, force: true });
await fs.mkdir(outputRoot, { recursive: true });
await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');

console.log(`Created MCP manifest with ${manifest.icons.length} icons: ${manifestPath}`);
