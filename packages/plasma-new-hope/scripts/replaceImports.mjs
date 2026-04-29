/**
 * Скрипт переписывает импорты styled-components в сгенерированных
 * src-css/src-emotion директориях для prebuild-сборок под Linaria и Emotion.
 * */

import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();

const MODES = {
    css: {
        root: 'src-css',
        cssImportPath: '@linaria/core',
        styledImportPath: '@linaria/react',
        engine: 'linaria',
        styledIsNamed: true,
    },
    emotion: {
        root: 'src-emotion',
        cssImportPath: '@emotion/react',
        styledImportPath: '@emotion/styled',
        engine: 'emotion',
        styledIsNamed: false,
    },
};

function parseArgs(argv) {
    let mode = 'css';

    for (let i = 0; i < argv.length; i += 1) {
        const arg = argv[i];

        if (arg === '--mode' || arg === '--target') {
            mode = argv[i + 1] || mode;
            i += 1;
        }
    }

    if (!MODES[mode]) {
        throw new Error(`Unknown mode "${mode}". Expected one of: ${Object.keys(MODES).join(', ')}`);
    }

    const { root } = MODES[mode];

    return {
        ...MODES[mode],
        targetDirs: [`${root}/components`, `${root}/examples`],
        engineFiles: [`${root}/engines/index.ts`, `${root}/engines/common.tsx`],
    };
}

function walk(dir) {
    const fullDir = path.join(ROOT, dir);

    if (!fs.existsSync(fullDir)) {
        return [];
    }

    const result = [];

    for (const entry of fs.readdirSync(fullDir, { withFileTypes: true })) {
        const fullPath = path.join(fullDir, entry.name);

        if (entry.isDirectory()) {
            result.push(...walk(path.relative(ROOT, fullPath)));
            // eslint-disable-next-line no-continue
            continue;
        }

        if (/\.(ts|tsx)$/.test(entry.name)) {
            result.push(fullPath);
        }
    }

    return result;
}

function uniq(arr) {
    return [...new Set(arr)];
}

function parseStyledComponentsImport(clause) {
    const namedMatch = clause.match(/\{([\s\S]*?)\}/);
    const namedImports = (namedMatch?.[1] || '')
        .split(',')
        .map((part) => part.trim())
        .filter(Boolean);

    const outerImports = clause
        .replace(/\{[\s\S]*?\}/, ' ')
        .split(',')
        .map((part) => part.trim())
        .filter(Boolean);

    const cssImport = namedImports.find((part) => /^css(?:\s+as\s+.+)?$/.test(part)) || null;
    const otherNamedImports = namedImports.filter((part) => part !== cssImport);

    return {
        styledImport: outerImports[0] || null,
        cssImport,
        otherNamedImports,
    };
}

function makeStyledImport(localName, config) {
    if (!localName) {
        return null;
    }

    if (config.styledIsNamed) {
        return localName === 'styled'
            ? `import { styled } from '${config.styledImportPath}';`
            : `import { styled as ${localName} } from '${config.styledImportPath}';`;
    }

    return `import ${localName} from '${config.styledImportPath}';`;
}

function makeCssImport(specifier, config) {
    if (!specifier) {
        return null;
    }

    const cssMatch = specifier.match(/^css(?:\s+as\s+([A-Za-z_$][\w$]*))?$/);
    const localName = cssMatch?.[1] || 'css';

    return localName === 'css'
        ? `import { css } from '${config.cssImportPath}';`
        : `import { css as ${localName} } from '${config.cssImportPath}';`;
}

function replaceStyledComponentsImports(content, config) {
    return content.replace(/^import\s+([^;\n]+?)\s+from\s+['"]styled-components['"];?$/gm, (fullImport, clause) => {
        const { styledImport, cssImport, otherNamedImports } = parseStyledComponentsImport(clause.trim());
        const nextImports = [
            makeStyledImport(styledImport, config),
            makeCssImport(cssImport, config),
            otherNamedImports.length ? `import { ${otherNamedImports.join(', ')} } from 'styled-components';` : null,
        ].filter(Boolean);

        return nextImports.length ? uniq(nextImports).join('\n') : fullImport;
    });
}

function replaceSourceAliases(content, config) {
    return content.replace(/from\s+(['"])src\/([^'"]+)\1/g, `from $1${config.root}/$2$1`);
}

function isEngineFile(filePath, config) {
    return config.engineFiles.some((engineFile) => filePath.endsWith(path.normalize(engineFile)));
}

function processFile(filePath, config) {
    const original = fs.readFileSync(filePath, 'utf8');
    let updated = original;

    updated = replaceStyledComponentsImports(updated, config);
    updated = replaceSourceAliases(updated, config);

    if (isEngineFile(filePath, config)) {
        updated = updated.replace(/styled-components/g, config.engine);
    }

    if (updated !== original) {
        fs.writeFileSync(filePath, updated, 'utf8');
    }
}

function main() {
    const config = parseArgs(process.argv.slice(2));
    const files = uniq(config.targetDirs.flatMap((dir) => walk(dir)));

    files.forEach((file) => processFile(file, config));

    config.engineFiles
        .map((file) => path.join(ROOT, file))
        .filter((file) => fs.existsSync(file))
        .forEach((file) => processFile(file, config));
}

main();
