import React, { forwardRef } from 'react';

import { RootProps } from '../../engines';
import { cx } from '../../utils';

import type { AccordionProps } from './Accordion.types';
import { base } from './Accordion.styles';
import { classes } from './Accordion.tokens';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';

export const accordionRoot = (Root: RootProps<HTMLDivElement, AccordionProps>) =>
    forwardRef<HTMLDivElement, AccordionProps>(
        ({ size, view, stretching = 'filled', children, className }, outerRootRef) => {
            const stretchingClass = classes[`${stretching}Stretching` as keyof typeof classes];

            return (
                <Root
                    ref={outerRootRef}
                    size={size}
                    view={view}
                    className={cx(stretchingClass, classes.accordionRoot, className)}
                >
                    {children}
                </Root>
            );
        },
    );

export const accordionConfig = {
    name: 'Accordion',
    tag: 'div',
    layout: accordionRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
    },
};
