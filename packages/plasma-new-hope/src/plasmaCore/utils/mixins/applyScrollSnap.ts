import { css, InterpolationFunction } from 'styled-components';

import type { SnapAlign, SnapStop } from '../types';

export interface ScrollSnapProps {
    scrollSnapAlign?: SnapAlign;
    scrollSnapStop?: SnapStop;
}

export const applyScrollSnap: InterpolationFunction<ScrollSnapProps> = ({ scrollSnapAlign, scrollSnapStop }) =>
    scrollSnapAlign &&
    css`
        scroll-snap-align: ${scrollSnapAlign};
        scroll-snap-stop: ${scrollSnapStop};
    `;
