import type { TypographyPart } from '@sddsjs/design-system-builder-generator/web-mapping';

import type { PreviewTokenValue } from '../protocol';

import { fontFamilyCss, toRem } from './tokens';
import type { ThemeTokens } from './tokens';

export { TYPOGRAPHY_PARTS, typographyPartFor } from '@sddsjs/design-system-builder-generator/web-mapping';
export type { TypographyPart } from '@sddsjs/design-system-builder-generator/web-mapping';

export type TypographyValues = Partial<Record<TypographyPart, string>>;

type TypographyToken = Extract<PreviewTokenValue, { type: 'typography' }>;

/** px → `em` от размера шрифта, с округлением до 4 знаков. */
const letterSpacingEm = (px: number, fontSize: number) =>
    px === 0 || !fontSize ? 'normal' : `${Math.round((px / fontSize) * 10000) / 10000}em`;

/**
 * Токен `typography` → значения параметров типографики ядра в CSS:
 * - `fontFamily` — семейство токена `fontFamilyTokenId` (если он есть в теме);
 * - `fontSize`, `lineHeight` — px → `rem`;
 * - `fontWeight` — число строкой;
 * - `fontStyle` — `normal`/`italic`, только если задан в токене (у прежнего клиента параметр без значения не писался);
 * - `letterSpacing` — протокол передаёт px, в CSS — доля размера шрифта в `em` (`-0.32` при `16` → `-0.02em`),
 *   как хранятся web-значения ДС; `0` → `normal`.
 */
export const typographyValues = (token: TypographyToken, theme: ThemeTokens): TypographyValues => {
    const family = theme[token.fontFamilyTokenId];
    return {
        ...(family?.type === 'fontFamily' ? { fontFamily: fontFamilyCss(token.fontFamilyTokenId, family) } : {}),
        fontWeight: String(token.weight),
        ...(token.fontStyle ? { fontStyle: token.fontStyle.toLowerCase() } : {}),
        fontSize: toRem(token.fontSize),
        lineHeight: toRem(token.lineHeight),
        letterSpacing: letterSpacingEm(token.letterSpacing, token.fontSize),
    };
};
