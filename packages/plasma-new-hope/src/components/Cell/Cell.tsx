import React, { forwardRef } from 'react';

import { RootProps } from '../../engines';
import { cx } from '../../utils';

import type { CellProps } from './Cell.types';
import { base, CellLeft, CellRight, CellContentWrapper, CellContent } from './Cell.styles';
import { classes } from './Cell.tokens';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { CellTextbox } from './ui/CellTextbox/CellTextbox';

export const cellRoot = (Root: RootProps<HTMLDivElement, CellProps>) =>
    forwardRef<HTMLDivElement, CellProps>(
        (
            {
                size,
                view,
                contentLeft,
                contentRight,
                alignContentLeft = 'center',
                alignContentRight = 'center',
                children,
                title,
                subtitle,
                label,
                description,
                content,
                stretching = 'filled',
                className,
            },
            outerRootRef,
        ) => {
            const stretchingClass = classes[`${stretching}Stretching` as keyof typeof classes];

            // Импорт  старых свойств
            const titleText = title || description;
            const contentLeftDeprecated = contentLeft || content;

            return (
                <Root
                    ref={outerRootRef}
                    size={size}
                    view={view}
                    className={cx(stretchingClass, classes.cellRoot, className)}
                >
                    {contentLeftDeprecated && <CellLeft align={alignContentLeft}>{contentLeftDeprecated}</CellLeft>}
                    <CellContentWrapper>
                        <CellContent>
                            {titleText || subtitle || label ? (
                                <CellTextbox label={label} title={titleText} subtitle={subtitle} />
                            ) : (
                                children
                            )}
                        </CellContent>
                        {contentRight && <CellRight align={alignContentRight}>{contentRight}</CellRight>}
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
    },
};
