import React, { forwardRef } from 'react';

import { cx } from '../../../../utils';
import { RootProps } from '../../../../engines';
import { classes } from '../../Modal.tokens';

import { ModalHeaderProps } from './ModalHeader.types';
import { base as viewCSS } from './variations/_view/base';

export const modalHeaderRoot = (Root: RootProps<HTMLDivElement, ModalHeaderProps>) =>
    forwardRef<HTMLDivElement, ModalHeaderProps>(({ children, view, className, absolute, ...rest }, outerRef) => {
        return (
            <Root
                ref={outerRef}
                view={view}
                className={cx(className, classes.header, absolute && classes.headerAbsolute)}
                {...rest}
            >
                {children}
            </Root>
        );
    });

export const modalHeaderConfig = {
    name: 'ModalHeader',
    tag: 'div',
    layout: modalHeaderRoot,
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
