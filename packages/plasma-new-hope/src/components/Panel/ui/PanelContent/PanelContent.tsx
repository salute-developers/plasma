import React, { forwardRef } from 'react';

import { RootProps } from '../../../../engines';

import { base as viewCSS } from './variations/_view/base';
import { PanelContentProps } from './PanelContent.types';

export const panelContentRoot = (Root: RootProps<HTMLDivElement, PanelContentProps>) =>
    forwardRef<HTMLDivElement, PanelContentProps>(({ children, view, ...rest }, outerRef) => {
        return (
            <Root ref={outerRef} view={view} {...rest}>
                {children}
            </Root>
        );
    });

export const panelContentConfig = {
    name: 'PanelContent',
    tag: 'div',
    layout: panelContentRoot,
    base: '',
    variations: {
        view: {
            css: viewCSS,
        },
    },
    defaults: {
        view: 'default',
    },
};
