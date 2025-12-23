import { execSync } from 'child_process';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';
import { setOutput } from '@actions/core';

const CORE_DIR = './packages/plasma-new-hope/src/components';
const BASE_REF = process.env.GITHUB_BASE_REF || 'dev';
const HEAD_SHA = process.env.GITHUB_SHA;

// Получение измененных файлов
const getChangedFiles = () => {
    try {
        return getGitHubRebaseChanges();
    } catch (error) {
        console.log('Переход к альтернативному методу...', error.message);
        return getFallbackChanges();
    }
};

const getGitHubRebaseChanges = () => {
    try {
        if (!HEAD_SHA) {
            return getGitHubFallbackChanges();
        }

        // Получаем список коммитов в PR
        const commitsCommand = `git log --oneline origin/${BASE_REF}..${HEAD_SHA} --pretty=format:"%H"`;
        const commits = execSync(commitsCommand, { encoding: 'utf8' }).trim().split('\n');

        console.log(`Найдено ${commits.length} коммитов в PR`);

        // Собираем все измененные файлы по всем коммитам
        const allChangedFiles = new Set();

        for (const commit of commits) {
            if (commit.trim()) {
                try {
                    const changedFilesCommand = `git show --name-only --pretty=format: ${commit}`;
                    const files = execSync(changedFilesCommand, { encoding: 'utf8' })
                        .trim()
                        .split('\n')
                        .filter(Boolean);
                    files.forEach((file) => allChangedFiles.add(file));
                } catch (error) {
                    console.log(`Не удалось получить файлы для коммита ${commit}`);
                }
            }
        }

        return Array.from(allChangedFiles);
    } catch (error) {
        console.log('Метод GitHub rebase не сработал, используем резервный:', error.message);
        return getGitHubFallbackChanges();
    }
};

// Резервный метод для GitHub (выводит diff по файлам, если дифф по rebase не сработал)
const getGitHubFallbackChanges = () => {
    try {
        const command = `git diff --name-only origin/${BASE_REF}...HEAD`;
        console.log('Выполняем резервную команду GitHub:', command);

        const output = execSync(command, { encoding: 'utf8' });
        return output.trim().split('\n').filter(Boolean);
    } catch (error) {
        throw new Error('Резервный метод GitHub также не сработал');
    }
};

// Получение списка пакетов
const getPackageNames = () => {
    try {
        const packagesDir = './packages';
        return readdirSync(packagesDir).filter((item) => {
            const itemPath = join(packagesDir, item);
            return statSync(itemPath).isDirectory();
        });
    } catch (error) {
        console.error('Ошибка при чтении директории packages:', error);
        return [];
    }
};

// Извлечение имен компонентов из путей к файлам
const extractComponents = (files) => {
    const components = new Set();
    const packages = getPackageNames();

    if (packages.length === 0) {
        console.log('⚠️ Пакеты не найдены');
        return [];
    }

    const regex = new RegExp(`(${packages.join('|')})\\/src\\/components\\/([^\\/]+)`);

    files.forEach((file) => {
        const match = file.match(regex);
        if (match) {
            const componentName = match[2];
            components.add(componentName);
        }
    });

    return Array.from(components);
};

// Поиск зависимых компонентов от измененных
const findDependentComponents = (changedComponents) => {
    const dependents = new Set(changedComponents);

    changedComponents.forEach((component) => {
        // Ищем файлы, которые используют измененный компонент
        const importPatterns = [`const merged${component}Config`, `const ${component} = component(`];

        importPatterns.forEach((importPattern) => {
            try {
                // Ищем в plasma-new-hope компоненты, которые импортируют измененный компонент
                const grepCommand = `grep -r "${importPattern}" ${CORE_DIR} --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" --exclude-dir=node_modules || true`;
                const output = execSync(grepCommand, { encoding: 'utf8' });

                output.split('\n').forEach((line) => {
                    if (line.trim()) {
                        const dependentMatch = line.match(new RegExp(`${CORE_DIR}/([^/]+)/`));
                        if (dependentMatch && dependentMatch[1] !== component) {
                            dependents.add(dependentMatch[1]);
                        }
                    }
                });
            } catch (error) {
                console.log(`Ошибка при поиске зависимостей для ${component}:`, error.message);
            }
        });
    });

    return Array.from(dependents);
};

// Основной метод
const findComponentsToTest = () => {
    console.log('🔍 Поиск измененных компонентов...');

    const changedFiles = getChangedFiles();
    console.log('Количество измененных файлов:', changedFiles.length);

    if (changedFiles.length === 0) {
        console.log('📝 Изменений не обнаружено. Запускаем все тесты.');
        return { COMPONENTS: [], TEST_ALL: true };
    }

    const changedComponents = extractComponents(changedFiles);
    console.log('📦 Измененные компоненты:', changedComponents);

    if (changedComponents.length === 0) {
        console.log('📝 Изменений компонентов не обнаружено. Запускаем все тесты.');
        return { COMPONENTS: [], TEST_ALL: true };
    }

    const componentsToTest = findDependentComponents(changedComponents);
    console.log('🚀 Компоненты для тестирования:', componentsToTest);

    return {
        COMPONENTS: componentsToTest,
    };
};

// Использование в GitHub Actions
try {
    const result = findComponentsToTest();

    // Устанавливаем выходные данные для GitHub Actions
    setOutput('components', result.COMPONENTS.join(','));
} catch (error) {
    console.error('❌ Ошибка при поиске компонентов:', error);
    setOutput('components', '');
}
