import React, { forwardRef } from 'react';
import { css } from '@linaria/core';

import type { RootProps } from '../../engines/types';

import { base as viewCSS } from './_view/base';

const base = css`
    position: relative;
`;

export type ViewContainerCustomProps = {
    /**
     * Вид компонента
     */
    view?: string;
};

type ViewContainerProps = React.HTMLAttributes<HTMLDivElement> & ViewContainerCustomProps;

export const viewContainerRoot = (Root: RootProps<HTMLAnchorElement, ViewContainerProps>) =>
    forwardRef<HTMLAnchorElement, ViewContainerProps>((props, ref) => {
        const { children, ...rest } = props;

        return (
            <Root ref={ref} {...rest}>
                {children}
            </Root>
        );
    });

export const viewContainerConfig = {
    name: 'ViewContainer',
    tag: 'div',
    layout: viewContainerRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
    },
    defaults: {
        view: undefined,
    },
};
