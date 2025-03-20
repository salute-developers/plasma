import { CSSProperties } from 'react';

const DEFAULT_HEIGHT = 320;

// Утилита на вход получает высоту в формате CSSProperties, и возвращает цифру в пикселях
export const getHeightAsNumber = (height: CSSProperties['height']): number => {
    if (!height) return DEFAULT_HEIGHT;

    if (typeof height === 'number') return height;

    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

    if (height.endsWith('rem')) {
        const remValue = parseFloat(height);
        return remValue * rootFontSize;
    }

    if (height.endsWith('px')) {
        return parseFloat(height);
    }

    return DEFAULT_HEIGHT;
};
