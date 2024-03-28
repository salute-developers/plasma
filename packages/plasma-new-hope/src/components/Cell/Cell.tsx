import React, { forwardRef } from 'react';

import { RootProps } from '../../engines';
import { cx } from '../../utils';

import type { CellProps } from './Cell.types';
import { base, CellLeft, CellRight, CellContentWrapper, CellContent } from './Cell.styles';
import { classes } from './Cell.tokens';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { Textbox } from './Textbox/Textbox';

export const cellRoot = (Root: RootProps<HTMLSelectElement, CellProps>) =>
    forwardRef<HTMLSelectElement, CellProps>(
        (
            {
                size,
                view,
                contentLeft,
                contentRight,
                alignLeft = 'center',
                alignRight = 'center',
                children,
                title,
                subtitle,
                label,
                stretching,
            },
            outerRootRef,
        ) => {
            const stretchingClass = classes[`${stretching}Stretching` as keyof typeof classes];

            return (
                <Root ref={outerRootRef} size={size} view={view} className={cx(stretchingClass, classes.cellRoot)}>
                    {contentLeft && <CellLeft align={alignLeft}>{contentLeft}</CellLeft>}
                    <CellContentWrapper>
                        <CellContent>
                            {title || subtitle || label ? (
                                <Textbox label={label} title={title} subtitle={subtitle} />
                            ) : (
                                children && children
                            )}
                        </CellContent>
                        {contentRight && <CellRight align={alignRight}>{contentRight}</CellRight>}
                    </CellContentWrapper>
                </Root>
            );
        },
    );

export const cellConfig = {
    name: 'Cell',
    tag: 'div',
    layout: cellRoot,
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
        stretching: 'filled',
    },
};
