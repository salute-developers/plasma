import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { promises as fs } from 'fs';

export async function getMock() {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
        const filePath = resolve(__dirname, 'input.md');

        const markdownContent = await fs.readFile(filePath, 'utf8');
        return markdownContent;
    } catch (error) {
        console.error('Ошибка чтения input.md:', error);
        return null;
    }
}
