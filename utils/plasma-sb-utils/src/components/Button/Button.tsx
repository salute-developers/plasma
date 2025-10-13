import React from 'react';

import { disableProps, getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory } from './stories';

type CreateStoriesProps = {
    component: any;
    componentConfig: any;
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
    additionalComponents: {
        Counter: any;
    };
};

export const getButtonStories = (config: CreateStoriesProps) => {
    const { component, componentConfig, additionalComponents, ...rest } = config;
    const { Counter } = additionalComponents;

    const buttonConfig = getConfigVariations(componentConfig);

    const meta = createMeta({
        component,
        componentConfig: buttonConfig,
        ...rest,
    });

    const DefaultStoryComponent = createDefaultStory(component, Counter);

    const Default = {
        render: (args: any) => <DefaultStoryComponent {...args} />,
        args: {
            value: '',
        },
        argTypes: {
            ...disableProps(['value']),
        },
    };

    const WithValue = {
        render: (args: any) => <DefaultStoryComponent {...args} />,
        args: {
            enableContentLeft: false,
            enableCounter: false,
            value: 'Value',
        },
        argTypes: {
            ...disableProps(['enableContentRight']),
        },
    };

    return {
        meta,
        Default,
        WithValue,
    };
};
