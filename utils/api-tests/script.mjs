/* Скрипт для подготовки файлов с тестами под разные библиотеки.
 * basicLib - библиотека для исходных файлов. Компоненты для тестов должны браться только из нее.
 * libs - массив с библиотеками, в которых будет проверяться API.
 * Происходит это заменой импорта с basicLib на нужную в данный момент библиотеку.
 * Далее скрипт генерирует файлы на основе этих мета-данных и уже после этого запускается тестирование. */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const config = {
    basicLib: '@salutejs/plasma-b2c',
    libs: [
        {
            name: '@salutejs/plasma-b2c',
            ignoreComponents: ['Combobox'],
        },
        {
            name: '@salutejs/plasma-web',
            ignoreComponents: ['Combobox'],
        },
        {
            name: '@salutejs/plasma-giga',
        },
        {
            name: '@salutejs/sdds-bizcom',
        },
        {
            name: '@salutejs/sdds-crm',
        },
        {
            name: '@salutejs/sdds-cs',
        },
        {
            name: '@salutejs/sdds-dfa',
        },
        {
            name: '@salutejs/sdds-finai',
        },
        {
            name: '@salutejs/sdds-insol',
        },
        {
            name: '@salutejs/sdds-netology',
        },
        {
            name: '@salutejs/sdds-platform-ai',
        },
        {
            name: '@salutejs/sdds-scan',
        },
        {
            name: '@salutejs/sdds-serv',
        },
    ],
    ignoreComponents: [],
    srcDir: 'src',
    outDir: 'tests',
};

(() => {
    function getFiles(dir) {
        return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
            const fullPath = path.join(dir, entry.name);
            return entry.isDirectory() ? getFiles(fullPath) : fullPath;
        });
    }

    try {
        const filename = fileURLToPath(import.meta.url);
        const dirname = path.dirname(filename);

        const SRC_DIR = path.resolve(dirname, config.srcDir);
        const OUT_DIR = path.resolve(dirname, config.outDir);

        const files = getFiles(SRC_DIR);

        files.forEach((filePath) => {
            if (
                Array.isArray(config.ignoreComponents) &&
                config.ignoreComponents.some((component) => filePath.includes(`src/components/${component}`))
            ) {
                return;
            }

            const relPath = path.relative(SRC_DIR, filePath);
            const originalContent = fs.readFileSync(filePath, 'utf8');

            config.libs.forEach(({ name, ignoreComponents }) => {
                if (
                    Array.isArray(ignoreComponents) &&
                    ignoreComponents.some((component) => filePath.includes(`src/components/${component}`))
                ) {
                    return;
                }

                const libFolder = name.replace('@salutejs/', '');
                const targetPath = path.join(OUT_DIR, libFolder, relPath);

                const transformedContent = originalContent.replace(new RegExp(config.basicLib, 'g'), name);

                fs.mkdirSync(path.dirname(targetPath), { recursive: true });
                fs.writeFileSync(targetPath, transformedContent);
            });
        });

        console.log('Файлы для тестов сгенерированы успешно');
    } catch (err) {
        console.error('Ошибка генерации тестов: ', err);
        process.exit(1);
    }
})();
