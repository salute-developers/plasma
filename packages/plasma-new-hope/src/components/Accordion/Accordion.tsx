import React, { Children, forwardRef, useMemo, useState } from 'react';

import { RootProps } from '../../engines';
import { cx } from '../../utils';

import type { AccordionProps } from './Accordion.types';
import { base } from './Accordion.styles';
import { classes } from './Accordion.tokens';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { getChildren } from './utils';

export const accordionRoot = (Root: RootProps<HTMLDivElement, AccordionProps>) =>
    forwardRef<HTMLDivElement, AccordionProps>(
        ({ size, view, stretching = 'filled', children, className, once }, outerRootRef) => {
            const stretchingClass = classes[`${stretching}Stretching` as keyof typeof classes];

            const [activeIndex, setActiveIndex] = useState<number | undefined>();

            const updateValue = (index?: number, value?: boolean) => {
                value && setActiveIndex(index);
            };

            const childrenArray = useMemo(() => Children.toArray(children), [children]) as React.ReactElement[];

            const childrenMemo = useMemo(() => getChildren(childrenArray, activeIndex, updateValue), [
                activeIndex,
                updateValue,
                childrenArray,
            ]);

            return (
                <Root
                    ref={outerRootRef}
                    size={size}
                    view={view}
                    className={cx(stretchingClass, classes.accordionRoot, className)}
                >
                    {once ? childrenMemo : children}
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
