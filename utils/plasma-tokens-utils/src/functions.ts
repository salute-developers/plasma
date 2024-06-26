import Color from 'color';

import type { TypographStyle } from './types';
import { escapeValue, getCSSVariableName } from './utils';

/**
 * Convert color to hex or rgba for alpha channel
 *
 * @param clr color string to convert
 */
export const humanizeColor = (clr: string) => {
    const color = Color(clr);
    const hue = Number(color.hue().toPrecision(3));
    const saturatione = Number(color.saturationl().toPrecision(3));
    const lightness = Number(color.lightness().toPrecision(3));
    const alpha = Number(color.alpha().toPrecision(3));
    const hslColor = Color.hsl(hue, saturatione, lightness, alpha);

    if (alpha === 1) {
        return hslColor.hex().toString();
    }
    return hslColor.rgb().toString();
};

export const getHEXAColor = (clr: string) => {
    try {
        return Color(clr).hexa().toString();
    } catch (error) {
        return clr;
    }
};

export const getHSLARawColor = (clr: string) => {
    try {
        const alpha = Math.round(Color(clr).hsl().alpha() * 100) / 100;
        const rounded = Number(alpha.toFixed(2));

        return Color(clr).hsl().alpha(rounded).round();
    } catch (error) {
        return Color('#FFFFFF');
    }
};

/**
 * Осветлить/затемнить на x процентных пунктов.
 */
export const lightenColor = (color: string, value: number) => {
    const hsl = Color(color).hsl();
    const res = hsl.lightness(hsl.lightness() + value);

    if (res.alpha() === 1) {
        return res.hex().toString();
    }
    return res.rgb().toString();
};

/**
 * Изменить непрозрачность цвета на x.
 */
export const alphenColor = (color: string, value: number, format: 'hexa' | 'rgba' = 'rgba', isRaw = false) => {
    const rgb = Color(color).rgb();
    const newColor = rgb.alpha(rgb.alpha() + value).toString();

    if (format === 'hexa' && isRaw) {
        return getHEXAColor(newColor);
    }

    if (format === 'hexa' && !isRaw) {
        return getHEXAColor(humanizeColor(newColor));
    }

    if (format === 'rgba' && isRaw) {
        return newColor;
    }

    return humanizeColor(newColor);
};

/**
 * Переведет пиксели в ремы.
 * @param {string} value
 * @param {number} basis По-умолчанию взято 16, потому что предполагается скалирование
 * на уровне тега html, кратное 16.
 * @return {string}
 */
const toRem = (value: string | number, basis = 16): string => {
    if (typeof value === 'string') {
        value = parseInt(value.replace(/\D+$/, ''), 10);
    }
    return `${value / basis}rem`;
};

/**
 * Преобразует название и значение токена в CSS Var.
 * @param {string} name
 * @param {string|number} value
 * @param {withDesignPrefix|undefined} withDesignPrefix
 * @return {string}
 */
export const toCSSVarTokenWithValue = (name: string, value: string | number, withDesignPrefix?: boolean) =>
    value
        ? `var(${getCSSVariableName(name, withDesignPrefix)}, ${escapeValue(value)})`
        : `var(${getCSSVariableName(name, withDesignPrefix)})`;

// ToDo: перенести в новый пакет, plasma-utils, где шарится код между всеми компонентами, токенами, утилитами
export const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1);

/**
 * Конвертация значений fontSize и lineHeight из пикселей в ремы.
 * @param {TypographStyle} style
 * @return {TypographStyle}
 */
export const convertPixelsToRems = (style: TypographStyle) => {
    if (style.fontSize.indexOf('px') !== -1) {
        style.fontSize = toRem(style.fontSize);
    }
    if (style.lineHeight && style.lineHeight.indexOf('px') !== -1) {
        style.lineHeight = toRem(style.lineHeight);
    }
    return style;
};

/**
 * Композиция функций.
 */
export const compose = (...fns: Array<(s: TypographStyle) => TypographStyle>) =>
    fns.reduceRight(
        (prevFn, nextFn) => (...args) => nextFn(prevFn(...args)),
        (value) => value,
    );

/**
 * Извлечение цвета и прозрачности из ссылочного токена.
 *  @example '[genera.red.500][-0.99]' => ['genera.red.500', '-0.99']
 *  @example '[genera.red.500]' => ['genera.red.500']
 */
export const extractColors = (value: string) => /\[(.*?)\](?:\[(.*?)\])?/g.exec(value) || [];
