/**
 * Replaces var(--*) in component configs with theme token references (styled-components `css` blocks).
 *
 * Run from repo root:
 *   node scripts/migrate-plasma-giga-config-tokens.mjs [profile]
 *   node scripts/migrate-plasma-giga-config-tokens.mjs --all
 *
 * Profiles: plasma-giga, plasma-homeds, plasma-b2c, plasma-web, plasma-new-hope, sdds-sbcom, sdds-bizcom, sdds-crm, sdds-cs,
 *   sdds-dfa, sdds-finai, sdds-insol, sdds-netology, sdds-os, sdds-platform-ai, sdds-scan, sdds-serv
 * `--all` runs `BATCH_PROFILE_KEYS` (see TOKEN_MIGRATION_REPORT.md for PR links).
 * Special cases: sdds-crm → `sdds_serv` tokens; sdds-netology → `plasma_b2c`; plasma-new-hope → configs under `src/examples/components` + `plasma_b2c` tokens (see report).
 *
 * With --all: fixes var(--- typos in target packages, migrates each profile, writes TOKEN_MIGRATION_REPORT.md.
 *
 * Constraints:
 * - Only safe for files that use styled-components `css` template literals.
 * - `Scrollbar/Scrollbar.config.ts`: plain object + quoted `var(--*)` values → theme token identifiers (see plasma-giga PR #2637).
 * - Idempotent when no var(--*) remains.
 */
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const plasma = (segment) => path.join(root, 'packages/themes/plasma-themes/src/tokens', segment, 'index.ts');
const sdds = (segment) => path.join(root, 'packages/themes/sdds-themes/src/tokens', segment, 'index.ts');

/** @type {Record<string, { pkgRoot: string; tokensMod: string; importPath: string; tokenThemeNote?: string; componentsRelative?: string }>} */
const PROFILES = {
    'plasma-giga': {
        pkgRoot: path.join(root, 'packages/plasma-giga'),
        tokensMod: plasma('plasma_giga'),
        importPath: '@salutejs/plasma-themes/tokens/plasma_giga',
    },
    'plasma-homeds': {
        pkgRoot: path.join(root, 'packages/plasma-homeds'),
        tokensMod: plasma('plasma_homeds'),
        importPath: '@salutejs/plasma-themes/tokens/plasma_homeds',
    },
    'plasma-b2c': {
        pkgRoot: path.join(root, 'packages/plasma-b2c'),
        tokensMod: plasma('plasma_b2c'),
        importPath: '@salutejs/plasma-themes/tokens/plasma_b2c',
    },
    'plasma-web': {
        pkgRoot: path.join(root, 'packages/plasma-web'),
        tokensMod: plasma('plasma_web'),
        importPath: '@salutejs/plasma-themes/tokens/plasma_web',
    },
    'plasma-new-hope': {
        pkgRoot: path.join(root, 'packages/plasma-new-hope'),
        tokensMod: plasma('plasma_b2c'),
        importPath: '@salutejs/plasma-themes/tokens/plasma_b2c',
        componentsRelative: 'src/examples/components',
        tokenThemeNote:
            'Example / Storybook configs under `src/examples/components` (not `src/components`); same token bundle as plasma_b2c.',
    },
    'sdds-sbcom': {
        pkgRoot: path.join(root, 'packages/sdds-sbcom'),
        tokensMod: sdds('sdds_sbcom'),
        importPath: '@salutejs/sdds-themes/tokens/sdds_sbcom',
    },
    'sdds-bizcom': {
        pkgRoot: path.join(root, 'packages/sdds-bizcom'),
        tokensMod: sdds('sdds_bizcom'),
        importPath: '@salutejs/sdds-themes/tokens/sdds_bizcom',
    },
    'sdds-crm': {
        pkgRoot: path.join(root, 'packages/sdds-crm'),
        tokensMod: sdds('sdds_serv'),
        importPath: '@salutejs/sdds-themes/tokens/sdds_serv',
        tokenThemeNote: 'No sdds_crm token set in repo; package uses sdds_serv (see ViewContainer / tokens re-export).',
    },
    'sdds-cs': {
        pkgRoot: path.join(root, 'packages/sdds-cs'),
        tokensMod: sdds('sdds_cs'),
        importPath: '@salutejs/sdds-themes/tokens/sdds_cs',
    },
    'sdds-dfa': {
        pkgRoot: path.join(root, 'packages/sdds-dfa'),
        tokensMod: sdds('sdds_dfa'),
        importPath: '@salutejs/sdds-themes/tokens/sdds_dfa',
    },
    'sdds-finai': {
        pkgRoot: path.join(root, 'packages/sdds-finai'),
        tokensMod: sdds('sdds_finai'),
        importPath: '@salutejs/sdds-themes/tokens/sdds_finai',
    },
    'sdds-insol': {
        pkgRoot: path.join(root, 'packages/sdds-insol'),
        tokensMod: sdds('sdds_insol'),
        importPath: '@salutejs/sdds-themes/tokens/sdds_insol',
    },
    'sdds-netology': {
        pkgRoot: path.join(root, 'packages/sdds-netology'),
        tokensMod: plasma('plasma_b2c'),
        importPath: '@salutejs/plasma-themes/tokens/plasma_b2c',
        tokenThemeNote: 'Package depends on @salutejs/plasma-themes; re-exports plasma_b2c (not sdds-themes).',
    },
    'sdds-os': {
        pkgRoot: path.join(root, 'packages/sdds-os'),
        tokensMod: sdds('sdds_os'),
        importPath: '@salutejs/sdds-themes/tokens/sdds_os',
    },
    'sdds-platform-ai': {
        pkgRoot: path.join(root, 'packages/sdds-platform-ai'),
        tokensMod: sdds('sdds_platform_ai'),
        importPath: '@salutejs/sdds-themes/tokens/sdds_platform_ai',
    },
    'sdds-scan': {
        pkgRoot: path.join(root, 'packages/sdds-scan'),
        tokensMod: sdds('sdds_scan'),
        importPath: '@salutejs/sdds-themes/tokens/sdds_scan',
    },
    'sdds-serv': {
        pkgRoot: path.join(root, 'packages/sdds-serv'),
        tokensMod: sdds('sdds_serv'),
        importPath: '@salutejs/sdds-themes/tokens/sdds_serv',
    },
};

function componentsDirFor(profile) {
    const sub = profile.componentsRelative ?? 'src/components';
    return path.join(profile.pkgRoot, sub);
}

/** GitHub PRs per package (empty string = add link when opened). See TOKEN_MIGRATION_REPORT.md. */
const MIGRATION_PR_LINKS = {
    'plasma-giga': 'https://github.com/salute-developers/plasma/pull/2637',
    'plasma-homeds': 'https://github.com/salute-developers/plasma/pull/2649',
    'plasma-b2c': 'https://github.com/salute-developers/plasma/pull/2651',
    'plasma-web': 'https://github.com/salute-developers/plasma/pull/2650',
    'plasma-new-hope': 'https://github.com/salute-developers/plasma/pull/2652',
    'sdds-bizcom': 'https://github.com/salute-developers/plasma/pull/2648',
    'sdds-crm': 'https://github.com/salute-developers/plasma/pull/2647',
    'sdds-cs': 'https://github.com/salute-developers/plasma/pull/2646',
    'sdds-dfa': 'https://github.com/salute-developers/plasma/pull/2645',
    'sdds-finai': 'https://github.com/salute-developers/plasma/pull/2644',
    'sdds-insol': 'https://github.com/salute-developers/plasma/pull/2643',
    'sdds-netology': 'https://github.com/salute-developers/plasma/pull/2642',
    'sdds-os': 'https://github.com/salute-developers/plasma/pull/2641',
    'sdds-platform-ai': 'https://github.com/salute-developers/plasma/pull/2640',
    'sdds-sbcom': 'https://github.com/salute-developers/plasma/pull/2639',
    'sdds-scan': 'https://github.com/salute-developers/plasma/pull/2653',
    'sdds-serv': 'https://github.com/salute-developers/plasma/pull/2654',
};

const BATCH_PROFILE_KEYS = [
    'plasma-giga',
    'plasma-homeds',
    'plasma-b2c',
    'plasma-web',
    'plasma-new-hope',
    'sdds-bizcom',
    'sdds-crm',
    'sdds-cs',
    'sdds-dfa',
    'sdds-finai',
    'sdds-insol',
    'sdds-netology',
    'sdds-os',
    'sdds-platform-ai',
    'sdds-sbcom',
    'sdds-scan',
    'sdds-serv',
];

const typoPrefixes = [
    ['body-xxs', 'bodyXXS', 'bodyXXSBold', 'bodyXXSMedium'],
    ['body-xs', 'bodyXS', 'bodyXSBold', 'bodyXSMedium'],
    ['body-l', 'bodyL', 'bodyLBold', 'bodyLMedium'],
    ['body-m', 'bodyM', 'bodyMBold', 'bodyMMedium'],
    ['body-s', 'bodyS', 'bodySBold', 'bodySMedium'],
    ['dspl-l', 'dsplL', 'dsplLBold', 'dsplLMedium'],
    ['dspl-m', 'dsplM', 'dsplMBold', 'dsplMMedium'],
    ['dspl-s', 'dsplS', 'dsplSBold', 'dsplSMedium'],
    ['text-l', 'textL', 'textLBold', 'textLMedium'],
    ['text-m', 'textM', 'textMBold', 'textMMedium'],
    ['text-s', 'textS', 'textSBold', 'textSMedium'],
    ['text-xs', 'textXS', 'textXSBold', 'textXSMedium'],
    ['text-slim', 'textSlim', 'textSlimBold', 'textSlimMedium'],
    ['h1', 'h1', 'h1Bold', 'h1Medium'],
    ['h2', 'h2', 'h2Bold', 'h2Medium'],
    ['h3', 'h3', 'h3Bold', 'h3Medium'],
    ['h4', 'h4', 'h4Bold', 'h4Medium'],
    ['h5', 'h5', 'h5Bold', 'h5Medium'],
    ['h6', 'h6', 'h6Bold', 'h6Medium'],
];

function typoSuffixToExpr(suffix, base, bold, medium) {
    if (suffix === 'font-family') return `${base}.fontFamily`;
    if (suffix === 'font-size') return `${base}.fontSize`;
    if (suffix === 'font-style') return `${base}.fontStyle`;
    if (suffix === 'font-weight' || suffix === 'body-font-weight') return `${base}.fontWeight`;
    if (suffix === 'letter-spacing') return `${base}.letterSpacing`;
    if (suffix === 'line-height') return `${base}.lineHeight`;
    if (suffix === 'bold-font-weight' || suffix === 'bold-weight') return `${bold}.fontWeight`;
    if (suffix === 'medium-font-weight') return `${medium}.fontWeight`;
    if (suffix.startsWith('bold-')) {
        const sub = suffix.slice('bold-'.length);
        return typoSuffixToExpr(sub, bold, bold, bold);
    }
    if (suffix.startsWith('medium-')) {
        const sub = suffix.slice('medium-'.length);
        return typoSuffixToExpr(sub, medium, medium, medium);
    }
    return null;
}

function typoReplacement(cssVar) {
    if (!cssVar.startsWith('--plasma-typo-')) return null;
    let rest = cssVar.slice('--plasma-typo-'.length);
    rest = rest.replace(/-bold-bold-/, '-bold-');
    for (const [prefix, base, bold, medium] of typoPrefixes) {
        if (rest === prefix || rest.startsWith(`${prefix}-`)) {
            const suffix = rest === prefix ? '' : rest.slice(prefix.length + 1);
            return typoSuffixToExpr(suffix, base, bold, medium);
        }
    }
    return null;
}

function buildStringVarMap(tokensMod) {
    const src = fs.readFileSync(tokensMod, 'utf8');
    /** @type {Map<string, string>} */
    const map = new Map();
    const re = /export const (\w+) =[\s\n]*'var\((--[^,)]+)/g;
    let m;
    while ((m = re.exec(src)) !== null) {
        const [, exportName, varName] = m;
        if (!map.has(varName)) map.set(varName, exportName);
    }
    return map;
}

/** CSS vars used in configs but named differently (or missing) in token index */
const manualStringVarMap = new Map([
    ['--surface-transparent-clear', 'surfaceClear'],
    ['--plasma-colors-skeleton-gradient', 'surfaceSkeletonGradient'],
    ['--plasma-colors-skeleton-gradient-lighter', 'surfaceSkeletonDeepGradient'],
]);

function buildAllowedTokenImports(stringVarMap) {
    const s = new Set(stringVarMap.values());
    for (const v of manualStringVarMap.values()) {
        s.add(v);
    }
    for (const row of typoPrefixes) {
        for (let i = 1; i < row.length; i++) {
            s.add(row[i]);
        }
    }
    return s;
}

function tokenImportsNeeded(content, allowedTokenImports) {
    const need = new Set();
    const re = /\$\{([a-zA-Z]\w*(?:\.[a-zA-Z]\w*)*)\}/g;
    let m;
    while ((m = re.exec(content)) !== null) {
        const rootName = m[1].split('.')[0];
        if (allowedTokenImports.has(rootName)) need.add(rootName);
    }
    return [...need].sort((a, b) => a.localeCompare(b));
}

/** `packages/.../Scrollbar/Scrollbar.config.ts` — plain object colors, no styled-components `css`. */
function isScrollbarConfigPath(filePath) {
    const norm = filePath.split(path.sep).join('/');
    return /\/Scrollbar\/Scrollbar\.config\.ts$/.test(norm);
}

/**
 * Replace `'var(--foo)'` / `"var(--foo)"` (optional `, fallback`) with bare token identifiers.
 * @returns {{ next: string; usedRoots: Set<string> }}
 */
function applyScrollbarStyleReplacements(content, stringVarMap) {
    const usedRoots = new Set();
    let next = content;

    function replaceQuoted(quote) {
        const q = quote === "'" ? "'" : '"';
        const re = new RegExp(`${q}var\\((--[a-z0-9-]+)(?:,[^)]*)?\\)${q}`, 'g');
        next = next.replace(re, (full, varName) => {
            const rep = replacementForVar(varName, stringVarMap);
            if (!rep || rep.expr.includes('.')) return full;
            usedRoots.add(rep.expr);
            return rep.expr;
        });
    }
    replaceQuoted("'");
    replaceQuoted('"');

    const vars = [...collectVars(next)].sort((a, b) => b.length - a.length);
    for (const v of vars) {
        const rep = replacementForVar(v, stringVarMap);
        if (!rep || rep.expr.includes('.')) continue;
        if (next.includes(`var(${v})`)) {
            next = next.split(`var(${v})`).join(rep.expr);
            usedRoots.add(rep.expr);
        }
        if (next.includes(`var(${v},`)) {
            next = next.split(`var(${v},`).join(`${rep.expr},`);
            usedRoots.add(rep.expr);
        }
    }

    return { next, usedRoots };
}

function mergeTokenImportsIntoFile(next, importPath, sortedNames) {
    const importRe = new RegExp(
        `import\\s*\\{([^}]+)\\}\\s*from\\s*['"]${importPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"]`,
        's',
    );
    let mergedTokenImport = false;
    next = next.replace(importRe, (_, inner) => {
        mergedTokenImport = true;
        const existing = inner
            .split(',')
            .map((s) => s.trim())
            .filter(Boolean);
        const merged = [...new Set([...existing, ...sortedNames])].sort((a, b) => a.localeCompare(b));
        return `import {\n    ${merged.join(',\n    ')},\n} from '${importPath}'`;
    });
    if (!mergedTokenImport && sortedNames.length) {
        const firstImport = next.indexOf('import ');
        const block = `import {\n    ${sortedNames.join(',\n    ')},\n} from '${importPath}';\n`;
        if (firstImport === -1) next = block + next;
        else next = next.slice(0, firstImport) + block + next.slice(firstImport);
    }
    return next;
}

function collectVars(content) {
    const found = new Set();
    const re = /var\((--[a-z0-9-]+)(?:\)|,)/g;
    let m;
    while ((m = re.exec(content)) !== null) {
        found.add(m[1]);
    }
    return found;
}

/** Invalid `var(---foo)` / `var(----foo)` typos (extra `-` after `var(`). */
function collectTripleDashVars(content) {
    const found = [];
    const re = /var\((-{3,}[a-z0-9-]+)\)/g;
    let m;
    while ((m = re.exec(content)) !== null) {
        found.push(m[1]);
    }
    return found;
}

function replacementForVar(cssVar, stringVarMap) {
    const typo = typoReplacement(cssVar);
    if (typo) return { expr: typo, kind: 'typo' };
    const manual = manualStringVarMap.get(cssVar);
    if (manual) return { expr: manual, kind: 'string' };
    const ex = stringVarMap.get(cssVar);
    if (ex) return { expr: ex, kind: 'string' };
    return null;
}

function applyVarReplacements(content, stringVarMap) {
    let next = content;

    const specials = [
        [
            /var\(\s*--plasma-colors-skeleton-gradient\s*,\s*var\(\s*--surface-skeleton-gradient\s*\)\s*\)/g,
            '${surfaceSkeletonGradient}',
        ],
        [
            /var\(\s*--plasma-colors-skeleton-gradient-lighter\s*,\s*var\(\s*--surface-skeleton-deep-gradient\s*\)\s*\)/g,
            '${surfaceSkeletonDeepGradient}',
        ],
    ];
    for (const [re, repl] of specials) {
        next = next.replace(re, repl);
    }

    const vars = [...collectVars(next)].sort((a, b) => b.length - a.length);
    for (const v of vars) {
        const rep = replacementForVar(v, stringVarMap);
        if (!rep) continue;
        const lit = '${' + rep.expr + '}';
        next = next.split(`var(${v})`).join(lit);
        next = next.split(`var(${v},`).join(lit + ',');
    }
    return next;
}

/**
 * @param {string} filePath
 * @param {{ importPath: string; stringVarMap: Map<string,string>; allowedTokenImports: Set<string> }} ctx
 * @returns {{ status: string; rel?: string; unresolved?: string[]; tripleDash?: string[] }}
 */
function migrateFile(filePath, ctx) {
    const rel = path.relative(root, filePath);
    const { importPath, stringVarMap, allowedTokenImports } = ctx;
    let content = fs.readFileSync(filePath, 'utf8');

    const tripleDash = collectTripleDashVars(content);
    if (tripleDash.length) {
        return { status: 'fail_triple_dash', rel, tripleDash };
    }

    if (!content.includes('var(--')) {
        return { status: 'no_var', rel };
    }

    if (!content.includes('css`')) {
        if (!isScrollbarConfigPath(filePath)) {
            return { status: 'skip_no_css', rel };
        }
        const sb = applyScrollbarStyleReplacements(content, stringVarMap);
        let next = sb.next;
        const unresolved = [...collectVars(next)];
        if (unresolved.length) {
            return { status: 'fail_unresolved', rel, unresolved };
        }
        const fromCss = tokenImportsNeeded(next, allowedTokenImports);
        const sorted = [...new Set([...sb.usedRoots, ...fromCss])].sort((a, b) => a.localeCompare(b));
        next = mergeTokenImportsIntoFile(next, importPath, sorted);
        fs.writeFileSync(filePath, next);
        return { status: 'migrated', rel };
    }

    let next = content;
    for (let i = 0; i < 12 && next.includes('var(--'); i++) {
        next = applyVarReplacements(next, stringVarMap);
    }

    const unresolved = [...collectVars(next)];
    if (unresolved.length) {
        return { status: 'fail_unresolved', rel, unresolved };
    }

    const sorted = tokenImportsNeeded(next, allowedTokenImports);
    next = mergeTokenImportsIntoFile(next, importPath, sorted);

    fs.writeFileSync(filePath, next);
    return { status: 'migrated', rel };
}

function walk(dir) {
    const out = [];
    if (!fs.existsSync(dir)) return out;
    for (const name of fs.readdirSync(dir)) {
        const p = path.join(dir, name);
        const st = fs.statSync(p);
        if (st.isDirectory()) out.push(...walk(p));
        else if (name.endsWith('.config.ts')) out.push(p);
    }
    return out;
}

/**
 * Replace `var(---x)` → `var(--x)` (and more dashes) in .config.ts under dir.
 * @returns {{ file: string; replacements: number }[]}
 */
function fixTripleDashInConfigs(dir) {
    const files = walk(dir);
    /** @type {{ file: string; replacements: number }[]} */
    const log = [];
    for (const f of files) {
        let s = fs.readFileSync(f, 'utf8');
        const before = s;
        s = s.replace(/var\((-{3,})([a-z0-9-]+)\)/g, (match, dashes, name) => {
            return `var(--${name})`;
        });
        if (s !== before) {
            const n = [...before.matchAll(/var\((-{3,}[a-z0-9-]+)\)/g)].length;
            fs.writeFileSync(f, s);
            log.push({ file: path.relative(root, f), replacements: n });
        }
    }
    return log;
}

/**
 * @param {string} profileKey
 * @param {{ quiet?: boolean }} [opts]
 */
function runProfile(profileKey, opts = {}) {
    const quiet = opts.quiet ?? false;
    const profile = PROFILES[profileKey];
    if (!profile) {
        console.error(
            `Unknown profile "${profileKey}". Use: ${Object.keys(PROFILES).sort().join(', ')}`,
        );
        process.exit(1);
    }
    if (!fs.existsSync(profile.tokensMod)) {
        console.error(`Token file not found: ${profile.tokensMod}`);
        process.exit(1);
    }

    const stringVarMap = buildStringVarMap(profile.tokensMod);
    const allowedTokenImports = buildAllowedTokenImports(stringVarMap);
    const componentsDir = componentsDirFor(profile);
    const ctx = {
        importPath: profile.importPath,
        stringVarMap,
        allowedTokenImports,
    };

    const files = walk(componentsDir);
    /** @type {typeof files} */
    const migrated = [];
    /** @type {typeof files} */
    const noVar = [];
    /** @type {typeof files} */
    const skipNoCss = [];
    /** @type {{ rel: string; unresolved: string[] }[]} */
    const failUnresolved = [];
    /** @type {{ rel: string; tripleDash: string[] }[]} */
    const failTripleDash = [];
    /** @type {any[]} */
    const errors = [];

    for (const f of files) {
        try {
            const r = migrateFile(f, ctx);
            if (!quiet && r.status === 'migrated') console.log('migrated', r.rel);
            if (!quiet && r.status === 'skip_no_css') {
                console.warn(`Skip ${r.rel}: var(--*) outside styled-components css template — edit manually`);
            }
            if (!quiet && r.status === 'fail_unresolved') {
                console.warn(`Unresolved in ${r.rel}: ${r.unresolved.join(', ')}`);
            }
            if (!quiet && r.status === 'fail_triple_dash') {
                console.warn(`Triple-dash typo in ${r.rel}: ${r.tripleDash.join(', ')} — fix var(---…) → var(--…)`);
            }
            if (r.status === 'migrated') migrated.push(f);
            else if (r.status === 'no_var') noVar.push(f);
            else if (r.status === 'skip_no_css') skipNoCss.push(f);
            else if (r.status === 'fail_unresolved') failUnresolved.push({ rel: r.rel, unresolved: r.unresolved });
            else if (r.status === 'fail_triple_dash') failTripleDash.push({ rel: r.rel, tripleDash: r.tripleDash });
        } catch (e) {
            errors.push({ file: path.relative(root, f), error: String(e) });
            console.error(f, e);
        }
    }

    if (!quiet) console.log('done, profile:', profileKey, 'files written:', migrated.length);

    return {
        profileKey,
        profile,
        totalConfigFiles: files.length,
        migrated: migrated.map((f) => path.relative(root, f)),
        noVarTokens: noVar.map((f) => path.relative(root, f)),
        skippedNoCss: skipNoCss.map((f) => path.relative(root, f)),
        failedUnresolved: failUnresolved,
        failedTripleDash: failTripleDash,
        errors,
    };
}

function countConfigFilesWithTokenImport(pkgRoot, importPath, componentsRelative = 'src/components') {
    const dir = path.join(pkgRoot, componentsRelative);
    let n = 0;
    for (const f of walk(dir)) {
        const t = fs.readFileSync(f, 'utf8');
        if (t.includes(`from '${importPath}'`) || t.includes(`from "${importPath}"`)) n++;
    }
    return n;
}

function scanTripleDashInProfiles(profileKeys) {
    /** @type {string[]} */
    const linesOut = [];
    const re = /var\((-{3,}[a-z0-9-]+)\)/g;
    for (const key of profileKeys) {
        const dir = componentsDirFor(PROFILES[key]);
        const files = walk(dir);
        for (const f of files) {
            const t = fs.readFileSync(f, 'utf8');
            const hits = [...t.matchAll(re)];
            if (hits.length) {
                const uniq = [...new Set(hits.map((h) => h[1]))];
                linesOut.push(`- \`${path.relative(root, f)}\`: \`${uniq.join('`, `')}\``);
            }
        }
    }
    return linesOut;
}

function formatReportMarkdown(batchResults, tripleDashFixes, generatedAt) {
    const lines = [];
    lines.push('# Token migration report');
    lines.push('');
    lines.push(`Generated: ${generatedAt} (repo root: \`scripts/migrate-plasma-giga-config-tokens.mjs --all\`)`);
    lines.push('');
    lines.push('## Summary');
    lines.push('');
    let totalMigrated = 0;
    let totalConfigs = 0;
    for (const r of batchResults) {
        totalMigrated += r.migrated.length;
        totalConfigs += r.totalConfigFiles;
    }
    lines.push(`- **Packages in batch:** ${batchResults.length}`);
    lines.push(`- **Total \`.config.ts\` files scanned:** ${totalConfigs}`);
    lines.push(
        `- **Files updated in this run:** ${totalMigrated} (subsequent \`--all\` runs show **0** here if configs are already migrated; use git history for the first full pass)`,
    );
    lines.push(
        `- **Triple-dash typo fixes in this run:** ${tripleDashFixes.length} files (\`var(---x)\` → \`var(--x)\`, only where matches existed)`,
    );
    lines.push('');

    lines.push('## Theme / token mapping notes');
    lines.push('');
    lines.push('| Package profile | Token import | PR | Notes |');
    lines.push('|-----------------|--------------|----|-------|');
    for (const key of BATCH_PROFILE_KEYS) {
        const p = PROFILES[key];
        const note = p.tokenThemeNote ? p.tokenThemeNote : '—';
        const prUrl = MIGRATION_PR_LINKS[key];
        const prCell = prUrl ? `[#${prUrl.match(/pull\/(\d+)/)?.[1] ?? '…'}](${prUrl})` : 'TBD';
        lines.push(`| \`${key}\` | \`${p.importPath}\` | ${prCell} | ${note} |`);
    }
    lines.push('');

    lines.push('## Known bugs fixed before migration (`var(---…)` typos)');
    lines.push('');
    lines.push(
        'Some configs had **three (or more) hyphens** after `var(` (e.g. `var(---text-secondary-active)` instead of `var(--text-secondary-active)`). That is invalid CSS and broke the migrator’s `var(--*)` parser.',
    );
    lines.push('');
    lines.push(
        '> **First full batch (this repo effort):** 31 `*.config.ts` files under these packages were auto-corrected (`var(---x)` → `var(--x)`) before token migration. Re-running `--all` shows **0** in the table below unless new typos appear.',
    );
    lines.push('');
    if (tripleDashFixes.length === 0) {
        lines.push('- *(No triple-dash occurrences found in batch package configs during this run.)*');
    } else {
        lines.push('Files auto-corrected (`var(---x)` → `var(--x)`):');
        lines.push('');
        lines.push('| File | Approx. matches fixed |');
        lines.push('|------|------------------------|');
        for (const x of tripleDashFixes) {
            lines.push(`| \`${x.file}\` | ${x.replacements} |`);
        }
    }
    lines.push('');
    lines.push('### Same typo elsewhere (not in this batch)');
    lines.push('');
    lines.push(
        'Other trees outside the batch (e.g. ad-hoc fixtures) may still contain `var(---…)` until migrated or fixed separately.',
    );
    lines.push('');

    const remainingTriple = scanTripleDashInProfiles(BATCH_PROFILE_KEYS);
    lines.push('### Remaining `var(---…)` in batch packages (after this run)');
    lines.push('');
    if (remainingTriple.length === 0) {
        lines.push(
            '- None found under batch packages’ config roots (e.g. `src/components/**` or `src/examples/components/**`).',
        );
    } else {
        for (const row of remainingTriple) lines.push(row);
    }
    lines.push('');

    lines.push('## Per-package results');
    lines.push('');
    lines.push(
        '- **Written this run:** `.config.ts` files the script saved in this invocation (still had `var(--*)` in a styled-components css template and every variable resolved). Usually **0** or small once the package is already migrated.',
    );
    lines.push(
        '- **Configs importing theme:** count of `.config.ts` files under the config root whose source contains an import from that package’s theme module. Measured **after** the run; includes files not touched this run.',
    );
    lines.push('');
    for (const r of batchResults) {
        lines.push(`### \`${r.profileKey}\``);
        lines.push('');
        lines.push(`- **Token module:** \`${path.relative(root, r.profile.tokensMod)}\``);
        lines.push(`- **Import:** \`${r.profile.importPath}\``);
        if (r.profile.componentsRelative) {
            lines.push(`- **Config root:** \`${path.relative(root, componentsDirFor(r.profile))}\``);
        }
        lines.push(`- **Config files:** ${r.totalConfigFiles}`);
        lines.push(`- **Written this run:** ${r.migrated.length}`);
        lines.push(`- **No \`var(--*)\` (unchanged / already migrated):** ${r.noVarTokens.length}`);
        lines.push(
            `- **Skipped (has CSS variables but no styled-components ` +
                '`css` template):** ' +
                r.skippedNoCss.length,
        );
        lines.push(`- **Failed (unresolved vars):** ${r.failedUnresolved.length}`);
        lines.push(`- **Failed (triple-dash, if any before fix pass):** ${r.failedTripleDash.length}`);
        lines.push(`- **Errors:** ${r.errors.length}`);
        const migratedConfigsCount = countConfigFilesWithTokenImport(
            r.profile.pkgRoot,
            r.profile.importPath,
            r.profile.componentsRelative ?? 'src/components',
        );
        lines.push(`- **Configs importing theme:** ${migratedConfigsCount}`);
        lines.push('');

        if (r.skippedNoCss.length) {
            lines.push('<details>');
            lines.push('<summary>Skipped (manual / non-css configs)</summary>');
            lines.push('');
            for (const p of r.skippedNoCss.sort()) lines.push(`- \`${p}\``);
            lines.push('');
            lines.push('</details>');
            lines.push('');
        }

        if (r.failedUnresolved.length) {
            lines.push('**Unresolved variables (not written):**');
            lines.push('');
            for (const f of r.failedUnresolved) {
                lines.push(`- \`${f.rel}\`: ${f.unresolved.join(', ')}`);
            }
            lines.push('');
        }

        if (r.failedTripleDash.length) {
            lines.push('**Triple-dash (should be empty after auto-fix):**');
            lines.push('');
            for (const f of r.failedTripleDash) {
                lines.push(`- \`${f.rel}\`: ${f.tripleDash.join(', ')}`);
            }
            lines.push('');
        }

        if (r.errors.length) {
            for (const e of r.errors) lines.push(`- Error \`${e.file}\`: ${e.error}`);
            lines.push('');
        }
    }

    lines.push('## Follow-up');
    lines.push('');
    lines.push(
        '- **Scrollbar:** `Scrollbar/Scrollbar.config.ts` is handled by the migrator (quoted `var(--*)` → token imports). Other plain-object configs without `css` are still skipped unless added explicitly.',
    );
    lines.push('- Run **ESLint with `--fix`** on touched packages if `import/order` or Prettier complain.');
    lines.push(
        '- Re-run a single package: `node scripts/migrate-plasma-giga-config-tokens.mjs <profile>` (profiles: `plasma-giga`, `sdds-sbcom`, …).',
    );
    lines.push('');

    lines.push('## Unresolved variables (why migration can fail)');
    lines.push('');
    lines.push(
        '- **Legacy plasma-web “Old” typography** (`--plasma-typo-body1-*`, `display1`, `headline1`, …): these names are **not** present as string exports in `plasma_web/index.ts` (the theme uses the newer `--plasma-typo-body-m-*` / `dspl-*` scale). Migrate those configs manually or point them at the correct token exports.',
    );
    lines.push(
        '- **Theme-specific gaps**: some packages reference CSS variables (e.g. `--surface-primary`, `--plasma-input-*`, `--overlay-soft`) that **do not appear** in the matching `tokens/*/index.ts` file. Add tokens upstream, or replace with the closest exported token after design review.',
    );
    lines.push(
        '- **`--plasma-typo-*-bold-bold-*`**: duplicated `bold` segment in the variable name; the migrator normalizes `-bold-bold-` → `-bold-` when resolving typography.',
    );
    lines.push('');

    return lines.join('\n');
}

const argv = process.argv.slice(2);
const runAll = argv.includes('--all');
const args = argv.filter((a) => !a.startsWith('--'));

if (runAll) {
    const generatedAt = new Date().toISOString();
    /** @type {{ file: string; replacements: number }[]} */
    const allTripleFixes = [];
    for (const key of BATCH_PROFILE_KEYS) {
        const componentsDir = componentsDirFor(PROFILES[key]);
        const fixes = fixTripleDashInConfigs(componentsDir);
        allTripleFixes.push(...fixes);
    }

    /** @type {ReturnType<typeof runProfile>[]} */
    const batchResults = [];
    for (const key of BATCH_PROFILE_KEYS) {
        batchResults.push(runProfile(key, { quiet: true }));
    }

    for (const r of batchResults) {
        console.log(
            r.profileKey,
            'migrated:',
            r.migrated.length,
            'skippedNoCss:',
            r.skippedNoCss.length,
            'failed:',
            r.failedUnresolved.length + r.failedTripleDash.length,
        );
    }

    const md = formatReportMarkdown(batchResults, allTripleFixes, generatedAt);
    fs.writeFileSync(path.join(root, 'TOKEN_MIGRATION_REPORT.md'), md, 'utf8');
    console.log('Wrote TOKEN_MIGRATION_REPORT.md');
} else {
    const profileArg = args[0] || 'plasma-giga';
    runProfile(profileArg, { quiet: false });
}
