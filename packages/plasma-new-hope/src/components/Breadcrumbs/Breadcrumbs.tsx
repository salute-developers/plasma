import React, { forwardRef, ReactNode } from 'react';

import { RootProps } from '../../engines';
import { cx } from '../../utils';

import type { BreadcrumbsProps } from './Breadcrumbs.types';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base, Separator } from './Breadcrumbs.styles';
import { addSeparator, convertIconSize, getRenderItems } from './utils';

export const breadcrumbsRoot = (Root: RootProps<HTMLDivElement, BreadcrumbsProps>) =>
    forwardRef<HTMLDivElement, BreadcrumbsProps>(
        ({ view, size, separator, items, showItems = items.length, className }, outerRootRef) => {
            const renderSeparator = separator ?? <Separator color="inherit" size={convertIconSize(size)} />;
            const renderItems: ReactNode[] = getRenderItems(items, renderSeparator, showItems);
            const itemsWithSeparator = addSeparator(renderItems, renderSeparator);

            return (
                <Root ref={outerRootRef} size={size} view={view} className={cx(className)} items={items}>
                    {itemsWithSeparator.map((item) => item)}
                </Root>
            );
        },
    );

export const breadcrumbsConfig = {
    name: 'Breadcrumbs',
    tag: 'div',
    layout: breadcrumbsRoot,
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
