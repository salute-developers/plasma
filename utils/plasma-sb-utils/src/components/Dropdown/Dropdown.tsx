import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory } from './stories';

type CreateStoriesProps = {
    component: any;
    componentConfig: any;
    additionalComponents: {
        Button: React.ComponentType<any>;
    };
    disablePropsList?: string[];
    defaultArgs?: {};
};

export const getDropdownStories = (config: CreateStoriesProps) => {
    const { component, componentConfig, additionalComponents, ...rest } = config;
    const { Button } = additionalComponents;

    const meta = createMeta({
        component,
        componentConfig: getConfigVariations(componentConfig),
        ...rest,
    });

    const SingleStoryComponent = createDefaultStory(component, { Button });

    const Default = {
        render: (args: any) => <SingleStoryComponent {...args} />,
    };

    return {
        meta,
        Default,
    };
};
