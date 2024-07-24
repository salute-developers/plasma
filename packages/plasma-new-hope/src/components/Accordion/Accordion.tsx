import React, { Children, forwardRef, useState } from 'react';

import { RootPropsOmitOnChange } from '../../engines';
import { cx } from '../../utils';

import type { AccordionProps } from './Accordion.types';
import { base } from './Accordion.styles';
import { classes } from './Accordion.tokens';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { getChildren } from './utils';

export const accordionRoot = (Root: RootPropsOmitOnChange<HTMLDivElement, AccordionProps>) =>
    forwardRef<HTMLDivElement, AccordionProps>(
        (
            {
                size,
                view,
                stretching = 'filled',
                defaultActiveEventKey = [],
                children,
                disabled,
                className,
                singleActive,
                onChange,
            },
            outerRootRef,
        ) => {
            const stretchingClass = classes[`${stretching}Stretching` as keyof typeof classes];

            const [activeIndex, setActiveIndex] = useState<number[]>(defaultActiveEventKey);

            const updateValue = (index: number, value?: boolean) => {
                if (onChange) {
                    onChange(index, value);
                }
                if (singleActive) {
                    if (value) {
                        setActiveIndex([index]);
                    } else {
                        setActiveIndex([]);
                    }
                } else if (value) {
                    setActiveIndex([index, ...activeIndex]);
                } else {
                    const updatedActiveIndex = activeIndex.filter((i) => i !== index);
                    setActiveIndex(updatedActiveIndex);
                }
            };

            const childrenArray = Children.toArray(children) as React.ReactElement[];
            return (
                <Root
                    ref={outerRootRef}
                    size={size}
                    view={view}
                    className={cx(stretchingClass, classes.accordionRoot, className)}
                >
                    {getChildren(childrenArray, activeIndex, view, disabled, updateValue)}
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
