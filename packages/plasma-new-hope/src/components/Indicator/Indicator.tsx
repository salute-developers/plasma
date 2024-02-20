import React, { forwardRef } from 'react';

import { RootProps } from '../../engines';

import { base } from './Indicator.styles';
import { IndicatorProps } from './Indicator.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';

export const indicatorRoot = (Root: RootProps<HTMLDivElement, IndicatorProps>) => {
    return forwardRef<HTMLDivElement, IndicatorProps>((props, ref) => {
        const { size, view, ...rest } = props;

        return <Root ref={ref} size={size} view={view} {...rest} />;
    });
};

export const indicatorConfig = {
    name: 'Indicator',
    tag: 'div',
    layout: indicatorRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
        view: {
            css: viewCSS,
        },
    },
    defaults: {
        size: 's',
        view: 'default',
    },
};
