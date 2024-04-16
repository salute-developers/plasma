import type { ReactNode } from 'react';
import React, { Children, HTMLAttributes, ElementType, cloneElement, isValidElement } from 'react';

import type { PopoverPlacementBasic } from '../../Popover';
import type { DropdownPlacement, DropdownPlacementBasic, DropdownProps } from '../Dropdown.types';

export const getPlacement = (placement: DropdownPlacement) => {
    return `${placement}-start` as PopoverPlacementBasic;
};

export const getPlacements = (placements?: DropdownPlacement | DropdownPlacementBasic[]) => {
    if (!placements) {
        return;
    }
    const isArray = Array.isArray(placements);

    if (!isArray) {
        return getPlacement(placements as DropdownPlacement);
    }
    return ((placements || []) as DropdownPlacementBasic[]).map((placement) => getPlacement(placement));
};

export const getCorrectHeight = (listHeight: Required<DropdownProps>['listHeight']): string => {
    if (Number.isNaN(Number(listHeight))) {
        return listHeight.toString();
    }
    return `${listHeight}rem`;
};

export const childrenWithProps = (children: ReactNode, additionalProps: HTMLAttributes<HTMLLIElement>) =>
    Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, additionalProps);
        }
        return child;
    });

const isReactObject = (element: any): element is ElementType => {
    return typeof element === 'object' || typeof element === 'function';
};

export const getValidComponent = (element: ElementType | ReactNode, props: object) => {
    if (isValidElement(element)) {
        return cloneElement(element, props);
    }

    if (isReactObject(element)) {
        const Component = element;

        return <Component {...props} />;
    }

    return element;
};
