import React, { forwardRef, PropsWithChildren, useRef, useContext, useEffect } from 'react';
import { css } from '@linaria/core';
import { useForkRef } from '@salutejs/plasma-core';

import { ComponentConfig, RootProps } from '../../engines';

import { TabsContext } from './TabsContext';
import { base as view } from './TabItem/variations/_view/base';

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
    flex: 1 1 calc((100% / 4) - 0.125rem);
    transition: color 0.1s ease-in-out, box-shadow 0.3s ease-in-out;
`;

export interface TabItemProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
    active?: boolean;
    disabled?: boolean;
}

export const tabItemRoot = (Root: RootProps<HTMLDivElement, TabItemProps>) =>
    forwardRef<HTMLDivElement, TabItemProps>((props, outerRef) => {
        const { children, active, disabled, ...rest } = props;

        const innerRef = useRef<HTMLDivElement>(null);
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
            <Root ref={ref} active={active} disabled={disabled} role={role} {...rest}>
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
        view: {
            css: view,
        },
    },
    defaults: {
        view: 'default',
    },
};
