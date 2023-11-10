import React from 'react';
import type { ArgTypes, StoryContext, Decorator } from '@storybook/react';

import { ComponentConfig } from '../engines';
import type { HTMLTagList, PropsType, Variants } from '../engines/types';

import { ThemeType, themes } from './themes';

export const WithTheme: Decorator = (Story, context: StoryContext) => {
    const themeType = context.globals.theme as keyof ThemeType;
    const themeName = context.title.split('/')[0];

    return (
        <div
            id="theme-root"
            className={themes?.[themeName]?.[themeType]}
            style={{ padding: '1rem', height: '100vh', boxSizing: 'border-box' }}
        >
            <Story />
        </div>
    );
};

export function argTypesFromConfig<
    Tag extends HTMLTagList,
    VariantList extends Variants,
    VariantsProps extends PropsType<VariantList>,
    LayoutProps extends React.HTMLAttributes<HTMLElement>
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
