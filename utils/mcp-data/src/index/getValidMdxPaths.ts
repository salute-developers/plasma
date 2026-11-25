import path from 'node:path';
import fs from 'node:fs';

/**
 * Проверяет, соответствует ли путь glob-паттерну.
 */
function matchesPattern(filePath: string, pattern: string): boolean {
    // Если паттерн начинается с ** - рекурсивное совпадение
    if (pattern.startsWith('**/')) {
        const restPattern = pattern.slice(3);
        return filePath.includes(restPattern);
    }

    // Если паттерн начинается с ./ - относительный путь
    if (pattern.startsWith('./')) {
        const absolutePattern = path.resolve(process.cwd(), pattern);
        return filePath.includes(absolutePattern);
    }

    // Простое совпадение по имени файла или папки
    return filePath.includes(pattern) || path.basename(filePath) === pattern;
}

export function getValidMdxPaths(pathToDocs: string, exclude: string[] = []): string[] {
    const mdxFiles: string[] = [];
    const absoluteDirPath = path.resolve(pathToDocs);

    function traverseDirectory(currentPath: string): void {
        const shouldExclude = exclude.some((pattern) => matchesPattern(currentPath, pattern));

        if (shouldExclude) {
            return;
        }

        try {
            const items = fs.readdirSync(currentPath);

            items.forEach((item) => {
                // Как и Docusaurus, пропускаем partials: файлы и папки с префиксом `_`.
                // Их содержимое попадает в индекс через импорт в основные страницы.
                if (item.startsWith('_')) {
                    return;
                }

                const fullPath = path.join(currentPath, item);
                const stat = fs.statSync(fullPath);

                if (stat.isDirectory()) {
                    traverseDirectory(fullPath);
                } else if (stat.isFile() && path.extname(item).toLowerCase() === '.mdx') {
                    const shouldExcludeFile = exclude.some((pattern) => matchesPattern(fullPath, pattern));

                    if (!shouldExcludeFile) {
                        mdxFiles.push(fullPath);
                    }
                }
            });
        } catch (error) {
            console.warn(`Пропускаем: ${currentPath} - ${(error as Error).message}`);
        }
    }

    if (!fs.existsSync(absoluteDirPath)) {
        throw new Error(`Директория не существует: ${absoluteDirPath}`);
    }

    traverseDirectory(absoluteDirPath);

    return mdxFiles;
}
