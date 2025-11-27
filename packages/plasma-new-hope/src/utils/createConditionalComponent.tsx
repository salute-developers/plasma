import React, { forwardRef } from 'react';

type PropCondition<T> = {
    prop: keyof T;
    value: any;
};

type ComponentMapping<T> = {
    conditions: PropCondition<T> | PropCondition<T>[];
    component: React.ComponentType<T>;
};

// TODO: Поправить типы, если внутри услвовия типы не совпадают
export function createConditionalComponent<T extends object, K extends HTMLElement>(
    defaultComponent: React.ComponentType<T>,
    mappings: ComponentMapping<T>[],
) {
    return forwardRef<K, T>((props: T, ref) => {
        for (const mapping of mappings) {
            const { conditions, component } = mapping;

            const conditionsArray = Array.isArray(conditions) ? conditions : [conditions];

            const allConditionsMatch = conditionsArray.every(({ prop, value }) => props[prop] === value);

            if (allConditionsMatch) {
                const Component = component;
                return <Component ref={ref} {...props} />;
            }
        }

        const DefaultComponent = defaultComponent;
        return <DefaultComponent ref={ref} {...props} />;
    });
}
