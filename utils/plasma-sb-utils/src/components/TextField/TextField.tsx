import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createChipsStory, createDefaultStory } from './stories';
import { chipViews } from './fixtures';

type CreateStoriesProps = {
    component: any;
    componentConfig: any;
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
    additionalComponents?: {};
};

export const getTextFieldStories = (config: CreateStoriesProps) => {
    const { component, componentConfig, ...rest } = config;

    const textFieldConfig = getConfigVariations(componentConfig);

    const meta = createMeta({
        component,
        componentConfig: textFieldConfig,
        ...rest,
    });

    const DefaultStoryComponent = createDefaultStory(component);
    const ChipsStoryComponent = createChipsStory(component);

    const Default = {
        render: (args: any) => <DefaultStoryComponent {...args} />,
    };

    const Chips = {
        render: (args: any) => <ChipsStoryComponent {...args} />,
        args: {
            leftHelper: 'Для первого чипа валидация вернула view="negative"',
            chipView: 'secondary',
            chips: ['1 value', '2 value', '3 value', '4 value'],
            chipType: 'default',
        },
        argTypes: {
            chipView: {
                options: chipViews,
                control: {
                    type: 'select',
                },
            },
            chipType: {
                control: 'select',
                options: ['default', 'text'],
            },
        },
    };

    return {
        meta,
        Default,
        Chips,
    };
};
