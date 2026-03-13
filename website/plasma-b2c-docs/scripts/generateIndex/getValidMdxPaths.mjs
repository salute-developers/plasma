import path from 'path';
import fs from 'fs';

/**
 * Проверяет, соответствует ли путь glob-паттерну
 * @param {string} filePath - Полный путь к файлу
 * @param {string} pattern - Glob-паттерн
 * @returns {boolean} - Соответствует ли путь паттерну
 */
function matchesPattern(filePath, pattern) {
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

export default (pathToBuild, exclude = []) => {
    const htmlFiles = [];
    const absoluteDirPath = path.resolve(pathToBuild);

    /**
     * Рекурсивная функция для обхода директорий
     */
    function traverseDirectory(currentPath) {
        // Проверяем, нужно ли игнорировать текущий путь
        const shouldExclude = exclude.some((pattern) => matchesPattern(currentPath, pattern));

        if (shouldExclude) {
            return;
        }

        try {
            const items = fs.readdirSync(currentPath);

            for (const item of items) {
                const fullPath = path.join(currentPath, item);
                const stat = fs.statSync(fullPath);

                if (stat.isDirectory()) {
                    // Рекурсивно обходим поддиректории
                    traverseDirectory(fullPath);
                } else if (stat.isFile() && path.extname(item).toLowerCase() === '.mdx') {
                    // Проверяем, нужно ли игнорировать этот файл
                    const shouldExcludeFile = exclude.some((pattern) => matchesPattern(fullPath, pattern));

                    if (!shouldExcludeFile) {
                        htmlFiles.push(fullPath);
                    }
                }
            }
        } catch (error) {
            console.warn(`Пропускаем: ${currentPath} - ${error.message}`);
        }
    }

    // Проверяем существование начальной директории
    if (!fs.existsSync(absoluteDirPath)) {
        throw new Error(`Директория не существует: ${absoluteDirPath}`);
    }

    // Запускаем обход
    traverseDirectory(absoluteDirPath);

    return htmlFiles;
};
