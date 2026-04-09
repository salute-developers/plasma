/**
 * Builds public/token-explorer.data.json from theme token index files and component configs.
 */
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_ROOT = path.join(__dirname, '..');
const REPO_ROOT = path.join(SITE_ROOT, '..', '..');
const CONFIG_PATH = path.join(SITE_ROOT, 'explorer.config.json');
const OUT_PATH = path.join(SITE_ROOT, 'public', 'token-explorer.data.json');

/** @typedef {{ name: string; path: string; configGlob?: string }} ComponentPackage */
/** @typedef {{ id: string; label: string; package: string; tokenSlugs: string[] }} DesignSystem */
/** @typedef {{ componentPackages: ComponentPackage[]; designSystems?: DesignSystem[]; themeRoots: Record<string, string>; importPathToTheme: Record<string, string> }} ExplorerConfig */

function readJson(p) {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function walkFiles(dir, predicate) {
    const out = [];
    if (!fs.existsSync(dir)) return out;
    for (const name of fs.readdirSync(dir)) {
        const p = path.join(dir, name);
        const st = fs.statSync(p);
        if (st.isDirectory()) out.push(...walkFiles(p, predicate));
        else if (predicate(p)) out.push(p);
    }
    return out;
}

function findConfigFiles(pkgAbs) {
    const components = path.join(pkgAbs, 'src', 'components');
    return walkFiles(components, (p) => p.endsWith('.config.ts'));
}

/**
 * @param {string} exportName
 * @param {string} cssVar
 */
function categorize(exportName, cssVar) {
    const ev = exportName.toLowerCase();
    const cv = cssVar.toLowerCase();

    if (ev.startsWith('ondark') || cv.includes('on-dark')) {
        return { category: 'colors', colorSubgroup: 'onDark' };
    }
    if (ev.startsWith('onlight') || cv.includes('on-light')) {
        return { category: 'colors', colorSubgroup: 'onLight' };
    }
    if (ev === 'inversebackgroundprimary') {
        return { category: 'other', colorSubgroup: null };
    }
    if (ev.startsWith('inverse') || cv.startsWith('--inverse')) {
        return { category: 'colors', colorSubgroup: 'inverse' };
    }

    if (ev.startsWith('data') || /^--data-/.test(cv)) {
        return { category: 'colors', colorSubgroup: 'default' };
    }

    if (
        /--plasma-typo-/.test(cv) ||
        /\.(fontfamily|fontsize|fontweight|fontstyle|letterspacing|lineheight)$/i.test(exportName)
    ) {
        return { category: 'typography', colorSubgroup: null };
    }

    if (
        /^(text|surface|outline|overlay)/.test(ev) ||
        /^--(text|surface|outline|overlay)-/.test(cv) ||
        ev.includes('gradient') ||
        cv.includes('gradient')
    ) {
        return { category: 'colors', colorSubgroup: 'default' };
    }

    if (/^border[rR]adius|^borderradius/.test(ev) || /--border-radius-/.test(cv)) {
        return { category: 'borderRadii', colorSubgroup: null };
    }
    if (/^shadow/.test(ev) || /--shadow-/.test(cv)) {
        return { category: 'shadows', colorSubgroup: null };
    }
    if (ev.startsWith('spacing') || /^--spacing-/.test(cv)) {
        return { category: 'spaces', colorSubgroup: null };
    }

    return { category: 'other', colorSubgroup: null };
}

/**
 * @param {string} filePath
 * @param {string} themePackage
 * @param {string} slug
 */
function parseTokenIndexFile(filePath, themePackage, slug) {
    const src = fs.readFileSync(filePath, 'utf8');
    /** @type {any[]} */
    const tokens = [];
    /** @type {Map<string, string[]>} */
    const cssVarToIds = new Map();
    /** @type {Map<string, string>} */
    const exportToId = new Map();

    const addToken = (t) => {
        tokens.push(t);
        exportToId.set(t.exportName, t.id);
        if (!cssVarToIds.has(t.cssVar)) cssVarToIds.set(t.cssVar, []);
        cssVarToIds.get(t.cssVar).push(t.id);
    };

    const stringRe = /export const (\w+) =[\s\n]*'([^']+)'/gs;
    let m;
    while ((m = stringRe.exec(src)) !== null) {
        const exportName = m[1];
        const full = m[2];
        const vm = full.match(/^var\((--[^,)]+)/);
        if (!vm) continue;
        const cssVar = vm[1];
        const { category, colorSubgroup } = categorize(exportName, cssVar);
        const id = `${themePackage}::${slug}::${exportName}`;
        addToken({
            id,
            exportName,
            cssVar,
            valuePreview: full.length > 120 ? `${full.slice(0, 117)}…` : full,
            category,
            colorSubgroup,
            themePackage,
            slug,
        });
    }

    const objRe = /export const (\w+) = \{([^}]+)\};/gs;
    while ((m = objRe.exec(src)) !== null) {
        const baseName = m[1];
        const body = m[2];
        if (!body.includes('plasma-typo') && !body.includes('var(--')) continue;
        const propRe = /(\w+):\s*'var\((--[^,)]+)[^']*'/g;
        let pm;
        while ((pm = propRe.exec(body)) !== null) {
            const prop = pm[1];
            const cssVar = pm[2];
            const exportName = `${baseName}.${prop}`;
            const { category, colorSubgroup } = categorize(exportName, cssVar);
            const id = `${themePackage}::${slug}::${exportName}`;
            const fullMatch = pm[0].match(/'([^']+)'/);
            const valuePreview = fullMatch ? fullMatch[1] : cssVar;
            addToken({
                id,
                exportName,
                cssVar,
                valuePreview: valuePreview.length > 120 ? `${valuePreview.slice(0, 117)}…` : valuePreview,
                category,
                colorSubgroup,
                themePackage,
                slug,
            });
        }
    }

    return { tokens, cssVarToIds, exportToId, filePath };
}

const IMPORT_NAMED_RE =
    /import\s*\{([\s\S]*?)\}\s*from\s*['"]@salutejs\/(plasma-themes|sdds-themes)\/tokens\/(\w+)['"]/g;
const IMPORT_DEFAULT_RE =
    /import\s+(\w+)\s+from\s*['"]@salutejs\/(plasma-themes|sdds-themes)\/tokens\/(\w+)['"]/g;

/**
 * @returns {Map<string, { themePackage: string; slug: string }[]>} local name -> registries
 */
function parseImports(source) {
    /** @type {Map<string, { themePackage: string; slug: string }[]>} */
    const map = new Map();
    let m;
    while ((m = IMPORT_NAMED_RE.exec(source)) !== null) {
        const names = m[1]
            .split(',')
            .map((s) => s.trim().split(/\s+as\s+/)[0].trim())
            .filter(Boolean);
        const themePkg = m[2];
        const slug = m[3];
        for (const n of names) {
            if (!map.has(n)) map.set(n, []);
            map.get(n).push({ themePackage: themePkg, slug });
        }
    }
    while ((m = IMPORT_DEFAULT_RE.exec(source)) !== null) {
        const n = m[1].trim();
        const themePkg = m[2];
        const slug = m[3];
        if (!map.has(n)) map.set(n, []);
        map.get(n).push({ themePackage: themePkg, slug });
    }
    return map;
}

/**
 * @param {string} source
 */
function extractCssTemplates(source) {
    const blocks = [];
    let searchFrom = 0;
    while (searchFrom < source.length) {
        const idx = source.indexOf('css`', searchFrom);
        if (idx === -1) break;
        const before = idx > 0 ? source[idx - 1] : ' ';
        if (/\w/.test(before)) {
            searchFrom = idx + 4;
            continue;
        }
        const start = idx + 4;
        let i = start;
        let depth = 1;
        while (i < source.length && depth > 0) {
            const ch = source[i];
            if (ch === '`' && source[i - 1] !== '\\') {
                depth--;
                if (depth === 0) {
                    blocks.push({
                        content: source.slice(start, i),
                        startLine: source.slice(0, start).split('\n').length,
                    });
                    searchFrom = i + 1;
                    break;
                }
                i++;
                continue;
            }
            if (ch === '$' && source[i + 1] === '{') {
                let brace = 1;
                i += 2;
                while (i < source.length && brace > 0) {
                    if (source[i] === '{') brace++;
                    else if (source[i] === '}') brace--;
                    i++;
                }
                continue;
            }
            i++;
        }
        if (depth > 0) {
            searchFrom = idx + 4;
        }
    }
    return blocks;
}

/**
 * @param {string} css
 * @param {number} lineOffset
 */
function extractVars(css, lineOffset) {
    const found = [];
    let i = 0;
    while (i < css.length) {
        const vi = css.indexOf('var(', i);
        if (vi === -1) break;
        let j = vi + 4;
        let depth = 1;
        while (j < css.length && depth > 0) {
            if (css[j] === '(') depth++;
            else if (css[j] === ')') depth--;
            j++;
        }
        const inner = css.slice(vi + 4, j - 1);
        const nm = inner.match(/^(\s*--[a-z0-9-]+)/i);
        if (nm) {
            const cssVar = nm[1].trim();
            const line = lineOffset + css.slice(0, vi).split('\n').length - 1;
            const raw = css.slice(vi, j);
            found.push({ type: 'var', cssVar, line, raw });
        }
        i = j;
    }
    return found;
}

/**
 * @param {string} css
 * @param {number} lineOffset
 */
function extractTemplates(css, lineOffset) {
    const found = [];
    const re = /\$\{([^}]+)\}/g;
    let m;
    while ((m = re.exec(css)) !== null) {
        const expr = m[1].trim();
        if (/^tokens\./.test(expr) || /^accordionTokens\./.test(expr) || /Tokens\./.test(expr)) continue;
        const line = lineOffset + css.slice(0, m.index).split('\n').length - 1;
        found.push({ type: 'template', expr, line, raw: m[0] });
    }
    return found;
}

const LITERAL_RE = /\b\d+\.?\d*(rem|px|em|%)\b/g;

/**
 * @param {string} css
 * @param {number} lineOffset
 */
function extractLiterals(css, lineOffset) {
    const found = [];
    let m;
    const re = new RegExp(LITERAL_RE.source, 'g');
    while ((m = re.exec(css)) !== null) {
        const line = lineOffset + css.slice(0, m.index).split('\n').length - 1;
        found.push({ type: 'literal', raw: m[0], line });
    }
    return found;
}

/**
 * @param {Map<string, any>} registries key themePackage::slug
 */
function scanConfigFile(absPath, relPath, packageName, registries) {
    const source = fs.readFileSync(absPath, 'utf8');
    const imports = parseImports(source);
    const slugsInFile = new Set();
    for (const [, refs] of imports) {
        for (const r of refs) {
            slugsInFile.add(`${r.themePackage}::${r.slug}`);
        }
    }

    /** @type {any[]} */
    const usages = [];
    const blocks = extractCssTemplates(source);
    for (const block of blocks) {
        const { content, startLine } = block;
        for (const v of extractVars(content, startLine)) {
            usages.push({ ...v, file: relPath, package: packageName });
        }
        for (const t of extractTemplates(content, startLine)) {
            usages.push({ ...t, file: relPath, package: packageName });
        }
        for (const l of extractLiterals(content, startLine)) {
            usages.push({ ...l, file: relPath, package: packageName });
        }
    }

    return { usages, imports, slugsInFile: [...slugsInFile] };
}

function main() {
    /** @type {ExplorerConfig} */
    const cfg = readJson(CONFIG_PATH);
    const pkgNames = new Set(cfg.componentPackages.map((p) => p.name));
    for (const ds of cfg.designSystems ?? []) {
        if (!pkgNames.has(ds.package)) {
            console.warn(`designSystems entry "${ds.id}" references unknown package "${ds.package}"`);
        }
    }
    const registries = new Map();

    const ensureRegistry = (themePackage, slug) => {
        const key = `${themePackage}::${slug}`;
        if (registries.has(key)) return registries.get(key);
        const rootRel = cfg.themeRoots[themePackage];
        if (!rootRel) {
            console.warn(`Unknown theme package: ${themePackage}`);
            return null;
        }
        const indexPath = path.join(REPO_ROOT, rootRel, slug, 'index.ts');
        if (!fs.existsSync(indexPath)) {
            console.warn(`Missing token index: ${indexPath}`);
            return null;
        }
        const data = parseTokenIndexFile(indexPath, themePackage, slug);
        registries.set(key, data);
        return data;
    };

    /** Discover slugs from all configs first */
    const slugKeys = new Set();
    for (const pkg of cfg.componentPackages) {
        const pkgAbs = path.join(REPO_ROOT, pkg.path);
        const configs = findConfigFiles(pkgAbs);
        for (const abs of configs) {
            const src = fs.readFileSync(abs, 'utf8');
            const im = parseImports(src);
            for (const [, refs] of im) {
                for (const r of refs) {
                    slugKeys.add(`${r.themePackage}::${r.slug}`);
                }
            }
        }
    }

    for (const key of slugKeys) {
        const [themePackage, slug] = key.split('::');
        ensureRegistry(themePackage, slug);
    }

    /** @type {any[]} */
    const allUsages = [];
    /** @type {Map<string, Set<string>>} tokenId -> component paths */
    const tokenComponents = new Map();
    /** @type {Map<string, { tokens: Set<string>; gaps: any[] }>} */
    const componentSummary = new Map();

    for (const pkg of cfg.componentPackages) {
        const pkgAbs = path.join(REPO_ROOT, pkg.path);
        const configs = findConfigFiles(pkgAbs);
        for (const abs of configs) {
            const rel = path.relative(REPO_ROOT, abs);
            const { usages, imports, slugsInFile } = scanConfigFile(abs, rel, pkg.name, registries);

            const compKey = `${pkg.name}::${rel}`;
            if (!componentSummary.has(compKey)) {
                componentSummary.set(compKey, { tokens: new Set(), gaps: [] });
            }
            const summary = componentSummary.get(compKey);

            for (const u of usages) {
                let tokenId = null;
                let resolved = false;

                if (u.type === 'template') {
                    const expr = u.expr;
                    const dot = expr.indexOf('.');
                    const base = dot === -1 ? expr : expr.slice(0, dot);
                    const prop = dot === -1 ? null : expr.slice(dot + 1);
                    const binding = imports.get(base);
                    if (binding) {
                        for (const { themePackage, slug } of binding) {
                            const reg = registries.get(`${themePackage}::${slug}`);
                            if (!reg) continue;
                            const look = prop ? `${base}.${prop}` : base;
                            if (reg.exportToId.has(look)) {
                                tokenId = reg.exportToId.get(look);
                                resolved = true;
                                break;
                            }
                            if (!prop && reg.exportToId.has(base)) {
                                tokenId = reg.exportToId.get(base);
                                resolved = true;
                                break;
                            }
                        }
                    }
                } else if (u.type === 'var') {
                    for (const key of slugsInFile) {
                        const reg = registries.get(key);
                        if (!reg) continue;
                        const ids = reg.cssVarToIds.get(u.cssVar);
                        if (ids && ids.length) {
                            tokenId = ids[0];
                            resolved = true;
                            break;
                        }
                    }
                }

                if (u.type === 'literal') {
                    summary.gaps.push({ kind: 'literal', ...u });
                    allUsages.push({
                        package: pkg.name,
                        configPath: rel,
                        line: u.line,
                        kind: 'literal',
                        tokenId: null,
                        raw: u.raw,
                    });
                    continue;
                }

                if (u.type === 'var' && !resolved) {
                    summary.gaps.push({ kind: 'unresolvedVar', ...u });
                    allUsages.push({
                        package: pkg.name,
                        configPath: rel,
                        line: u.line,
                        kind: 'unresolvedVar',
                        tokenId: null,
                        raw: u.raw,
                    });
                    continue;
                }

                if (u.type === 'template' && !resolved) {
                    summary.gaps.push({ kind: 'unresolvedTemplate', ...u });
                    allUsages.push({
                        package: pkg.name,
                        configPath: rel,
                        line: u.line,
                        kind: 'unresolvedTemplate',
                        tokenId: null,
                        raw: u.raw,
                    });
                    continue;
                }

                if (tokenId) {
                    summary.tokens.add(tokenId);
                    if (!tokenComponents.has(tokenId)) tokenComponents.set(tokenId, new Set());
                    tokenComponents.get(tokenId).add(compKey);
                }

                allUsages.push({
                    package: pkg.name,
                    configPath: rel,
                    line: u.line,
                    kind: u.type === 'var' ? 'var' : 'template',
                    tokenId,
                    raw: u.raw,
                });
            }
        }
    }

    const allTokens = [];
    for (const reg of registries.values()) {
        allTokens.push(...reg.tokens);
    }

    const tokenUsageCount = {};
    for (const [tid, set] of tokenComponents) {
        tokenUsageCount[tid] = set.size;
    }

    const componentsOut = [];
    for (const [key, { tokens, gaps }] of componentSummary) {
        const [packageName, ...rest] = key.split('::');
        const configPath = rest.join('::');
        componentsOut.push({
            package: packageName,
            configPath,
            tokenIds: [...tokens],
            gapCount: gaps.length,
            gaps,
        });
    }

    componentsOut.sort((a, b) => b.gapCount - a.gapCount);

    const payload = {
        generatedAt: new Date().toISOString(),
        designSystems: cfg.designSystems ?? [],
        tokens: allTokens,
        usages: allUsages,
        tokenUsageCount,
        components: componentsOut,
    };

    fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
    fs.writeFileSync(OUT_PATH, JSON.stringify(payload, null, 0), 'utf8');
    console.log('Wrote', OUT_PATH, 'tokens:', allTokens.length, 'usages:', allUsages.length);
}

main();
