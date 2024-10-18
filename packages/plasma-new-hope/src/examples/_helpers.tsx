import React from 'react';
import type { ArgTypes, Decorator } from '@storybook/react';

import { ComponentConfig } from '../engines';
import type { HTMLAttributesWithoutOnChange, HTMLTagList, PropsType, Variants } from '../engines/types';

// TODO: Удалить в отдельном пр из всех компонент
export const WithTheme: Decorator = (Story) => {
    return <Story />;
};

export function argTypesFromConfig<
    Tag extends HTMLTagList,
    VariantList extends Variants,
    VariantsProps extends PropsType<VariantList>,
    LayoutProps extends React.HTMLAttributes<HTMLElement> | HTMLAttributesWithoutOnChange<HTMLElement>
>(config: ComponentConfig<Tag, VariantList, VariantsProps, LayoutProps>, exclude: string[] = []) {
    const { defaults, variations } = config;

    const filteredVariations = Object.entries(variations).filter(([key]) => !exclude.includes(key));

    const argTypes: ArgTypes = {};

    for (const [key, val] of filteredVariations) {
        const control: ArgTypes[''] = {
            control: {},
        };

        if (val.true) {
            control.control.type = 'boolean';
            control.table = { defaultValue: { summary: false } };
        } else {
            control.control.type = 'select';
            control.options = Object.keys(val).filter((name) => name !== 'css');
        }

        const defaultValue = defaults[key];

        if (defaultValue) {
            control.table = {
                defaultValue: {
                    summary: val.true ? Boolean(defaultValue) : defaultValue,
                },
            };
        }

        argTypes[key] = control;
    }

    return argTypes;
}
