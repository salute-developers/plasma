import type { CSSProperties } from 'react';

export const getCorrectHeight = (listHeight: NonNullable<CSSProperties['height']>): string => {
    if (Number.isNaN(Number(listHeight))) {
        return listHeight.toString();
    }
    return `${listHeight}rem`;
};
