/**
    Данный скрипт проходит по всем файлам в указанной папке ROOT_DIR и
    производит замену строки по правилам, описанным в REPLACEMENTS.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '../src-emotion');

const REPLACEMENTS = [
    {
        from: /from '@salutejs\/plasma-new-hope\/styled-components'/g,
        to: "from '@salutejs/plasma-new-hope/emotion'",
    },
    {
        from: /from 'styled-components'/g,
        to: "from '@emotion/styled'",
    },
];

function walk(dir, files = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            walk(fullPath, files);
        } else if (entry.isFile() && entry.name.includes('.')) {
            files.push(fullPath);
        }
    }

    return files;
}

function migrateFile(filePath) {
    const original = fs.readFileSync(filePath, 'utf8');
    let modified = original;

    for (const { from, to } of REPLACEMENTS) {
        modified = modified.replace(from, to);
    }

    if (modified !== original) {
        fs.writeFileSync(filePath, modified, 'utf8');
    }
}

function main() {
    const files = walk(ROOT_DIR);

    for (const file of files) {
        migrateFile(file);
    }

    console.log(`\nreplaceStyledComponentsToEmotion done. Processed ${files.length} files.`);
}

main();
