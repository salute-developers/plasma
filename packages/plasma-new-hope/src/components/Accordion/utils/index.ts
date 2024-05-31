import { Children, ReactElement, ReactNode, cloneElement, isValidElement } from 'react';

import { AccordionItemProps } from '../ui/AccordionItem/AccordionItem.types';

export const updatePropsRecursively = (
    children?: ReactElement<AccordionItemProps>[],
    activeIndex?: number,
    updateValue?: (index?: number, value?: boolean) => void,
): ReactNode[] =>
    Children.map(children || [], (child, index) => {
        if (!isValidElement(child)) {
            return child;
        }

        const props = {
            index,
            value: activeIndex === index,
            updateValue,
        };

        return cloneElement(child, props);
    });

export const getChildren = (
    children: ReactElement<AccordionItemProps>[],
    activeIndex?: number,
    updateValue?: (index?: number, value?: boolean) => void,
) => {
    return updatePropsRecursively(children, activeIndex, updateValue);
};
