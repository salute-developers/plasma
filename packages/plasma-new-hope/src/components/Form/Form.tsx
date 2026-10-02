import React, { forwardRef } from 'react';
import type { ReactElement, ReactNode } from 'react';
import cls from 'classnames';

import type { RootProps } from '../../engines';

import type { FormProps } from './Form.types';
import { base as sizeCSS } from './variations/_size/base';
import { base as orientationCSS } from './variations/_orientation/base';
import { base } from './Form.styles';
import { classes } from './Form.tokens';

const applySize = (children: ReactNode, size: FormProps['size']) =>
    React.Children.map(children, (child) => {
        if (!React.isValidElement(child) || typeof child.type === 'string' || child.type === React.Fragment) {
            return child;
        }

        return React.cloneElement(child as ReactElement<{ size?: FormProps['size'] }>, { size });
    });

export const formRoot = (Root: RootProps<HTMLFormElement, FormProps>) =>
    forwardRef<HTMLFormElement, FormProps>(
        ({ className, children, size = 'm', orientation = 'vertical', ...rest }, ref) => (
            <Root
                ref={ref}
                size={size}
                orientation={orientation}
                className={cls(className, classes[orientation])}
                {...rest}
            >
                {applySize(children, size)}
            </Root>
        ),
    );

export const formConfig = {
    name: 'Form',
    tag: 'form',
    layout: formRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
        orientation: {
            css: orientationCSS,
        },
    },
    defaults: {
        size: 'm',
        orientation: 'vertical',
    },
};
