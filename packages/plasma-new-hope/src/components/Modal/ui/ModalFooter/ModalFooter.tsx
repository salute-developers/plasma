import React, { forwardRef } from 'react';

import { RootProps } from '../../../../engines';
import { cx } from '../../../../utils';
import { classes } from '../../Modal.tokens';

import { ModalFooterProps } from './ModalFooter.types';
import { base as viewCSS } from './variations/_view/base';

export const modalFooterRoot = (Root: RootProps<HTMLDivElement, ModalFooterProps>) =>
    forwardRef<HTMLDivElement, ModalFooterProps>(({ children, view, className, ...rest }, outerRef) => {
        return (
            <Root ref={outerRef} view={view} className={cx(className, classes.footer)} {...rest}>
                {children}
            </Root>
        );
    });

export const modalFooterConfig = {
    name: 'ModalFooter',
    tag: 'div',
    layout: modalFooterRoot,
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
