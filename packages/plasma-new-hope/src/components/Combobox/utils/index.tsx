import React, { cloneElement, isValidElement } from 'react';
import type { ElementType, ReactNode } from 'react';

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
