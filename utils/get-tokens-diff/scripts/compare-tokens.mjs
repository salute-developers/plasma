import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const EXISTED_PATH = join(__dirname, '../from-plugin/sdds_finai.json');
const GENERATED_PATH = join(__dirname, '../from-themes/sdds_finai.json');
const OUTPUT_PATH = join(__dirname, '../diff/sdds_finai.json');

const existed = JSON.parse(readFileSync(EXISTED_PATH, 'utf8'));
const generated = JSON.parse(readFileSync(GENERATED_PATH, 'utf8'));

// Build sets/indexes from generated tokens
const genNames = new Set(generated.map((t) => t.name));

// Index by prefix → list of tokens
const genByPrefix = {};
for (const t of generated) {
    const slash = t.name.indexOf('/');
    const prefix = t.name.slice(0, slash + 1);
    if (!genByPrefix[prefix]) genByPrefix[prefix] = [];
    genByPrefix[prefix].push(t.name);
}

// Index by normalized (prefix + lowercase camelCase) for exact-ignoring-case lookup
const genByNorm = {};
for (const t of generated) {
    const slash = t.name.indexOf('/');
    const prefix = t.name.slice(0, slash + 1);
    const camel = t.name.slice(slash + 1);
    const norm = prefix + camel.toLowerCase();
    genByNorm[norm] = t.name;
}

// Split camelCase into a word set (lowercase)
function wordSet(str) {
    return new Set(str.replace(/([A-Z])/g, ' $1').trim().toLowerCase().split(/\s+/));
}

// Find best matching generated token for a stripped name
function findCorrect(stripped) {
    const slash = stripped.indexOf('/');
    const prefix = stripped.slice(0, slash + 1);
    const camel = stripped.slice(slash + 1);

    // 1. Exact lowercase-normalized match (handles only capitalization differences)
    const norm = prefix + camel.toLowerCase();
    if (genByNorm[norm]) return genByNorm[norm];

    // 2. Word-set match within the same prefix
    const candidates = genByPrefix[prefix] || [];
    const wrongWords = wordSet(camel);

    const wordMatches = candidates.filter((name) => {
        const c = wordSet(name.slice(name.indexOf('/') + 1));
        return c.size === wrongWords.size && [...wrongWords].every((w) => c.has(w));
    });

    if (wordMatches.length === 1) return wordMatches[0];

    // 3. Among multiple word-set matches, prefer closest string length
    if (wordMatches.length > 1) {
        return wordMatches.reduce((best, name) => {
            const bLen = Math.abs(best.length - stripped.length);
            const nLen = Math.abs(name.length - stripped.length);
            return nLen < bLen ? name : best;
        });
    }

    return null;
}

// Process all localStyles
const results = [];

for (const style of existed.localStyles) {
    const initialName = style.initialName;
    if (!initialName) continue;

    const parts = initialName.split('/');
    if (parts.length < 3) continue; // no middle segment to strip

    // Strip middle segment: keep first and last parts
    const stripped = parts[0] + '/' + parts[parts.length - 1];

    // If stripped name already exists in generated → names match, skip
    if (genNames.has(stripped)) continue;

    const correct = findCorrect(stripped);
    results.push({ wrong: initialName, correct });
}

writeFileSync(OUTPUT_PATH, JSON.stringify(results, null, 2), 'utf8');
console.log(`Found ${results.length} mismatches → ${OUTPUT_PATH}`);

const noCorrect = results.filter((r) => r.correct === null).length;
if (noCorrect > 0) {
    console.log(`  ${noCorrect} entries have no match in generated (correct: null)`);
}
