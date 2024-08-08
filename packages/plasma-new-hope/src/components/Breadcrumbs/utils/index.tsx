import React, { ReactNode } from 'react';

import { BreadcrumbShorter } from '../ui/BreadcrumbShorter/BreadcrumbShorter';
import { StyledLink } from '../Breadcrumbs.styles';
import { BreadcrumbsItem } from '../Breadcrumbs.types';

export const shortItems = (items: ReactNode[], renderSeparator: ReactNode, showItems?: number) => {
    if (!showItems || showItems < 2 || items.length <= showItems) {
        return items;
    }

    const leftSlice = Math.floor(showItems / 2);
    const rightSlice = items.length - leftSlice - (showItems % 2);

    const renderItems: ReactNode[] = items.slice(leftSlice, rightSlice);
    const shorter = <BreadcrumbShorter separator={renderSeparator}>{renderItems}</BreadcrumbShorter>;
    items.splice(leftSlice, rightSlice - leftSlice, shorter);
    return items;
};

export const convertIconSize = (size?: string) => {
    switch (size) {
        case 's':
        case 'xs':
            return 'xs';
        default:
            return 's';
    }
};

export const getRenderItems = (items: BreadcrumbsItem[], renderSeparator: ReactNode, showItems?: number) => {
    const renderItems = shortItems(
        items.map((item: BreadcrumbsItem) => {
            if ('renderItem' in item) {
                return item.renderItem();
            }
            return (
                <StyledLink tabIndex={0} href={item.href} isHref={Boolean(item.href)}>
                    {item.title}
                </StyledLink>
            );
        }),
        renderSeparator,
        showItems,
    );

    return renderItems;
};

export const addSeparator = (items: ReactNode[], renderSeparator: ReactNode) => {
    return items.flatMap((item, idx) => (idx < items.length - 1 ? [item, renderSeparator] : [item]));
};
