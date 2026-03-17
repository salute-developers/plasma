import React, { forwardRef } from 'react';
import type { RootProps } from 'src/engines';

import type { ContainerProps, ContainerRootProps } from './Container.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base, HeaderWrapper, ContentWrapper, FooterWrapper, FooterCaption, InputWrapper } from './Container.styles';

export const aiContainerRoot = (Root: RootProps<HTMLDivElement, ContainerRootProps>) =>
    forwardRef<HTMLDivElement, ContainerProps>(
        ({ header, content, contentRef, footer, footerCaption, footerCaptionAlign, size, view, ...rest }, ref) => {
            return (
                <Root ref={ref} view={view} size={size} {...rest}>
                    {header && <HeaderWrapper>{header}</HeaderWrapper>}
                    {content && <ContentWrapper ref={contentRef}>{content}</ContentWrapper>}
                    {footer && (
                        <FooterWrapper>
                            {footer && <InputWrapper>{footer}</InputWrapper>}
                            {footerCaption && (
                                <FooterCaption captionAlign={footerCaptionAlign}>{footerCaption}</FooterCaption>
                            )}
                        </FooterWrapper>
                    )}
                </Root>
            );
        },
    );

export const aiContainerConfig = {
    name: 'Container',
    tag: 'div',
    layout: aiContainerRoot,
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
