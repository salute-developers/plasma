import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

export function kebabToCamel(kebab) {
    return kebab.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
}

export function readTokenExportsSetFromDts(dtsText) {
    const exports = new Set();
    const re = /^export declare const ([A-Za-z0-9_]+)\b/gm;
    let m;
    while ((m = re.exec(dtsText))) exports.add(m[1]);
    return exports;
}

/**
 * Resolve any package export (e.g. `@salutejs/plasma-themes/tokens/plasma_giga`) to a `.d.ts` file.
 * Node resolves to `index.js`; typings live in sibling `index.d.ts`.
 */
export function resolveTokensDeclarationPathFromImport({ packageRoot, tokensImport }) {
    const req = createRequire(path.join(packageRoot, '__virtual__.cjs'));
    let resolved;
    try {
        resolved = req.resolve(tokensImport);
    } catch (e) {
        throw new Error(`Cannot resolve tokens import "${tokensImport}" from ${packageRoot}: ${e.message}`);
    }
    if (resolved.endsWith('.d.ts')) return resolved;
    if (resolved.endsWith('.js')) {
        const dts = resolved.replace(/\.js$/, '.d.ts');
        if (fs.existsSync(dts)) return dts;
    }
    const indexDts = path.join(resolved, 'index.d.ts');
    if (fs.existsSync(indexDts)) return indexDts;
    throw new Error(`No typings found for tokens import "${tokensImport}" (resolved: ${resolved})`);
}

export function loadTokenExportsSet({ packageRoot, tokensImport }) {
    const p = resolveTokensDeclarationPathFromImport({ packageRoot, tokensImport });
    const dts = fs.readFileSync(p, 'utf8');
    return readTokenExportsSetFromDts(dts);
}
