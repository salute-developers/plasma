import type { CSSProperties } from 'react';

import { privateTokens } from './TabBar.tokens';

export const isFixedWeight = (weight: number) => !(weight > 0);

export const getWeightStyle = (weight: number, style?: CSSProperties): CSSProperties | undefined => {
    if (isFixedWeight(weight)) {
        return style;
    }

    return {
        ...style,
        [privateTokens.itemWeight]: weight,
    } as CSSProperties;
};
