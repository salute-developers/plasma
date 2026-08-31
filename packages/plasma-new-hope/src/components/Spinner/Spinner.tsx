import React, { forwardRef } from 'react';
import type { RootProps } from 'src/engines/types';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base } from './Spinner.styles';
import { tokens } from './Spinner.tokens';
import type { SpinnerProps } from './Spinner.types';
import { getCustomSize } from './utils';

export const spinnerRoot = (Root: RootProps<HTMLDivElement, SpinnerProps>) =>
    forwardRef<HTMLDivElement, SpinnerProps>((props, ref) => {
        const { size, width, height, color, style, ...rest } = props;

        // TODO: удалить вместе с пропами size-числом и color, размер и цвет
        // должны задаваться только вариациями size и view
        const customSize = getCustomSize(size);
        const customWidth = getCustomSize(width);
        const customHeight = getCustomSize(height);

        const customStyle: Record<string, string> = {};

        // width/height задают бокс напрямую, размер кольца считается от ширины
        if (customWidth && customHeight) {
            customStyle.width = customWidth;
            customStyle.height = customHeight;
            customStyle[tokens.size] = customWidth;
        } else if (customSize) {
            customStyle[tokens.size] = customSize;
        }

        if (color) {
            customStyle.color = color;
        }

        const rootStyle = { ...style, ...customStyle } as React.CSSProperties;

        return <Root ref={ref} size={customSize ? undefined : size} {...rest} style={rootStyle} />;
    });

export const spinnerConfig = {
    name: 'Spinner',
    tag: 'div',
    layout: spinnerRoot,
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
        size: 'm',
        view: 'accent',
    },
};
