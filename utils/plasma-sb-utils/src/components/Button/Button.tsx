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
};

export const getButtonStories = (config: CreateStoriesProps) => {
    const { component, componentConfig, ...rest } = config;

    const buttonConfig = getConfigVariations(componentConfig);

    const meta = createMeta({
        component,
        componentConfig: buttonConfig,
        ...rest,
    });

    const DefaultStoryComponent = createDefaultStory(component);

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
