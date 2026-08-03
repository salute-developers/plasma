import fs from 'node:fs';
import path from 'node:path';

export function sumCssAssets(dir) {
    let total = 0;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            total += sumCssAssets(full);
        } else if (entry.name.endsWith('.css')) {
            total += fs.statSync(full).size;
        }
    }
    return total;
}
