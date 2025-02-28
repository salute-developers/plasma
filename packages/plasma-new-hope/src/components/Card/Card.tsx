import React, { forwardRef } from 'react';
import cls from 'classnames';

import type { RootProps } from '../../engines';

import type { CardProps } from './Card.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base, Image, Inner, InnerContent } from './Card.styles';

export const CardImage: React.FC<{
    aspectRatio?: string;
    orientation: 'vertical' | 'horizontal';
    image?: React.ReactNode;
    children?: React.ReactNode;
}> = ({ aspectRatio, orientation, image, children }) => {
    return (
        <Inner style={{ aspectRatio }}>
            <InnerContent
                className={cls({
                    horizontal: orientation === 'horizontal',
                    vertical: orientation === 'vertical',
                })}
            >
                {children}
            </InnerContent>
            {image && <Image>{image}</Image>}
        </Inner>
    );
};

export const cardRoot = (Root: RootProps<HTMLDivElement, CardProps>) =>
    forwardRef<HTMLDivElement, CardProps>(
        ({ view, size, selected, orientation, backgroundType, style, children, ...rest }, outerRef) => {
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
