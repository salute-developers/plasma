import { existsSync, readdirSync, statSync, mkdirSync, renameSync, rmdirSync } from 'fs';
import { join, extname, basename } from 'path';

function reorganizeScreenshots(basePath) {
    const componentsPath = join(basePath, 'ui', 'components');

    if (!existsSync(componentsPath)) {
        console.log('Директория components не найдена');
        return;
    }

    const components = readdirSync(componentsPath);

    components.forEach((componentName) => {
        const componentPath = join(componentsPath, componentName);

        if (!statSync(componentPath).isDirectory()) return;

        const targetPath = join(basePath, 'test-temp', 'ui', componentName);

        if (!existsSync(targetPath)) {
            mkdirSync(targetPath, { recursive: true });
        }

        const subDirs = readdirSync(componentPath);

        subDirs.forEach((subDir) => {
            const subDirPath = join(componentPath, subDir);

            if (!statSync(subDirPath).isDirectory()) return;

            // Рекурсивно находим все файлы в поддиректории, игнорируя __diff_output__
            function moveFilesRecursively(currentPath) {
                const items = readdirSync(currentPath);

                items.forEach((item) => {
                    const itemPath = join(currentPath, item);
                    const stat = statSync(itemPath);

                    if (stat.isDirectory()) {
                        // Если это папка __diff_output__ - полностью пропускаем
                        if (item === '__diff_output__') {
                            console.log(`Пропущена папка: ${itemPath}`);
                            return;
                        }
                        // Рекурсивно обрабатываем другие папки
                        moveFilesRecursively(itemPath);
                    } else if (stat.isFile()) {
                        // Перемещаем только файлы
                        const targetFilePath = join(targetPath, item);

                        // Обрабатываем конфликты имен
                        let finalTargetPath = targetFilePath;
                        let counter = 1;
                        while (existsSync(finalTargetPath)) {
                            const ext = extname(item);
                            const name = basename(item, ext);
                            finalTargetPath = join(targetPath, `${name}_${counter}${ext}`);
                            counter++;
                        }

                        renameSync(itemPath, finalTargetPath);
                        console.log(`Перемещен файл: ${itemPath} -> ${finalTargetPath}`);
                    }
                });
            }

            moveFilesRecursively(subDirPath);

            // Удаляем поддиректорию если она пустая
            try {
                rmdirSync(subDirPath);
                console.log(`Удалена пустая директория: ${subDirPath}`);
            } catch (error) {
                if (error.code === 'ENOTEMPTY') {
                    console.log(`Директория не пуста, оставлена: ${subDirPath}`);
                } else {
                    throw error;
                }
            }
        });

        // Удаляем директорию компонента если она пустая
        try {
            rmdirSync(componentPath);
            console.log(`Удалена пустая директория: ${componentPath}`);
        } catch (error) {
            if (error.code === 'ENOTEMPTY') {
                console.log(`Директория компонента не пуста, оставлена: ${componentPath}`);
            } else {
                throw error;
            }
        }
    });

    console.log('Реорганизация завершена!');
}

// Использование:
const projectRoot = './cypress/snapshots';
reorganizeScreenshots(projectRoot);
