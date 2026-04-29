import type { CSSProperties } from 'react';

import type { SingleSliderProps, DoubleSliderProps } from './components';

export type SliderProps = SingleSliderProps | DoubleSliderProps;
export type SliderRootProps = {
    view?: string;
    size?: string;
    disabled?: boolean;
    className?: string;
    style?: CSSProperties;
};
