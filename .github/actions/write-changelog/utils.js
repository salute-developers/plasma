import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { promises as fs } from 'fs';
import { mkdirSync, existsSync, writeFileSync, readFileSync } from 'fs';

function getFilePath(pkg, fileName) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    return resolve(__dirname, '../../..', `packages/${pkg}/${fileName}`);
}

function getDate(date) {
    const formatter = new Intl.DateTimeFormat('ru', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const data = formatter.format(date).replace(' г.', '');

    return `(${data})`;
}

async function getPackageVersion(pkg) {
    const filePath = getFilePath(pkg, 'package.json');

    try {
        const packageJson = await fs.readFile(filePath, 'utf8');
        const { version } = JSON.parse(packageJson);

        return `## ${version}`;
    } catch (error) {
        console.error('Error reading package.json:', error);
    }
}

export async function writeChangelog(markdown, pkg) {
    try {
        if (!pkg) {
            console.error('Не указан пакет для записи об изменениях');

            return;
        }

        const version = await getPackageVersion(pkg);
        const mdFilePAth = getFilePath(pkg, 'CHANGELOG.md');
        const CHANGELOG = await fs.readFile(mdFilePAth, 'utf8');

        const changelog = `${version} ${getDate(new Date())}\n\n${markdown}\n\n${CHANGELOG}`;

        await fs.writeFile(mdFilePAth, changelog, 'utf8');

        console.log(`${pkg} - changelog успешно записан`);
    } catch (error) {
        console.error('Ошибка при записи файла:', error);
    }
}

export function getJSONFilePath(pkg) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = resolve(__dirname, '../../..', `website/plasma-website/public/data/${pkg}.json`);
    const dirPath = dirname(filePath);

    try {
        // Всегда создаем директорию (безопасно, если уже существует)
        mkdirSync(dirPath, { recursive: true });

        // Проверяем файл и создаем, если нужно
        if (!existsSync(filePath)) {
            writeFileSync(filePath, JSON.stringify({}, null, 2), 'utf8');
            console.log(`Создан файл: ${filePath}`);
        }

        return filePath;
    } catch (error) {
        console.error('Ошибка при обработке пути:', error);
        throw error;
    }
}

/**
 * @returns {string} date - дата релиза в формате 'YYYY-MM-DD'
 */
export function getChangelogCreateDate(date) {
    const dateObj = date instanceof Date ? date : new Date(date);

    const formatter = new Intl.DateTimeFormat('sv-SE', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });

    return formatter.format(dateObj);
}

export function getPackageVersionSync(pkg) {
    const filePath = getFilePath(pkg, 'package.json');

    try {
        const packageJson = readFileSync(filePath, 'utf8');
        const { version } = JSON.parse(packageJson);

        return version;
    } catch (error) {
        console.error('Error reading package.json:', error);
    }
}
