import React from 'react';

import { disableProps, exampleOnly, getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import {
    createCustomItemsStory,
    createCustomSeparatorStory,
    createDefaultStory,
    createDependentColumnsStory,
} from './stories';

type CreateStoriesProps = {
    component: any;
    componentConfig: any;
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
};

export const getWheelStories = (config: CreateStoriesProps) => {
    const { component, componentConfig, defaultArgs = {}, ...rest } = config;
    const wheelConfig = getConfigVariations(componentConfig);
    const meta = createMeta({
        component,
        componentConfig: wheelConfig,
        ...rest,
        defaultArgs: {
            size: componentConfig.defaults.size,
            view: componentConfig.defaults.view,
            ...defaultArgs,
        },
    });

    const DefaultStoryComponent = createDefaultStory(component);
    const CustomItemsStoryComponent = createCustomItemsStory(component);
    const CustomSeparatorStoryComponent = createCustomSeparatorStory(component);
    const DependentColumnsStoryComponent = createDependentColumnsStory(component);

    const Default = {
        render: (args: any) => <DefaultStoryComponent {...args} />,
    };
    const CustomItems = {
        args: { columnsCount: 1 },
        argTypes: {
            ...disableProps(['minutesLoop', 'secondsLoop']),
            ...exampleOnly({ columnsCount: { control: { type: 'number', min: 0, max: 1, step: 1 } } }),
        },
        render: (args: any) => <CustomItemsStoryComponent {...args} />,
    };
    const CustomSeparator = {
        argTypes: { ...disableProps(['separator']) },
        render: (args: any) => <CustomSeparatorStoryComponent {...args} />,
    };
    const DependentColumns = {
        args: { columnsCount: 2 },
        argTypes: {
            ...disableProps(['hoursLoop', 'minutesLoop', 'secondsLoop', 'hasDescription']),
            ...exampleOnly({ columnsCount: { control: { type: 'number', min: 0, max: 2, step: 1 } } }),
        },
        render: (args: any) => <DependentColumnsStoryComponent {...args} />,
    };

    return {
        meta,
        Default,
        CustomItems,
        CustomSeparator,
        DependentColumns,
    };
};
