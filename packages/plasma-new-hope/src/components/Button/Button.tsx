import React from 'react';

import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { base as view } from './_view/base';
import { base as size } from './_size/base';
import { base as disabled } from './_disabled/base';
import { base as focused } from './_focused/base';
import { base as square, yes } from './_square/base';

// import { fontFamily } from './tokens';

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
`;

const ButtonText = styled.span`
    :not(:last-child) {
        margin-right: 0.375rem;
    }

    :not(:first-child) {
        margin-left: 0.375rem;
    }
`;

// TODO: I dpn't like this code =/
// Could we do better ???
const LoadWrap = styled.div<{ isLoading: boolean}>`
    opacity: ${(props) => props.isLoading ? '0' : '1'};
    display: flex;
    width: 100%;
    align-items: inherit;
    justify-content: inherit;
`;

const Loader = styled.div`
    position: absolute;
`;

export const buttonRoot = (Root: any) => (props: any) => {
    const { children, text, contentLeft, contentRight, isLoading, ...rest } = props;
    // TODO: do we need to always wrap children into <ButtonText> ???
    const txt = typeof children === 'string' ? children : children ? undefined : text;

    const comp = (
        <Root {...rest}>
            <LoadWrap isLoading={isLoading}>
                {contentLeft}
                {txt ? <ButtonText>{txt}</ButtonText> : children}
                {contentRight}
            </LoadWrap>
            {isLoading && <Loader>♻️</Loader>}
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
            attrs: true
        },
        focused: {
            css: focused,
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
