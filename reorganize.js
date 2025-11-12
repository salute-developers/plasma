const fs = require('fs');
const path = require('path');

function reorganizeScreenshots(basePath) {
    const componentsPath = path.join(basePath, 'b2c', 'components');

    if (!fs.existsSync(componentsPath)) {
        console.log('Директория components не найдена');
        return;
    }

    const components = fs.readdirSync(componentsPath);

    components.forEach((componentName) => {
        const componentPath = path.join(componentsPath, componentName);

        if (!fs.statSync(componentPath).isDirectory()) return;

        const targetPath = path.join(basePath, 'test-temp', 'b2c', componentName);

        if (!fs.existsSync(targetPath)) {
            fs.mkdirSync(targetPath, { recursive: true });
        }

        const subDirs = fs.readdirSync(componentPath);

        subDirs.forEach((subDir) => {
            const subDirPath = path.join(componentPath, subDir);

            if (!fs.statSync(subDirPath).isDirectory()) return;

            // Рекурсивно находим все файлы в поддиректории, игнорируя __diff_output__
            function moveFilesRecursively(currentPath) {
                const items = fs.readdirSync(currentPath);

                items.forEach((item) => {
                    const itemPath = path.join(currentPath, item);
                    const stat = fs.statSync(itemPath);

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
                        const targetFilePath = path.join(targetPath, item);

                        // Обрабатываем конфликты имен
                        let finalTargetPath = targetFilePath;
                        let counter = 1;
                        while (fs.existsSync(finalTargetPath)) {
                            const ext = path.extname(item);
                            const name = path.basename(item, ext);
                            finalTargetPath = path.join(targetPath, `${name}_${counter}${ext}`);
                            counter++;
                        }

                        fs.renameSync(itemPath, finalTargetPath);
                        console.log(`Перемещен файл: ${itemPath} -> ${finalTargetPath}`);
                    }
                });
            }

            moveFilesRecursively(subDirPath);

            // Удаляем поддиректорию если она пустая
            try {
                fs.rmdirSync(subDirPath);
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
            fs.rmdirSync(componentPath);
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
