import React, { forwardRef, ReactNode } from 'react';

import { RootProps } from '../../engines';
import { cx } from '../../utils';

import type { BreadcrumbsProps, BreadcrumbsItem } from './Breadcrumbs.types';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { StyledLink, base, Separator } from './Breadcrumbs.styles';
import { BreadcrumbShorter } from './ui/BreadcrumbShorter/BreadcrumbShorter';

const shortItems = (items: ReactNode[], renderSeparator: ReactNode, showItems?: number) => {
    if (!showItems) {
        return items;
    }

    const leftSlice = Math.floor(showItems / 2);
    const rightSlice = items.length - leftSlice - (showItems % 2);

    const renderItems: ReactNode[] = items.slice(leftSlice, rightSlice);
    const shorter = <BreadcrumbShorter separator={renderSeparator}>{renderItems}</BreadcrumbShorter>;
    items.splice(leftSlice, rightSlice - leftSlice, shorter);
    return items;
};

const convertIconSize = (size?: 'xs' | 's' | 'm' | 'l') => {
    switch (size) {
        case 's':
            return 'xs';
        case 'm':
            return 's';
        case 'l':
            return 's';
        default:
            return 's';
    }
};

export const breadcrumbsRoot = (Root: RootProps<HTMLDivElement, BreadcrumbsProps>) =>
    forwardRef<HTMLDivElement, BreadcrumbsProps>(
        ({ view, size, separator, items, showItems, className }, outerRootRef) => {
            const renderSeparator = separator ?? <Separator color="inherit" size={convertIconSize(size)} />;
            const renderItems: ReactNode[] = shortItems(
                items.map((item: BreadcrumbsItem) => {
                    if ('renderItem' in item) {
                        return item.renderItem();
                    }
                    return (
                        <StyledLink tabIndex={0} href={item.href} isHref={!!item.href}>
                            {item.title}
                        </StyledLink>
                    );
                }),
                renderSeparator,
                showItems,
            );

            const itemsWithSeparator = renderItems.flatMap((item, idx) =>
                idx < renderItems.length - 1 ? [item, renderSeparator] : [item],
            );

            return (
                <Root ref={outerRootRef} size={size} view={view} className={cx(className)} items={items}>
                    {itemsWithSeparator.map((item) => {
                        return item;
                    })}
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
