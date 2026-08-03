import fs from 'node:fs';
import path from 'node:path';

export function writeFixture(tmpDir, id, source) {
    fs.mkdirSync(tmpDir, { recursive: true });
    const file = path.join(tmpDir, `${id}.mjs`);
    fs.writeFileSync(file, source);
    return file;
}

export function singleImportSource(specifier, canaryName) {
    return `import { ${canaryName} } from '${specifier}';\nexport { ${canaryName} };\n`;
}

export function fullImportSource(specifier) {
    return `export * from '${specifier}';\n`;
}

export function sanitize(value) {
    return value.replace(/[^a-z0-9]+/gi, '-').replace(/^-+|-+$/g, '');
}
