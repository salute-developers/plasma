import React, { forwardRef } from 'react';
import cls from 'classnames';

import type { RootProps } from '../../engines';

import type { CardProps } from './Card.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base } from './Card.styles';

export const cardRoot = (Root: RootProps<HTMLDivElement, CardProps>) =>
    forwardRef<HTMLDivElement, CardProps>(
        (
            { view, size, selected, orientation, backgroundType = 'none', backgroundColor, style, children, ...rest },
            outerRef,
        ) => {
            return (
                <Root
                    ref={outerRef}
                    view={view}
                    size={size}
                    className={cls({
                        selected,
                        backgroundSolid: backgroundType === 'solid',
                        backgroundColor: backgroundType === 'color',
                        horizontal: orientation === 'horizontal',
                        vertical: orientation === 'vertical',
                    })}
                    style={style}
                    {...rest}
                >
                    {children}
                </Root>
            );
        },
    );

export const cardConfig = {
    name: 'Card',
    tag: 'div',
    layout: cardRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
    },
};
