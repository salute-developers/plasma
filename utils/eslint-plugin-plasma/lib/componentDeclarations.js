/**
 * Поиск файлов токенов в src/components и компонентов, которые они объявляют.
 * Нужен для межфайловой проверки: правило ESLint видит только текущий файл.
 * */

/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const { parse } = require('@typescript-eslint/parser');

const { analyzeTokenFile } = require('./styleApiAnnotations');

// Бета-компоненты и карточка Tour пока не входят в Style API.
const IGNORED_DIRECTORIES = new Set(['_beta']);
const IGNORED_PATHS = ['Tour/components/Card'];

const isTokenFile = (name) => name.endsWith('.tokens.ts') || name === 'tokens.ts';

/** Ближайшая папка src/components над файлом. */
const findComponentsRoot = (file) => {
    for (let dir = path.dirname(file); dir !== path.dirname(dir); dir = path.dirname(dir)) {
        if (path.basename(dir) === 'components' && path.basename(path.dirname(dir)) === 'src') {
            return dir;
        }
    }

    return undefined;
};

const isIgnoredDirectory = (root, directory) => {
    const relative = path.relative(root, directory).split(path.sep).join('/');

    return (
        relative.split('/').some((name) => IGNORED_DIRECTORIES.has(name)) ||
        IGNORED_PATHS.some((ignored) => relative === ignored || relative.startsWith(`${ignored}/`))
    );
};

const findTokenFiles = (root, directory = root) =>
    fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
        const entryPath = path.join(directory, entry.name);

        if (entry.isDirectory()) {
            return isIgnoredDirectory(root, entryPath) ? [] : findTokenFiles(root, entryPath);
        }

        return entry.isFile() && isTokenFile(entry.name) ? [entryPath] : [];
    });

// Разобранные файлы переиспользуются между запусками правила, пока не изменятся на диске.
const cache = new Map();

const readComponents = (file) => {
    const { mtimeMs } = fs.statSync(file);
    const cached = cache.get(file);
    if (cached && cached.mtimeMs === mtimeMs) {
        return cached.components;
    }

    let components = [];
    try {
        const text = fs.readFileSync(file, 'utf8');
        const program = parse(text, { comment: true, loc: true, range: true });
        components = [
            ...analyzeTokenFile({ program, comments: program.comments, text, filename: file }).components.keys(),
        ];
    } catch (error) {
        // Файл с синтаксической ошибкой подсветит сам ESLint, когда дойдёт до него.
    }

    cache.set(file, { mtimeMs, components });
    return components;
};

/** Компоненты, объявленные в остальных файлах токенов: имя → пути относительно root. */
const findOtherDeclarations = (root, currentFile) => {
    const declarations = new Map();

    findTokenFiles(root)
        .filter((file) => file !== currentFile)
        .sort()
        .forEach((file) =>
            readComponents(file).forEach((componentName) =>
                declarations.set(componentName, [
                    ...(declarations.get(componentName) || []),
                    path.relative(root, file).split(path.sep).join('/'),
                ]),
            ),
        );

    return declarations;
};

module.exports = { findComponentsRoot, isIgnoredDirectory, findOtherDeclarations };
