import { access, writeFile, readdir } from 'node:fs/promises';
import path from 'path';

const root = path.join('./src', 'scalable');

const subdirectories = ['Icon.svg.16', 'Icon.svg.24', 'Icon.svg.36'];

const meta = {};

const sizes = {
    '16': false,
    '24': false,
    '36': false,
}

async function processDirectory(subdirectory, size) {
    const directoryPath = path.join(root, subdirectory);
    
    try {
        await access(directoryPath);
    } catch (err) {
        console.warn(`Directory does not exist: ${directoryPath}`);
        
        return;
    }

    try {
        const files = await readdir(directoryPath);

        if (!files.length) {
            console.warn(`Directory is empty: ${directoryPath}`);
            
            return;
        }

        for (const file of files) {
            if (path.extname(file) === '.svg') {
                const fileNameWithoutExt = path.basename(file, '.svg');
                const normalizeFileName = fileNameWithoutExt[0].toLowerCase() + fileNameWithoutExt.slice(1);
                

                if (!meta[normalizeFileName]) {
                    meta[normalizeFileName] = { sizes };
                }

                meta[normalizeFileName].sizes[size] = true;
            }
        }
    } catch (err) {
        console.error(`Error reading files in directory: ${directoryPath}`, err);
    }
}

try {
    await Promise.all(
        subdirectories.map(async (subdirectory) => {
            const size = subdirectory.split('.').pop();
            
            await processDirectory(subdirectory, parseInt(size, 10));
        }),
    );
    
    await writeFile(path.join('./', 'meta.json'), JSON.stringify(meta, null, 2), 'utf8');
    
    console.log('meta.json has been created successfully');
} catch (err) {
    console.error('Error writing meta.json', err);
}
