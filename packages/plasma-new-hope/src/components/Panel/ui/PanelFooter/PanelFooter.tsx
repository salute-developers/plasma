import React, { forwardRef } from 'react';

import { RootProps } from '../../../../engines';

import { base as viewCSS } from './variations/_view/base';
import { PanelFooterProps } from './PanelFooter.types';

export const panelFooterRoot = (Root: RootProps<HTMLDivElement, PanelFooterProps>) =>
    forwardRef<HTMLDivElement, PanelFooterProps>(({ children, view, ...rest }, outerRef) => {
        return (
            <Root ref={outerRef} view={view} {...rest}>
                {children}
            </Root>
        );
    });

export const panelFooterConfig = {
    name: 'PanelFooter',
    tag: 'div',
    layout: panelFooterRoot,
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
