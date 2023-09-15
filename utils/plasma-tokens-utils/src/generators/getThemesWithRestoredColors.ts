import type { ThemeNode } from '../types';

import { getRestoredColorFromPalette } from '.';

const updateThemeValues = (node?: ThemeNode) => {
    if (!node || typeof node !== 'object') {
        return node;
    }

    if (node.value) {
        return getRestoredColorFromPalette(node.value) || node.value;
    }

    for (const [key, newNode] of Object.entries(node)) {
        const newValue = updateThemeValues(newNode);

        if (node[key]?.value) {
            node[key].value = newValue;
        }
    }

    return node;
};

export const getThemesWithRestoredColors = (node?: ThemeNode) => {
    const deepClone = JSON.parse(JSON.stringify(node));
    return updateThemeValues(deepClone);
};
