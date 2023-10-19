import React, { forwardRef, PropsWithChildren } from 'react';
import { css } from '@linaria/core';

import { ComponentConfig, RootProps } from '../../engines';

import { base as disabled } from './Tabs/_disabled/base';
import { base as stretch } from './Tabs/_stretch/base';

const base = css`
    position: relative;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    flex-wrap: nowrap;
    justify-content: stretch;
    padding: 0;
    margin: 0;
    list-style-type: none;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export interface TabsProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
    disabled?: boolean;
    stretch?: boolean;
}

export const tabsRoot = (Root: RootProps<HTMLDivElement, TabsProps>) =>
    forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
        const { children, role = 'tablist', stretch, disabled, ...rest } = props;
        return (
            <Root disabled={disabled} ref={ref} stretch={stretch} role={role} {...rest}>
                {children}
            </Root>
        );
    });

export const tabsConfig: ComponentConfig = {
    name: 'Tabs',
    tag: 'div',
    layout: tabsRoot,
    base,
    variations: {
        stretch: {
            css: stretch,
        },
        disabled: {
            css: disabled,
            attrs: true,
        },
    },
    defaults: {
        view: 'default',
    },
};
