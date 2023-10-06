import React, { forwardRef, PropsWithChildren, useRef, useContext, useEffect } from 'react';
import { css } from '@linaria/core';
import { useForkRef } from '@salutejs/plasma-core';

import { ComponentConfig } from '../../engines';

import { TabsContext } from './TabsContext';
import { base as active } from './TabItem/_active/base';
import { base as disabled } from './TabItem/_disabled/base';

const base = css`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    border: 0 none;
    background: none;
    letter-spacing: inherit;
    text-align: center;
    padding: 1rem 1.313rem;
    height: 3.75rem;
    box-shadow: inset 0 calc(var(--plasma-tabs-underline-height) * -1) 0 var(--plasma-tabs-underline-color);
    font-weight: var(--plasma-tabs-font-weight);
    color: var(--plasma-tabs-color);
    flex: 1 1 calc((100% / 4) - 0.125rem);
    transition: color 0.1s ease-in-out, box-shadow 0.3s ease-in-out;

    :hover {
        color: var(--plasma-tabs-hover-color);
    }
`;

export interface TabItemProps extends PropsWithChildren {
    isActive?: boolean;
    disabled?: boolean;
}

export const tabItemRoot = (Root: any) =>
    forwardRef<HTMLButtonElement, TabItemProps>((props, outerRef) => {
        const { children, isActive, disabled, ...rest } = props;

        const innerRef = useRef<HTMLButtonElement>(null);
        const ref = useForkRef(outerRef, innerRef);
        const refs = useContext(TabsContext);

        const role = 'tab';

        useEffect(() => {
            if (!refs) {
                return;
            }

            refs.register(innerRef);

            return () => refs.unregister(innerRef);
        }, [refs]);

        return (
            <Root ref={ref} active={isActive} disabled={disabled} role={role} {...rest}>
                {children}
            </Root>
        );
    });

export const tabItemConfig: ComponentConfig = {
    name: 'TabItem',
    tag: 'div',
    layout: tabItemRoot,
    base,
    variations: {
        disabled: {
            css: disabled,
            attrs: true,
        },
        active: {
            css: active,
        },
    },
    defaults: {
        view: 'default',
    },
};
