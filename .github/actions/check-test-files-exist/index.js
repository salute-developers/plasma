import { existsSync, statSync, readdirSync } from 'fs';
import { join } from 'path';
import { getInput, setOutput, info } from '@actions/core';

const testFileRegex = /\.(component|update|update-test\.component)-test\.(tsx|ts|jsx|js)$/i;

// Проверяем наличие тестовых файлов в определенной директории
const checkPackageForTestFiles = (packageDir, components) => {
    if (!existsSync(packageDir)) {
        info(`Директория не найдена: ${packageDir}`);
        return false;
    }

    info(`Проверяем: ${packageDir}`);

    for (const component of components) {
        const componentDir = join(packageDir, component);

        if (!existsSync(componentDir) || !statSync(componentDir).isDirectory()) {
            info(`Директория ${componentDir} не найдена`);
        } else {
            const files = readdirSync(componentDir);
            const testFile = files.find((file) => testFileRegex.test(file));

            if (testFile) {
                info(`Найденные файлы: ${join(componentDir, testFile)}`);
                return true;
            }
        }
    }

    return false;
};

const findTestFiles = () => {
    const prefix = getInput('prefix', { required: true });
    const scope = getInput('scope', { required: true });
    const componentsInput = getInput('components');

    if (!componentsInput || componentsInput.trim() === '') {
        info('Список компонентов не передан. Продолжаем выполнять workflow');
        setOutput('tests-exist', 'true');
        return;
    }

    const components = componentsInput
        .split(',')
        .map((comp) => comp.trim())
        .filter((comp) => comp.length > 0);

    if (components.length === 0) {
        info('нет валидных названий компонентов. Продолжаем выполнять workflow');
        setOutput('tests-exist', 'true');
        return;
    }

    info(`Проверяем наличие тестовых файлов для компонентов: ${components.join(', ')}`);

    let foundTests = false;

    // Проверяем наличие тест-файлов в директории пакета (sdds-cs/plasma-b2c/...)
    const primaryPackageDir = join(process.cwd(), 'packages', `${prefix}-${scope}`, 'src', 'components');
    foundTests = checkPackageForTestFiles(primaryPackageDir, components);

    // Проверяем наличие тест-файлов в основной директории  (plasma-new-hope)
    if (!foundTests) {
        const newHopeDir = join(process.cwd(), 'packages', 'plasma-new-hope', 'src', 'components');
        foundTests = checkPackageForTestFiles(newHopeDir, components);
    }

    return foundTests;
};

// Использование в GitHub Actions
try {
    const result = findTestFiles();

    // Устанавливаем выходные данные для GitHub Actions
    setOutput('tests-exist', result);
} catch (error) {
    console.error('❌ Ошибка при поиске тестовых файлов:', error);
    setOutput('tests-exist', 'false');
}
