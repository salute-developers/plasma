import { readFile, readdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

/**
 * Removes JSDoc comments with Style API tags from built token files. Runtime builds do not need them:
 * editors read annotations from `.d.ts`, and the metadata generator reads them from sources.
 *
 * Usage: node ./scripts/stripAnnotations.mjs <dist dir> [<dist dir> ...]
 */

// A JSDoc comment that contains a @style* tag, plus the whitespace up to the next token on the line.
const annotationPattern = /\/\*\*(?:(?!\*\/)[\s\S])*?@style(?:Type|Prop|Part|State|Component)\b[\s\S]*?\*\/[ \t]*(?:\r?\n[ \t]*)?/g;

async function findTokenFiles(directory) {
    const entries = await readdir(directory, { withFileTypes: true });
    const nested = await Promise.all(
        entries.map(async (entry) => {
            const path = resolve(directory, entry.name);

            if (entry.isDirectory()) {
                return findTokenFiles(path);
            }

            return entry.isFile() && (entry.name.endsWith('.tokens.js') || entry.name === 'tokens.js') ? [path] : [];
        }),
    );

    return nested.flat();
}

const directories = process.argv.slice(2);
if (directories.length === 0) {
    throw new Error('Usage: node ./scripts/stripAnnotations.mjs <dist dir> [<dist dir> ...]');
}

const tokenFiles = (await Promise.all(directories.map((directory) => findTokenFiles(resolve(directory))))).flat();
const counts = await Promise.all(
    tokenFiles.map(async (file) => {
        const source = await readFile(file, 'utf8');
        let count = 0;
        const stripped = source.replace(annotationPattern, () => {
            count += 1;
            return '';
        });

        if (count > 0) {
            await writeFile(file, stripped);
        }
        return count;
    }),
);
const files = counts.filter((count) => count > 0).length;
const annotations = counts.reduce((sum, count) => sum + count, 0);

process.stdout.write(`Stripped ${annotations} Style API annotations from ${files} token files.\n`);
