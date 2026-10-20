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
import { tokens } from './ColorSwatch.tokens';
import { base as viewCSS } from './variations/_view/base';

const sizeToken = tokens.colorSwatchSize;
const radiusToken = tokens.colorSwatchRadius;

export const colorSwatchRoot = (Root: RootProps<HTMLDivElement, ColorSwatchProps>) =>
    forwardRef<HTMLDivElement, ColorSwatchProps>((props, ref) => {
        // color/size/radius/withShadow — пропсы компонента, в DOM их отдавать нельзя.
        const { color, size, radius, withShadow, children, style, ...rest } = props;

        const rootStyle = {
            ...style,
            ...(size !== undefined && { [sizeToken]: size }),
            ...(radius !== undefined && { [radiusToken]: typeof radius === 'number' ? `${radius}px` : radius }),
        } as React.CSSProperties;

        return (
            // Root типизирован полным набором пропсов компонента, но в DOM уходят только HTML-атрибуты.
            <Root {...(rest as ColorSwatchProps)} style={rootStyle} ref={ref}>
                <ColorSwatchAlphaOverlay />
                {withShadow && <ColorSwatchShadowOverlay />}
                <ColorSwatchColorOverlay style={{ backgroundColor: color }} />
                <ColorSwatchChildrenOverlay>{children}</ColorSwatchChildrenOverlay>
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
