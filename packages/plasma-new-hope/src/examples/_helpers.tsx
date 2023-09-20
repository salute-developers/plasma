import { ArgTypes, StoryContext, Story as StoryType } from '@storybook/react';
import React from 'react';

import { ComponentConfig } from '../engines';
import type { HTMLTagList, PropsType, Variants } from '../engines/types';

import { ThemeType, themes } from './themes';

export const WithTheme = (Story: StoryType, context: StoryContext) => {
    const themeType = context.globals.theme as keyof ThemeType;
    const themeName = context.title.split('/')[0];

    return (
        <div
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
            control.defaultValue = false;
        } else {
            control.control.type = 'select';
            control.options = Object.keys(val).filter((name) => name !== 'css');
        }

        const defaultValue = defaults[key];
        if (defaultValue) {
            control.defaultValue = val.true ? Boolean(defaultValue) : defaultValue;
        }

        argTypes[key] = control;
    }

    return argTypes;
}
