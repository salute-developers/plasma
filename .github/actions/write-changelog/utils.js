import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { promises as fs } from 'fs';

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

        return `# ${version}`;
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
