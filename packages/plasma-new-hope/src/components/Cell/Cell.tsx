import React, { forwardRef } from 'react';

import { RootProps } from '../../engines';
import { cx } from '../../utils';

import type { CellProps } from './Cell.types';
import { CellRoot, CellLeft, CellRight, CellContentWrapper, CellContent } from './Cell.styles';
import { classes } from './Cell.tokens';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as stretchingCSS } from './variations/_stretching/base';
import { Textbox } from './Textbox/Textbox';

export const cellRoot = (Root: RootProps<HTMLSelectElement, CellProps>) =>
    forwardRef<HTMLSelectElement, CellProps>((props, outerRootRef) => {
        const {
            size = 'm',
            contentLeft: left,
            contentRight: right,
            alignLeft = 'center',
            alignRight = 'center',
            stretch,
            stretching = 'auto',
            children,
            title,
            subtitle,
            label,
        } = props;

        const stretchingClass = stretch
            ? classes.filledStretching
            : classes[`${stretching}Stretching` as keyof typeof classes];

        return (
            <Root ref={outerRootRef} {...props} size={size} className={cx(stretchingClass)}>
                <CellRoot className={classes.cellRoot}>
                    {left && <CellLeft align={alignLeft}>{left}</CellLeft>}
                    <CellContentWrapper>
                        <CellContent>
                            {title || subtitle || label ? (
                                <Textbox title={title} subtitle={subtitle} label={label} />
                            ) : (
                                children && children
                            )}
                        </CellContent>
                        {right && <CellRight align={alignRight}>{right}</CellRight>}
                    </CellContentWrapper>
                </CellRoot>
            </Root>
        );
    });

export const cellConfig = {
    name: 'Cell',
    tag: 'div',
    layout: cellRoot,
    base: '',
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
        stretching: {
            css: stretchingCSS,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
    },
};
