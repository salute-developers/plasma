import React, { forwardRef } from 'react';
import cls from 'classnames';

import type { RootProps } from '../../engines';

import type { FormProps } from './Form.types';
import { base as orientationCSS } from './variations/_orientation/base';
import { base } from './Form.styles';
import { classes } from './Form.tokens';

export const formRoot = (Root: RootProps<HTMLFormElement, FormProps>) =>
    forwardRef<HTMLFormElement, FormProps>(({ className, children, orientation = 'vertical', ...rest }, ref) => (
        <Root ref={ref} orientation={orientation} className={cls(className, classes[orientation])} {...rest}>
            {children}
        </Root>
    ));

export const formConfig = {
    name: 'Form',
    tag: 'form',
    layout: formRoot,
    base,
    variations: {
        orientation: {
            css: orientationCSS,
        },
    },
    defaults: {
        orientation: 'vertical',
    },
};
