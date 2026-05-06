import type { ReactNode } from 'react';
import React, { Children, HTMLAttributes } from 'react';

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

export { getItemId } from './getItemId';
export { getItemByFocused } from './getItemByFocused';
export { getPlacement } from './getPlacement';
