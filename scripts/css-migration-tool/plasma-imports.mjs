/**
 * Ensures `@salutejs/plasma-new-hope/styled-components` import when configs use
 * `css` or `*Tokens` or `${tokens.` (alias) — same rules as the old restore-plasma-*.mjs scripts.
 */
const tokenNameByComponent = {
    Autocomplete: 'autocompleteTokens',
    Avatar: 'avatarTokens',
    Combobox: 'comboboxNewTokens',
    DatePicker: 'datePickerTokens',
    DateTimePicker: 'dateTimePickerTokens',
    Link: 'linkTokens',
    NumberInput: 'numberInputTokens',
    Range: 'rangeTokens',
    Select: 'selectTokens',
    TextArea: 'textAreaTokens',
    TextField: 'textFieldTokens',
    TextFieldSlider: 'textFieldSliderTokens',
    Note: 'noteTokens',
};

function uniqSorted(arr) {
    return Array.from(new Set(arr)).sort((a, b) => a.localeCompare(b));
}

/** First path segment under src/components, e.g. Tabs/horizontal/foo -> Tabs */
export function componentRootFolderFromComponentsRel(relPosix) {
    const seg = relPosix.split('/')[0];
    return seg || '';
}

export function ensurePlasmaNewHopeStyledComponentsImport(source, componentRootFolder) {
    if (source.includes('@salutejs/plasma-new-hope/styled-components')) {
        return { out: source, changed: false };
    }

    if (source.includes('${tokens.')) {
        const tokenName = tokenNameByComponent[componentRootFolder];
        if (tokenName) {
            const importLine = `import { ${tokenName} as tokens, css } from '@salutejs/plasma-new-hope/styled-components';\n`;
            return { out: importLine + source, changed: true };
        }
    }

    const needsCss = /\bcss`/.test(source) || /\bcss\s*,/.test(source);
    const tokenIds = [];
    const tokenRe = /\b([a-z][A-Za-z0-9]*Tokens)\b/g;
    let m;
    while ((m = tokenRe.exec(source))) {
        if (m[1] === 'tokens') continue;
        tokenIds.push(m[1]);
    }

    const imports = uniqSorted(tokenIds);
    if (!needsCss && imports.length === 0) {
        return { out: source, changed: false };
    }

    const specifiers = [...imports];
    if (needsCss && !specifiers.includes('css')) specifiers.push('css');
    const finalSpec = uniqSorted(specifiers);

    const importLine = `import { ${finalSpec.join(', ')} } from '@salutejs/plasma-new-hope/styled-components';\n`;
    return { out: importLine + source, changed: true };
}
