import React from 'react';

type PropCondition<T> = {
    prop: keyof T;
    value: any;
};

type ComponentMapping<T> = {
    conditions: PropCondition<T> | PropCondition<T>[];
    component: React.ComponentType<T>;
};

export function createConditionalComponent<T extends object>(
    defaultComponent: React.ComponentType<T>,
    mappings: ComponentMapping<T>[],
): React.FC<T> {
    return (props: T) => {
        for (const mapping of mappings) {
            const { conditions, component } = mapping;

            const conditionsArray = Array.isArray(conditions) ? conditions : [conditions];

            const allConditionsMatch = conditionsArray.every((condition) => props[condition.prop] === condition.value);

            if (allConditionsMatch) {
                const Component = component;
                return <Component {...props} />;
            }
        }

        const DefaultComponent = defaultComponent;
        return <DefaultComponent {...props} />;
    };
}
