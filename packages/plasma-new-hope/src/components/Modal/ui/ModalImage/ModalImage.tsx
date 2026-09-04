import React, { forwardRef } from 'react';

import { RootProps } from '../../../../engines';
import { cx } from '../../../../utils';
import { classes } from '../../Modal.tokens';

import { ModalImageProps } from './ModalImage.types';
import { base as viewCSS } from './variations/_view/base';

export const modalImageRoot = (Root: RootProps<HTMLDivElement, ModalImageProps>) =>
    forwardRef<HTMLDivElement, ModalImageProps>(({ children, view, className, ...rest }, outerRef) => {
        return (
            <Root ref={outerRef} view={view} className={cx(className, classes.image)} {...rest}>
                {children}
            </Root>
        );
    });

export const modalImageConfig = {
    name: 'ModalImage',
    tag: 'div',
    layout: modalImageRoot,
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
