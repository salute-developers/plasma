import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const THEMES_DIR = join(__dirname, '../../../packages/themes/sdds-themes/src/themes');
const OUTPUT_DIR = join(__dirname, '../from-themes');

const EMOJI = { dark: '🌑', light: '🌕' };

const SUBTHEME_MAP = [
    { prefix: 'on-dark-', subtheme: 'onDark' },
    { prefix: 'on-light-', subtheme: 'onLight' },
    { prefix: 'dark-', subtheme: 'Dark' },
    { prefix: 'inverse-', subtheme: 'Inverse' },
];

const EXCLUDED_PREFIXES = ['shadow', 'border-radius', 'spacing', 'plasma-typo'];
const EXCLUDED_SUFFIXES = ['-hover', '-active'];

function toCamelCase(str) {
    return str.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function getGroupName(group) {
    if (group === 'text') return 'Text&Icons';
    return group.charAt(0).toUpperCase() + group.slice(1);
}

function parseToken(rawToken, variant) {
    const emoji = EMOJI[variant];

    // Remove -- prefix
    const tokenName = rawToken.slice(2);

    // Check excluded prefixes
    if (EXCLUDED_PREFIXES.some((p) => tokenName.startsWith(p))) return null;

    // Check excluded suffixes
    if (EXCLUDED_SUFFIXES.some((s) => tokenName.endsWith(s))) return null;

    // Detect subtheme
    let subtheme = 'Default';
    let rest = tokenName;

    for (const { prefix, subtheme: st } of SUBTHEME_MAP) {
        if (tokenName.startsWith(prefix)) {
            subtheme = st;
            rest = tokenName.slice(prefix.length);
            break;
        }
    }

    // Group is the first segment of the remaining token
    const group = rest.split('-')[0];
    const groupLabel = getGroupName(group);

    // Full token in camelCase
    const camelToken = toCamelCase(tokenName);

    return { name: `${emoji} ${groupLabel} ${subtheme}/${camelToken}` };
}

function extractTokens(filePath) {
    const content = readFileSync(filePath, 'utf8');
    const regex = /(--[\w-]+)\s*:/g;
    const tokens = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
        tokens.push(match[1]);
    }
    return tokens;
}

function getThemeNames() {
    const files = readdirSync(THEMES_DIR).filter((f) => f.endsWith('.ts') && f !== 'index.ts');
    const themes = new Set();
    for (const file of files) {
        const m = file.match(/^(.+)__(dark|light)\.ts$/);
        if (m) themes.add(m[1]);
    }
    return [...themes];
}

function processTheme(themeName) {
    const variants = ['dark', 'light'];
    const results = [];
    const seen = new Set();

    for (const variant of variants) {
        const filePath = join(THEMES_DIR, `${themeName}__${variant}.ts`);
        let tokens;
        try {
            tokens = extractTokens(filePath);
        } catch {
            console.warn(`File not found: ${filePath}`);
            continue;
        }

        for (const token of tokens) {
            const parsed = parseToken(token, variant);
            if (!parsed) continue;
            if (seen.has(parsed.name)) continue;
            seen.add(parsed.name);
            results.push(parsed);
        }
    }

    return results;
}

// Ensure output directory exists
try {
    readdirSync(OUTPUT_DIR);
} catch {
    import('fs').then(({ mkdirSync }) => mkdirSync(OUTPUT_DIR, { recursive: true }));
}

const { mkdirSync } = await import('fs');
mkdirSync(OUTPUT_DIR, { recursive: true });

const themeNames = getThemeNames();
console.log(`Found ${themeNames.length} themes: ${themeNames.join(', ')}`);

for (const themeName of themeNames) {
    const tokens = processTheme(themeName);
    const outputPath = join(OUTPUT_DIR, `${themeName}.json`);
    writeFileSync(outputPath, JSON.stringify(tokens, null, 2), 'utf8');
    console.log(`${themeName}: ${tokens.length} tokens → ${outputPath}`);
}
