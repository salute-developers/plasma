import path from 'node:path';

import { absFrom, listByGlob, readText, toPosixPath, writeText } from './fs.mjs';
import {
    collectMissingTokensFromPerLineNotes,
    ensureSingleBlankAfterImports,
    findInsertAfterImports,
    removeDuplicateBlockClosers,
    uniqSorted,
    upsertTopSummaryNoteBlock,
} from './notes.mjs';
import { componentRootFolderFromComponentsRel, ensurePlasmaNewHopeStyledComponentsImport } from './plasma-imports.mjs';
import { kebabToCamel, loadTokenExportsSet } from './tokens.mjs';

function leadingWs(s) {
    const m = s.match(/^\s*/);
    return m ? m[0] : '';
}

function isNoteLine(line) {
    return line.includes('// NOTE: no token ') || line.includes('/* NOTE: no token ');
}

function formatNoteIndent(source) {
    const lines = source.split('\n');
    let changed = false;

    for (let i = 0; i < lines.length; i++) {
        if (!isNoteLine(lines[i])) continue;

        let j = i + 1;
        while (j < lines.length && lines[j].trim() === '') j++;
        if (j >= lines.length) continue;

        const desired = leadingWs(lines[j]);
        const current = leadingWs(lines[i]);
        if (desired !== current) {
            lines[i] = desired + lines[i].trimStart();
            changed = true;
        }
    }

    return { out: lines.join('\n'), changed };
}

function ensureTokensImport(source, importNames, importSource) {
    if (importNames.length === 0) return source;

    const escaped = importSource.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const importLineRe = new RegExp(`import\\s*\\{([\\s\\S]*?)\\}\\s*from\\s*'${escaped}';\\s*`, 'm');
    const m = source.match(importLineRe);

    if (m) {
        const existing = m[1]
            .split(',')
            .map((s) => s.trim())
            .filter(Boolean);
        const merged = uniqSorted([...existing, ...importNames]);
        const newImport = `import {\n    ${merged.join(',\n    ')},\n} from '${importSource}';\n`;
        return source.replace(importLineRe, newImport);
    }

    // Insert after first import from plasma-new-hope (common in configs)
    const idx = source.indexOf("from '@salutejs/plasma-new-hope");
    if (idx !== -1) {
        const firstImportEnd = source.indexOf('\n', idx);
        if (firstImportEnd !== -1) {
            const insertAt = source.indexOf('\n', firstImportEnd + 1) + 1;
            if (insertAt > 0) {
                const newImport = `import {\n    ${uniqSorted(importNames).join(',\n    ')},\n} from '${importSource}';\n`;
                return source.slice(0, insertAt) + '\n' + newImport + source.slice(insertAt);
            }
        }
    }

    const newImport = `import {\n    ${uniqSorted(importNames).join(',\n    ')},\n} from '${importSource}';\n`;
    return newImport + source;
}

function repairCorruptedTokenImport(lines, importSource) {
    const tokenImportStart = lines.findIndex((l) => l.trim() === 'import {');
    if (tokenImportStart === -1) return false;

    if (lines.some((l) => l.includes(`from '${importSource}'`) || l.includes(`from "${importSource}"`))) {
        return false;
    }

    let i = tokenImportStart + 1;
    while (i < lines.length && lines[i].trim() === '') i++;
    if (i >= lines.length || !lines[i].includes('/*')) return false;

    let noteEnd = i;
    while (noteEnd < lines.length && !lines[noteEnd].includes('*/')) noteEnd++;
    if (noteEnd >= lines.length) return false;

    let j = noteEnd + 1;
    const names = [];
    for (; j < lines.length; j++) {
        const t = lines[j].trim();
        if (t === '*/') break;
        if (t.startsWith('export ') || t.startsWith('const ') || t.startsWith('type ') || t.startsWith('interface ')) break;
        if (t === '' || t.startsWith('/*') || t.startsWith('//')) continue;
        const name = t.replace(/,$/, '');
        if (/^[A-Za-z0-9_]+$/.test(name)) names.push(name);
    }

    if (names.length === 0) return false;

    const end = lines[j]?.trim() === '*/' ? j : j - 1;
    lines.splice(tokenImportStart, end - tokenImportStart + 1);

    const insertAt = findInsertAfterImports(lines);
    const importBlock = ['import {', ...uniqSorted(names).map((n) => `    ${n},`), `} from '${importSource}';`];
    lines.splice(insertAt, 0, ...importBlock);

    return true;
}

function migrateFile(source, tokenExports, { importSource }) {
    const usedTokens = [];
    const lines = source.split('\n');

    const typoFieldMap = new Map([
        ['font-family', 'fontFamily'],
        ['font-size', 'fontSize'],
        ['font-style', 'fontStyle'],
        ['font-weight', 'fontWeight'],
        ['letter-spacing', 'letterSpacing'],
        ['line-height', 'lineHeight'],
    ]);

    function addNoteIfMissing(idx, tokenName) {
        const prev = lines[idx - 1] ?? '';
        if (prev.includes('NOTE: no token')) return;
        lines.splice(
            idx,
            0,
            `${prev.match(/^\s*/)?.[0] ?? ''}/* NOTE: no token ${tokenName} in @salutejs/sdds-themes/tokens */`,
        );
    }

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];

        const typoMatch = line.match(
            /var\(--plasma-typo-([a-z0-9-]+)-(font-family|font-size|font-style|font-weight|letter-spacing|line-height)\)/,
        );
        if (typoMatch) {
            const scaleKebab = typoMatch[1];
            const field = typoFieldMap.get(typoMatch[2]);
            const scaleCamel = kebabToCamel(scaleKebab);

            if (field && tokenExports.has(scaleCamel)) {
                usedTokens.push(scaleCamel);
                line = line.replace(typoMatch[0], `\${${scaleCamel}.${field}}`);
                lines[i] = line;
                continue;
            }

            addNoteIfMissing(i, scaleCamel);
            i++;
            continue;
        }

        const plainVarRe = /var\(--([a-z0-9-]+)\)/g;
        let changed = false;
        line = line.replace(plainVarRe, (full, kebab) => {
            const tokenName = kebabToCamel(kebab);
            if (tokenExports.has(tokenName)) {
                usedTokens.push(tokenName);
                changed = true;
                return `\${${tokenName}}`;
            }
            return full;
        });

        if (changed) {
            lines[i] = line;
            continue;
        }

        const unmatched = line.match(/var\(--([a-z0-9-]+)\)/);
        if (unmatched && !line.includes('var(${')) {
            const tokenName = kebabToCamel(unmatched[1]);
            if (!tokenExports.has(tokenName)) {
                addNoteIfMissing(i, tokenName);
                i++;
            }
        }
    }

    const withImport = ensureTokensImport(lines.join('\n'), uniqSorted(usedTokens), importSource);
    return withImport;
}

export async function migrateConfigs({
    packageRoot,
    tokensPackage,
    tokensImport,
    configsGlob,
    dryRun = false,
}) {
    const pkgRootAbs = absFrom(process.cwd(), packageRoot);
    const componentsDir = path.join(pkgRootAbs, 'src', 'components');

    const importSource = tokensImport || `${tokensPackage}/theme/tokens`;
    const tokenExports = loadTokenExportsSet({ packageRoot: pkgRootAbs, tokensImport: importSource });

    const patterns = Array.isArray(configsGlob) ? configsGlob : [configsGlob];
    const files = await listByGlob({ cwd: pkgRootAbs, patterns });

    let changed = 0;
    let migrated = 0;
    let repairedImports = 0;
    let updatedNotes = 0;
    let plasmaImportsAdded = 0;

    for (const absPath of files) {
        const before = await readText(absPath);
        const relFromComponents = toPosixPath(path.relative(componentsDir, absPath));
        const componentRoot = componentRootFolderFromComponentsRel(relFromComponents);
        const { out: withPlasma, changed: plasmaChanged } = ensurePlasmaNewHopeStyledComponentsImport(
            before,
            componentRoot,
        );
        if (plasmaChanged) plasmaImportsAdded++;

        const afterMigration = migrateFile(withPlasma, tokenExports, { importSource });
        if (afterMigration !== withPlasma) migrated++;

        const lines = afterMigration.split('\n');
        const repaired = repairCorruptedTokenImport(lines, importSource);
        if (repaired) repairedImports++;

        removeDuplicateBlockClosers(lines);
        const missing = collectMissingTokensFromPerLineNotes(lines.join('\n'));
        const hadNote = upsertTopSummaryNoteBlock({
            lines,
            missing,
            tokensImportSourceForAdvice: importSource,
        });
        if (hadNote) updatedNotes++;
        ensureSingleBlankAfterImports(lines);
        const afterNotes = lines.join('\n');

        const { out: afterFormatted, changed: formattedChanged } = formatNoteIndent(afterNotes);
        const final = afterFormatted;

        if (final !== before) {
            changed++;
            if (!dryRun) {
                await writeText(absPath, final);
            }
        } else if (formattedChanged) {
            // no-op; kept for clarity
        }
    }

    const rel = (p) => toPosixPath(path.relative(componentsDir, p));

    return {
        files: files.map(rel),
        stats: { total: files.length, changed, migrated, repairedImports, updatedNotes, plasmaImportsAdded },
    };
}

