import { adjustedRadius, pxToRem as toRem } from '@sddsjs/design-system-builder-generator/web-mapping';

import type { PreviewGradientLayer, PreviewShadowLayer, PreviewTokenValue } from '../protocol';

export { toRem };

const HEX8 = /^#([0-9A-Fa-f]{6})([0-9A-Fa-f]{2})$/;

/**
 * Цвет протокола `#RRGGBBAA` в CSS. Без `alpha` значение уходит как есть (CSS понимает hex8). С `alpha` (0..1)
 * канал прозрачности цвета умножается на неё.
 */
export const toCssColor = (value: string, alpha?: number): string => {
    if (alpha === undefined) return value;
    const match = HEX8.exec(value);
    if (!match) return value;
    const channel = Math.round(parseInt(match[2], 16) * Math.min(1, Math.max(0, alpha)));
    return `#${match[1]}${channel.toString(16).padStart(2, '0').toUpperCase()}`;
};

/** Проценты позиции остановки градиента без хвостов плавающей точки (`0.0625` → `6.25%`). */
const percent = (position: number) => `${Number((position * 100).toFixed(4))}%`;

/** Слой тени → CSS (`0rem 0.25rem 0.875rem -0.25rem #08080814`), как хранятся web-значения тени ДС. */
export const shadowLayerToCss = (layer: PreviewShadowLayer) =>
    `${toRem(layer.x)} ${toRem(layer.y)} ${toRem(layer.blur)} ${toRem(layer.spread)} ${toCssColor(layer.color)}`;

/** Слои тени → `box-shadow`: слои через запятую, как `[themeValue].flat().join(', ')` прежнего `ShadowProp`. */
export const shadowToCss = (layers: PreviewShadowLayer[]) => layers.map(shadowLayerToCss).join(', ');

/** Слой градиента → `linear-gradient(<angle>deg, <color> <position>%, …)`. */
export const gradientLayerToCss = (layer: PreviewGradientLayer) =>
    `linear-gradient(${layer.angle}deg, ${layer.stops
        .map((stop) => `${toCssColor(stop.color)} ${percent(stop.position)}`)
        .join(', ')})`;

export const gradientToCss = (layers: PreviewGradientLayer[]) => layers.map(gradientLayerToCss).join(', ');

/** Радиусы формы → `border-radius`: одно значение, если углы равны, иначе четыре. */
export const cornerRadiiToCss = (radii: readonly number[]) =>
    radii.every((radius) => radius === radii[0]) ? toRem(radii[0]) : radii.map(toRem).join(' ');

/**
 * Скорректированная форма приходит производным токеном `<токен>@adjust(<поправка px>)` (так её передаёт ассемблер
 * клиента). Если исходный токен тоже в теме, значение пишется как у прежнего `ShapeProp`:
 * `calc(<радиус исходного> + <поправка / 16>rem)`.
 */
const ADJUSTED_TOKEN = /^(.+)@adjust\((-?\d+(?:\.\d+)?)\)$/;

export const parseAdjustedTokenId = (id: string) => {
    const match = ADJUSTED_TOKEN.exec(id);
    return match ? { baseId: match[1], adjustment: Number(match[2]) } : undefined;
};

type FontFamilyToken = Extract<PreviewTokenValue, { type: 'fontFamily' }>;

/** Имя семейства в `@font-face`: настоящее имя `family`, а без него — идентификатор токена. */
export const fontFaceName = (tokenId: string, token: FontFamilyToken) =>
    `"${(token.family ?? tokenId).replace(/["\\]/g, '')}"`;

/** Значение `font-family` с запасным семейством, как в сгенерированной теме. */
export const fontFamilyCss = (tokenId: string, token: FontFamilyToken) => `${fontFaceName(tokenId, token)}, sans-serif`;

export type ThemeTokens = Record<string, PreviewTokenValue>;

/**
 * CSS-значение токена темы, кроме типографики (она раскладывается по параметрам в `typography.ts`):
 * цвет, размер, форма, тень, градиент, семейство шрифта. `undefined` — у токена нет одного CSS-значения.
 */
export const tokenToCss = (
    tokenId: string,
    token: PreviewTokenValue,
    theme: ThemeTokens,
    alpha?: number,
): string | undefined => {
    switch (token.type) {
        case 'color':
            return toCssColor(token.value, alpha);
        case 'dimension':
            return toRem(token.value);
        case 'shape': {
            const adjusted = parseAdjustedTokenId(tokenId);
            const base = adjusted ? theme[adjusted.baseId] : undefined;
            if (adjusted && base?.type === 'shape') {
                return adjustedRadius(cornerRadiiToCss(base.cornerRadii), adjusted.adjustment);
            }
            return cornerRadiiToCss(token.cornerRadii);
        }
        case 'shadow':
            return shadowToCss(token.layers);
        case 'gradient':
            return gradientToCss(token.layers);
        case 'fontFamily':
            return fontFamilyCss(tokenId, token);
        default:
            return undefined;
    }
};
