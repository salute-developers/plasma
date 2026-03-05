import React from 'react';

import { disableProps, getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory, createDisplayWithoutValueStory } from './stories';

type CreateStoriesProps = {
    component: any;
    componentConfig: any;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
};

export const getNumberInputStories = (config: CreateStoriesProps) => {
    const { component, componentConfig, ...rest } = config;

    const numberInputConfig = getConfigVariations(componentConfig);

    const meta = createMeta({
        component,
        componentConfig: numberInputConfig,
        ...rest,
    });

    const DefaultStoryComponent = createDefaultStory(component);
    const DisplayWithoutValueStoryComponent = createDisplayWithoutValueStory(component);

    const Default = {
        argsTypes: {
            ...rest.additionalArgTypes,
            ...disableProps(['displayWithoutValue']),
        },
        render: (args: any) => <DefaultStoryComponent {...args} />,
    };

    const DisplayWithoutValue = {
        args: {
            displayWithoutValue: 'increment',
        },
        render: (args: any) => <DisplayWithoutValueStoryComponent {...args} />,
    };

    return {
        meta,
        Default,
        DisplayWithoutValue,
    };
};
