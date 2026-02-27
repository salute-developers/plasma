import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory } from './stories';

type CreateStoriesProps = {
    component: any;
    componentConfig: any;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
    additionalComponents: {
        IconButton: any;
    };
};

export const getPaginationStories = (config: CreateStoriesProps) => {
    const { component, componentConfig, additionalComponents, ...rest } = config;
    const { IconButton } = additionalComponents;

    const paginationConfig = getConfigVariations(componentConfig);

    const meta = createMeta({
        component,
        componentConfig: paginationConfig,
        ...rest,
    });

    const DefaultStoryComponent = createDefaultStory(component, IconButton);

    const Default = {
        render: (args: any) => <DefaultStoryComponent {...args} />,
    };

    return {
        meta,
        Default,
    };
};
