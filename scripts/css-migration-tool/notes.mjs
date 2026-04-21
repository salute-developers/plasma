const NOTE_LINE_PATTERNS = [
    /^\s*\/\/ NOTE: no token ([A-Za-z0-9_]+) in @salutejs\/sdds-themes\/tokens\s*$/gm,
    /^\s*\/\* NOTE: no token ([A-Za-z0-9_]+) in @salutejs\/sdds-themes\/tokens \*\/\s*$/gm,
];

export function uniqSorted(arr) {
    return Array.from(new Set(arr)).sort((a, b) => a.localeCompare(b));
}

export function collectMissingTokensFromPerLineNotes(source) {
    const out = [];
    for (const re of NOTE_LINE_PATTERNS) {
        let m;
        while ((m = re.exec(source))) out.push(m[1]);
    }
    return uniqSorted(out);
}

export function buildTopSummaryNoteBlock({
    missing,
    tokensImportSourceForAdvice,
    maxLen = 118,
} = {}) {
    if (!missing || missing.length === 0) return null;

    const header = ` * NOTE: Mixed DS tokens + raw vars. Prefer ${tokensImportSourceForAdvice} where possible.`;
    const prefix = ' * Missing tokens in @salutejs/sdds-themes/tokens: ';

    const lines = [header];
    let current = prefix;
    for (const t of missing) {
        const sep = current === prefix ? '' : ', ';
        if ((current + sep + t).length > maxLen) {
            lines.push(current.trimEnd());
            current = ` * ${t}`;
        } else {
            current += sep + t;
        }
    }
    lines.push(current.trimEnd());
    return ['/*', ...lines, ' */'].join('\n');
}

export function extractFirstBlockCommentBody(source) {
    const idx = source.indexOf('/*');
    if (idx === -1) return null;
    const end = source.indexOf('*/', idx + 2);
    if (end === -1) return null;
    return source.slice(idx + 2, end);
}

function parseTokenList(s) {
    return s
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean);
}

/**
 * Extract tokens from a NOTE block comment body (without comment delimiters).
 * Compatible with the MissingTokens summary NOTE format used in component configs.
 */
export function extractMissingTokensFromTopSummaryNoteBody(blockBodyText) {
    if (!blockBodyText) return [];
    const tokens = [];
    const lines = blockBodyText.split('\n');
    let foundHeader = false;

    for (const raw of lines) {
        const line = raw.replace(/^\s*\*?\s?/, '').trimEnd();
        const m = line.match(/^Missing tokens in @salutejs\/sdds-themes\/tokens:\s*(.*)$/);
        if (m) {
            foundHeader = true;
            tokens.push(...parseTokenList(m[1]));
        } else if (foundHeader && /^\*/.test(raw.trimStart())) {
            const rest = raw.replace(/^\s*\*\s?/, '').trim();
            if (!rest || rest === '*/') break;
            if (!rest.startsWith('NOTE:')) {
                tokens.push(...parseTokenList(rest));
            }
        }
    }

    return uniqSorted(tokens);
}

export function removeTopNoteBlocks(lines, maxScan = 160) {
    for (let i = 0; i < Math.min(maxScan, lines.length); i++) {
        if (!lines[i].includes('/*')) continue;
        let j = i;
        while (j < lines.length && !lines[j].includes('*/')) j++;
        if (j >= lines.length) continue;
        const blockText = lines.slice(i, j + 1).join('\n');
        if (blockText.includes('NOTE:')) {
            lines.splice(i, j - i + 1);
            i--;
        }
    }
}

export function findInsertAfterImports(lines, maxScan = 200) {
    let inImport = false;
    let lastImportEnd = 0;
    for (let i = 0; i < Math.min(maxScan, lines.length); i++) {
        const line = lines[i];
        if (!inImport && line.startsWith('import ')) {
            inImport = true;
        }
        if (inImport && /;\s*$/.test(line)) {
            inImport = false;
            lastImportEnd = i + 1;
        }
    }
    return lastImportEnd;
}

export function ensureSingleBlankAfterImports(lines) {
    const insertAt = findInsertAfterImports(lines);
    while (insertAt < lines.length && lines[insertAt].trim() === '') lines.splice(insertAt, 1);
    lines.splice(insertAt, 0, '');
}

export function upsertTopSummaryNoteBlock({
    lines,
    missing,
    tokensImportSourceForAdvice,
}) {
    const block = buildTopSummaryNoteBlock({ missing, tokensImportSourceForAdvice });
    if (!block) return false;

    removeDuplicateBlockClosers(lines);
    removeTopNoteBlocks(lines);
    removeDuplicateBlockClosers(lines);

    const insertAt = findInsertAfterImports(lines);
    while (insertAt < lines.length && lines[insertAt].trim() === '') lines.splice(insertAt, 1);
    lines.splice(insertAt, 0, '', ...block.split('\n'));
    return true;
}

export function removeDuplicateBlockClosers(lines) {
    for (let i = 1; i < lines.length; i++) {
        if (lines[i].trim() === '*/' && lines[i - 1].trim() === '*/') {
            lines.splice(i, 1);
            i--;
        }
    }
}

