import type { ReactNode } from 'react';
import React, { Children, HTMLAttributes, ElementType, cloneElement, isValidElement } from 'react';

import type { DropdownProps } from '../Dropdown.types';

export const getCorrectHeight = (listMaxHeight: Required<DropdownProps>['listMaxHeight']): string => {
    if (Number.isNaN(Number(listMaxHeight))) {
        return listMaxHeight.toString();
    }
    return `${listMaxHeight}rem`;
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

export { getItemId } from './getItemId';
export { getItemByFocused } from './getItemByFocused';
export { getPlacement } from './getPlacement';
