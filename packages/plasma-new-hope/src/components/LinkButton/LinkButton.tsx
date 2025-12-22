import React, { forwardRef } from 'react';

import type { RootProps } from '../../engines';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as disabledCSS } from './variations/_disabled/base';
import type { LinkButtonProps } from './LinkButton.types';
import {
    base,
    LinkButtonText,
    Loader,
    LoadWrap,
    StyledAdditionalContent,
    StyledContentLeft,
    StyledContentRight,
    StyledSpinner,
} from './LinkButton.styles';

export const linkButtonRoot = (Root: RootProps<HTMLAnchorElement, LinkButtonProps>) =>
    forwardRef<HTMLAnchorElement, LinkButtonProps>((props, ref) => {
        const {
            children,
            view,
            size,
            text,
            contentLeft,
            contentRight,
            isLoading,
            loader,
            disabled,
            target,
            href,
            rel,
            style,
            additionalContent,
            ...rest
        } = props;

        const txt = typeof children === 'string' ? children : text;

        const loadingCustomOpacity = isLoading && size === 'xxs' && { opacity: 0 };

        const linkProps = {
            target,
            href: disabled ? undefined : href,
            rel: target === '_blank' ? 'noopener noreferrer' : rel,
        };

        const hasContent = Boolean(txt || children || additionalContent || contentRight);

        return (
            <Root
                ref={ref}
                view={view}
                size={size}
                tabIndex={!disabled ? 0 : -1}
                disabled={disabled}
                style={{
                    ...(isLoading && {
                        pointerEvents: 'none',
                    }),
                    ...style,
                }}
                {...linkProps}
                {...rest}
            >
                <LoadWrap isLoading={!disabled && isLoading} style={{ ...loadingCustomOpacity }}>
                    {contentLeft && <StyledContentLeft hasContent={hasContent}>{contentLeft}</StyledContentLeft>}
                    {txt ? <LinkButtonText>{txt}</LinkButtonText> : children}
                    {additionalContent && <StyledAdditionalContent>{additionalContent}</StyledAdditionalContent>}
                    {contentRight && <StyledContentRight hasContent={hasContent}>{contentRight}</StyledContentRight>}
                </LoadWrap>
                {!disabled && isLoading && <Loader>{loader || <StyledSpinner />}</Loader>}
            </Root>
        );
    });

export const linkButtonConfig = {
    name: 'LinkButton',
    tag: 'a',
    layout: linkButtonRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
        disabled: {
            css: disabledCSS,
            attrs: true,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
    },
};
