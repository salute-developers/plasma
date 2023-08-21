import React from 'react';

import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { base as view } from './_view/base';
import { base as size } from './_size/base';
import { base as disabled } from './_disabled/base';
import { base as focused } from './_focused/base';

import { fontFamily } from './tokens';

import { ComponentConfig } from '../../engines';

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

    font-family: ${fontFamily};
    font-weight: var(--plasma-typo-button2-font-weight);
    font-style: var(--plasma-typo-button2-font-style);
    font-size: var(--plasma-typo-button2-font-size);
    letter-spacing: var(--plasma-typo-button2-letter-spacing);
    line-height: var(--plasma-typo-button2-line-height);
`;

const ButtonText = styled.span`
    :not(:last-child) {
        margin-right: 0.375rem;
    }

    :not(:first-child) {
        margin-left: 0.375rem;
    }
`;

export const buttonRoot = (Root: any) => (props: any) => {
    const { children, text, contentLeft, contentRight, ...rest } = props;
    const txt = typeof children === 'string' ? children : children ? undefined : text;

    const comp = (
        <Root {...rest}>
            {contentLeft}
            {txt ? <ButtonText>{txt}</ButtonText> : children}
            {contentRight}
        </Root>
    );

    return comp;
};

export const buttonConfig: ComponentConfig = {
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
        },
        focused: {
            css: focused,
        },
    },
    defaults: {
        view: 'secondary',
        size: 'm',
    },
};
