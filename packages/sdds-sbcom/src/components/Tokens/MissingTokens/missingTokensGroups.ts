/**
 * Buckets missing token names (from config NOTEs) into the same top-level families
 * as Tokens/Colors (Text, Background, Surface, …) plus Typography.
 */

export type MissingTokenGroupId =
    | 'text'
    | 'background'
    | 'surface'
    | 'overlay'
    | 'outline'
    | 'data'
    | 'persona'
    | 'typography'
    | 'other';

export const MISSING_TOKEN_GROUPS: { id: MissingTokenGroupId; label: string; description?: string }[] = [
    {
        id: 'text',
        label: 'Text',
        description: 'Semantic text colors (e.g. text, textAccent*).',
    },
    {
        id: 'background',
        label: 'Background',
        description: 'Background-related tokens.',
    },
    { id: 'surface', label: 'Surface', description: 'Surface fills and states.' },
    { id: 'overlay', label: 'Overlay', description: 'Overlays (blur, scrim, …).' },
    { id: 'outline', label: 'Outline', description: 'Outline / stroke tokens.' },
    { id: 'data', label: 'Data', description: 'Data visualization tokens.' },
    { id: 'persona', label: 'Persona', description: 'Persona-specific tokens.' },
    {
        id: 'typography',
        label: 'Typography',
        description: 'Body, heading, display, and text-style scales (body*, h*, dspl*, textL/M/S/Xs*).',
    },
    { id: 'other', label: 'Other', description: 'Everything that did not match the rules above.' },
];

const TEXT_COLOR_PREFIXES = ['textAccent', 'textPrimary', 'textSecondary', 'inverseText', 'onDarkText', 'onLightText'];

/** Typography: textL / textM / textS / textXs scales (not semantic text colors). */
const TEXT_SCALE_RE = /^text(L|M|S|Xs)(Bold|Medium)?$/;

function isTextColorToken(name: string): boolean {
    if (name === 'text') return true;
    return TEXT_COLOR_PREFIXES.some((p) => name.startsWith(p));
}

function isTypographyToken(name: string): boolean {
    if (name.startsWith('body')) return true;
    if (/^h\d/.test(name)) return true;
    if (/^dspl/.test(name)) return true;
    if (TEXT_SCALE_RE.test(name)) return true;
    return false;
}

export function getMissingTokenGroup(name: string): MissingTokenGroupId {
    if (name.startsWith('surface')) return 'surface';
    if (name.startsWith('overlay')) return 'overlay';
    if (name.startsWith('outline')) return 'outline';
    if (name.startsWith('background')) return 'background';
    if (name.startsWith('data')) return 'data';
    if (name.startsWith('persona')) return 'persona';

    if (isTextColorToken(name)) return 'text';
    if (isTypographyToken(name)) return 'typography';

    return 'other';
}

export type TypographySubId = 'display' | 'heading' | 'body' | 'textStyle' | 'other';

export function getTypographySubsection(name: string): TypographySubId {
    if (/^dspl/.test(name)) return 'display';
    if (/^h\d/.test(name)) return 'heading';
    if (/^body/.test(name)) return 'body';
    if (TEXT_SCALE_RE.test(name)) return 'textStyle';
    return 'other';
}

const TYPO_SUB_ORDER: TypographySubId[] = ['display', 'heading', 'body', 'textStyle', 'other'];

const TYPO_SUB_LABELS: Record<TypographySubId, string> = {
    display: 'Display (dspl*)',
    heading: 'Heading (h*)',
    body: 'Body (body*)',
    textStyle: 'Text style (textL / textM / textS / textXs)',
    other: 'Other',
};

export function compareTypographySub(a: string, b: string): number {
    const sa = getTypographySubsection(a);
    const sb = getTypographySubsection(b);
    const ia = TYPO_SUB_ORDER.indexOf(sa);
    const ib = TYPO_SUB_ORDER.indexOf(sb);
    if (ia !== ib) return ia - ib;
    return a.localeCompare(b);
}

export function typographySubsectionLabel(id: TypographySubId): string {
    return TYPO_SUB_LABELS[id];
}
