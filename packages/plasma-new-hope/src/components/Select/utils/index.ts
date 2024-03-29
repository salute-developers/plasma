import { Children, MouseEvent, ReactElement, ReactNode, cloneElement, isValidElement } from 'react';

import { SelectPrimitiveValue, ValueType, SelectValue } from '../Select.types';
import { SelectItemProps } from '../ui/SelectItem/SelectItem.type';

type NewSelectedFunc = {
    (selected?: undefined | null, newValue?: undefined | null, type?: undefined | null): undefined;
    (selected?: SelectPrimitiveValue, newValue?: SelectPrimitiveValue, type?: ValueType): SelectPrimitiveValue;
    (selected?: Array<SelectPrimitiveValue>, newValue?: SelectPrimitiveValue, type?: ValueType): Array<
        SelectPrimitiveValue
    >;
};

export const getNewSelected: NewSelectedFunc = (selected: any, newValue: any, type: any) => {
    if (newValue === undefined || newValue === null) {
        return newValue;
    }

    if (
        (type === 'single' || type === 'native') &&
        (typeof newValue === 'string' || typeof newValue === 'number' || typeof newValue === 'boolean')
    ) {
        return newValue;
    }

    const newSelected = selected || [];

    const set = new Set(newSelected);

    if (set.has(newValue)) {
        set.delete(newValue);
    } else {
        set.add(newValue);
    }

    return Array.from(set);
};

const getChildrenInnerText = (children: ReactElement): string => {
    if (!children || typeof children === 'string') {
        return children;
    }

    return getChildrenInnerText(children.props.children);
};

export const getValues = (items: ReactElement[], value?: SelectValue, result: Array<Array<string>> = []) => {
    items.forEach((item) => {
        if (item.props === undefined) {
            return result;
        }

        const { value: newValue } = item.props;

        if (item.props.children && Array.isArray(item.props.children)) {
            return getValues(item.props.children, value, result);
        }

        if (
            (!Array.isArray(value) && newValue === value) ||
            (Array.isArray(value) && value?.find((v) => newValue === v))
        ) {
            const index = (Array.isArray(value) && value?.findIndex((v) => newValue === v)) || 0;

            if (item.props.text) {
                const { text: newText } = item.props;
                result[index] = [newValue, newText];

                return;
            }

            const newText = getChildrenInnerText(item.props.children);
            result[index] = [newValue, newText];
        }

        return result;
    });

    return result;
};

const getChildrenItemChecked = (value?: SelectValue, child?: ReactElement<SelectItemProps>) =>
    (!Array.isArray(value) && child?.props.value === value) ||
    (Array.isArray(value) && Boolean(value?.find((v) => child?.props.value === v)));

// INFO: Функция для рекурсивного обновления пропсов
export const updatePropsRecursively = (
    children?: ReactElement<SelectItemProps>[],
    externalProps?: Record<string, any>,
    value?: SelectValue,
    search?: string,
    filterFunction?: (childText: string, filterValue?: string) => boolean,
): ReactNode[] =>
    Children.map(children || [], (child) => {
        if (!isValidElement(child)) {
            return child;
        }

        const hasValue = 'value' in child?.props;

        const props = {
            key: `${value}$`,
            checked: getChildrenItemChecked(value, child),
            ...(hasValue && {
                ref: (element: HTMLDivElement) => {
                    if (externalProps?.childrenRefs?.current && element) {
                        externalProps.childrenRefs.current.push(element);
                    }
                },
                onClick: (event: MouseEvent<HTMLDivElement>) => {
                    child.props.onClick?.(event);
                    externalProps?.onClick?.(event);
                },
            }),
        };

        const updatedChild = updatePropsRecursively(
            child.props.children as ReactElement<SelectItemProps>[],
            externalProps,
            value,
            search,
            filterFunction,
        );

        if (filterFunction) {
            const text = child.props?.text || '';

            return filterFunction(text, search) ? cloneElement(child, props, updatedChild) : null;
        }

        return cloneElement(child, props, updatedChild);
    });

const defaultFilterFunction = (text: string, filterValue = '') => text.includes(filterValue);

export const getChildren = (
    children: ReactElement<SelectItemProps>[],
    externalProps: Record<string, any>,
    value?: SelectValue,
    search?: string,
    filterFunction = defaultFilterFunction,
) => {
    if (externalProps.childrenRefs) {
        externalProps.childrenRefs.current = [];
    }

    return updatePropsRecursively(children, externalProps, value, search, filterFunction);
};
