import type { CSSProperties } from 'react';

export const getPanelZIndex = (zIndex: CSSProperties['zIndex']) => {
    const numericZIndex = Number(zIndex);

    return Number.isNaN(numericZIndex) ? zIndex : numericZIndex + 1;
};
