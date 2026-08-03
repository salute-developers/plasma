// Everything the tool builds is derived from the target package's own package.json:
// - "exports" tells us which distribution entry points exist (engines, subsets like /ai, /beta, ...)
// - "peerDependencies" tells us what a real consuming app already provides, so we mark it external
// - the compiled entry file itself tells us which named exports are available (for the "single import" canary)
import Module, { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const requireFile = createRequire(import.meta.url);
const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..', '..', '..');

// The compiled CJS entry we require() for discovery statically imports .css
// files (bundlers handle those via a loader; plain Node can't parse them).
// We only need the JS named exports, so make CSS requires a no-op.
Module._extensions['.css'] = (mod) => {
    mod.exports = {};
};

export function loadManifest(pkgName) {
    const pkgRoot = path.join(repoRoot, 'node_modules', pkgName);
    const manifestPath = path.join(pkgRoot, 'package.json');
    if (!fs.existsSync(manifestPath)) {
        throw new Error(`Can't find "${pkgName}" in node_modules (is it installed/built?)`);
    }
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
    return { manifest, pkgRoot };
}

export function getExternals(manifest) {
    return Object.keys(manifest.peerDependencies ?? {});
}

export function getEntries(manifest) {
    const exportsField = manifest.exports;
    if (!exportsField || typeof exportsField !== 'object') {
        throw new Error(`"${manifest.name}" has no "exports" map in package.json`);
    }
    return Object.entries(exportsField).map(([subpath, condition]) => ({ subpath, condition }));
}

export function specifierFor(pkgName, subpath) {
    return subpath === '.' ? pkgName : `${pkgName}${subpath.slice(1)}`;
}

// Named exports are discovered by requiring the compiled CJS file directly by
// absolute path - that bypasses the package.json "exports" map entirely, so it
// works even though Node's own resolver can't follow the directory-style
// re-exports these bundler-oriented builds use internally.
export function discoverNamedExports(pkgRoot, condition) {
    const target = condition.require ?? condition.default;
    if (!target) {
        throw new Error(`No "require" condition to introspect exports from`);
    }
    const absPath = path.join(pkgRoot, target);
    delete requireFile.cache[requireFile.resolve(absPath)];
    const mod = requireFile(absPath);
    return Object.keys(mod).filter((key) => key !== 'default');
}

// Arbitrary but deterministic: skip hooks (they're rarely useful as a "does a
// single import stay small" canary) and just take the first component-ish export.
export function pickCanary(exportNames) {
    return exportNames.find((name) => !name.startsWith('use')) ?? exportNames[0];
}
