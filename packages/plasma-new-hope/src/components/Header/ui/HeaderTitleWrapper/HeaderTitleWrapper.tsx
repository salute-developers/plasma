import React, { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';

import type { RootProps } from '../../../../engines';

import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import type { HeaderTitleWrapperProps } from './HeaderTitleWrapper.types';
import { BigTitle, Caption, Label, SubTitle, TextBoxRoot, Title } from './HeaderTitleWrapper.styles';

/**
 * Компонент для отображения текста в скомпанованном блоке.
 */
export const headerTitleWrapperRoot = (Root: RootProps<HTMLDivElement, HTMLAttributes<HTMLDivElement>>) =>
    forwardRef<HTMLDivElement, HeaderTitleWrapperProps>((props, outerRootRef) => {
        const { label, title, subTitle, caption, withBigTitle, children, ...rest } = props;

        if (children) {
            return (
                <Root ref={outerRootRef}>
                    <TextBoxRoot {...rest}>{children}</TextBoxRoot>
                </Root>
            );
        }

        const T = withBigTitle ? BigTitle : Title;

        return (
            <Root ref={outerRootRef}>
                <TextBoxRoot {...rest}>
                    {label && <Label>{label}</Label>}
                    {title && <T>{title}</T>}
                    {subTitle && <SubTitle>{subTitle}</SubTitle>}
                    {caption && <Caption>{caption}</Caption>}
                </TextBoxRoot>
            </Root>
        );
    });

export const headerTitleWrapperConfig = {
    name: 'HeaderTitleWrapper',
    tag: 'div',
    layout: headerTitleWrapperRoot,
    base: '',
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        view: 'primary',
        size: 'm',
    },
};
