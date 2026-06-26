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
            excludeComponents: ['TextField', 'CodeArea'],
        },
        {
            name: '@salutejs/plasma-web',
            excludeComponents: ['TextField', 'CodeArea'],
        },
        {
            name: '@salutejs/plasma-giga',
        },
        {
            name: '@salutejs/sdds-bizcom',
            excludeComponents: ['CodeArea'],
        },
        {
            name: '@salutejs/sdds-cs',
            excludeComponents: ['Select', 'InformationWrapper', 'CodeArea'],
        },
        {
            name: '@salutejs/sdds-dfa',
            excludeComponents: ['InformationWrapper', 'CodeArea'],
        },
        {
            name: '@salutejs/sdds-finai',
            excludeComponents: ['CodeArea'],
        },
        {
            name: '@salutejs/sdds-insol',
            excludeComponents: ['CodeArea'],
        },
        {
            name: '@salutejs/sdds-netology',
            excludeComponents: ['CodeArea'],
        },
        {
            name: '@salutejs/sdds-platform-ai',
            excludeComponents: ['CodeArea'],
        },
        {
            name: '@salutejs/sdds-scan',
            excludeComponents: ['CodeArea'],
        },
        {
            name: '@salutejs/sdds-serv',
            excludeComponents: ['CodeArea'],
        },
    ],
    includeComponents: [],
    excludeComponents: [],
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

    function hasComponent(filePath, components) {
        return components.some((component) => filePath.includes(`src/components/${component}`));
    }

    function shouldSkipComponent(filePath, { includeComponents, excludeComponents }) {
        if (
            Array.isArray(includeComponents) &&
            includeComponents.length > 0 &&
            !hasComponent(filePath, includeComponents)
        ) {
            return true;
        }

        return Array.isArray(excludeComponents) && hasComponent(filePath, excludeComponents);
    }

    function getComponentName(filePath) {
        const pathParts = filePath.split(path.sep);
        const componentsIndex = pathParts.indexOf('components');

        return componentsIndex === -1 ? null : pathParts[componentsIndex + 1];
    }

    try {
        const filename = fileURLToPath(import.meta.url);
        const dirname = path.dirname(filename);

        const SRC_DIR = path.resolve(dirname, config.srcDir);
        const OUT_DIR = path.resolve(dirname, config.outDir);

        const files = getFiles(SRC_DIR);
        const checkedComponents = new Set();
        let generatedFilesCount = 0;

        files.forEach((filePath) => {
            if (shouldSkipComponent(filePath, config)) {
                return;
            }

            const relPath = path.relative(SRC_DIR, filePath);
            const originalContent = fs.readFileSync(filePath, 'utf8');

            config.libs.forEach(({ name, includeComponents, excludeComponents }) => {
                if (shouldSkipComponent(filePath, { includeComponents, excludeComponents })) {
                    return;
                }

                const libFolder = name.replace('@salutejs/', '');
                const targetPath = path.join(OUT_DIR, libFolder, relPath);

                const transformedContent = originalContent.replace(new RegExp(config.basicLib, 'g'), name);

                fs.mkdirSync(path.dirname(targetPath), { recursive: true });
                fs.writeFileSync(targetPath, transformedContent);

                const componentName = getComponentName(filePath);
                if (componentName) {
                    checkedComponents.add(componentName);
                }
                generatedFilesCount += 1;
            });
        });

        console.log(
            `Файлы для тестов сгенерированы успешно. Компонентов для проверки: ${checkedComponents.size}. Сгенерировано файлов: ${generatedFilesCount}.`,
        );
    } catch (err) {
        console.error('Ошибка генерации тестов: ', err);
        process.exit(1);
    }
})();
