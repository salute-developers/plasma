import React, { forwardRef } from 'react';
import cls from 'classnames';

import type { RootProps } from '../../engines';

import type { CardProps } from './Card.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base } from './Card.styles';
import { classes } from './Card.tokens';

export const cardRoot = (Root: RootProps<HTMLDivElement, CardProps>) =>
    forwardRef<HTMLDivElement, CardProps>(
        (
            { className, view, size, selected, orientation, backgroundType = 'none', style, children, ...rest },
            outerRef,
        ) => {
            return (
                <Root
                    ref={outerRef}
                    view={view}
                    size={size}
                    className={cls(className, {
                        [classes.selected]: selected,
                        [classes.backgroundSolid]: backgroundType === 'solid',
                        [classes.horizontal]: orientation === 'horizontal',
                        [classes.vertical]: orientation === 'vertical',
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
