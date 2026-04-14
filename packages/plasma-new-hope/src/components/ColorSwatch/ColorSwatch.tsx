import React, { forwardRef } from 'react';

import { RootProps } from '../../engines';

import {
    base,
    ColorSwatchAlphaOverlay,
    ColorSwatchChildrenOverlay,
    ColorSwatchColorOverlay,
    ColorSwatchShadowOverlay,
} from './ColorSwatch.styles';
import { ColorSwatchProps } from './ColorSwatch.types';
import { base as viewCSS } from './variations/_view/base';

export const colorSwatchRoot = (Root: RootProps<HTMLDivElement, ColorSwatchProps>) =>
    forwardRef<HTMLDivElement, ColorSwatchProps>((props, ref) => {
        return (
            <Root {...props} ref={ref}>
                <ColorSwatchAlphaOverlay />
                {props.withShadow && <ColorSwatchShadowOverlay />}
                <ColorSwatchColorOverlay style={{ backgroundColor: props.color }} />
                <ColorSwatchChildrenOverlay>{props.children}</ColorSwatchChildrenOverlay>
            </Root>
        );
    });

export const colorSwatchConfig = {
    name: 'ColorSwatch',
    tag: 'div',
    layout: colorSwatchRoot,
    base,
    variations: {
        view: {
            default: viewCSS,
        },
    },
    defaults: {
        view: 'default',
    },
};
