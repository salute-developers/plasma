import type { CSSProperties } from 'react';

import { tokens } from '../Slider.tokens';

interface GetTickStyleParams {
    tick: number;
    min: number;
    max: number;
    isVertical: boolean;
    reversed: boolean;
    edgeOffset?: string;
}

export const getTickStyle = ({
    tick,
    min,
    max,
    isVertical,
    reversed,
    edgeOffset = `var(${tokens.tickSize})`,
}: GetTickStyleParams): CSSProperties => {
    const percent = ((tick - min) / (max - min)) * 100;

    if (isVertical) {
        const direction = reversed ? 'bottom' : 'top';

        if (tick === min) {
            return { [direction]: `calc(${percent}% + ${edgeOffset} / 2 )` };
        }

        if (tick === max) {
            return { [direction]: `calc(${percent}% - ${edgeOffset} / 2 )` };
        }

        return { [direction]: `${percent}%` };
    }

    if (tick === min) {
        return { left: `calc(${percent}% + ${edgeOffset} / 2 )` };
    }

    if (tick === max) {
        return { left: `calc(${percent}% - ${edgeOffset} / 2 )` };
    }

    return { left: `${percent}%` };
};
