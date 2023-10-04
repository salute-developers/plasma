import React, { ButtonHTMLAttributes, forwardRef, PropsWithChildren, ReactNode } from 'react';
import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { RootProps } from '../../engines';
import { applyEllipsis } from '../../mixins';

import { base as view } from './_view/base';
import { base as size } from './_size/base';
import { base as disabled } from './_disabled/base';
import { base as focused } from './_focused/base';
import { base as square, yes } from './_square/base';

const base = css`
    position: relative;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;

    appearance: none;
    border: none;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

// TODO: PLASMA-2164
// WHY do we need applyEllipsis ??
const ButtonText = styled.span`
    :not(:last-child) {
        margin-right: 0.375rem;
    }

    :not(:first-child) {
        margin-left: 0.375rem;
    }

    ${applyEllipsis()}
`;

// TODO: #720
const LoadWrap = styled.div<{ isLoading?: boolean }>`
    opacity: ${(props) => (props.isLoading ? '0' : '1')};
    display: flex;
    width: 100%;
    align-items: inherit;
    justify-content: inherit;
`;

const Loader = styled.div`
    position: absolute;
`;

export type ButtonProps = {
    text?: string;
    contentLeft?: ReactNode;
    contentRight?: ReactNode;

    isLoading?: boolean;
    loader?: ReactNode;
} & PropsWithChildren &
    ButtonHTMLAttributes<HTMLButtonElement>;

export const buttonRoot = (Root: RootProps<HTMLButtonElement, ButtonProps>) =>
    forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
        const { children, text, contentLeft, contentRight, isLoading, loader, ...rest } = props;
        // eslint-disable-next-line no-nested-ternary
        const txt = typeof children === 'string' ? children : children ? undefined : text;

        return (
            <Root
                type="button"
                ref={ref}
                contentLeft={Boolean(contentLeft)}
                contentRight={Boolean(contentRight)}
                {...rest}
            >
                <LoadWrap isLoading={isLoading}>
                    {contentLeft}
                    {txt ? <ButtonText>{txt}</ButtonText> : children}
                    {contentRight}
                </LoadWrap>
                {isLoading && <Loader>{loader || '♻️'}</Loader>}
            </Root>
        );
    });

export const buttonConfig = {
    name: 'Button',
    tag: 'button',
    layout: buttonRoot,
    base,
    variations: {
        view: {
            css: view,
        },
        size: {
            css: size,
        },
        disabled: {
            css: disabled,
            attrs: true,
        },
        focused: {
            css: focused,
            // TODO: isLoading => disabled
        },
        square: {
            css: square,
            true: yes,
        },
    },
    defaults: {
        view: 'secondary',
        size: 'm',
    },
};
