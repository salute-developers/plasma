import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory } from './stories';

type CreateBadgeStoriesProps = {
    component: any;
    componentConfig: any;
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
};

export const getBadgeStories = (config: CreateBadgeStoriesProps) => {
    const { component, componentConfig, ...rest } = config;

    const badgeConfig = getConfigVariations(componentConfig);

    const meta = createMeta({
        component,
        componentConfig: badgeConfig,
        ...rest,
    });

    const DefaultStoryComponent = createDefaultStory(component);

    const Default = {
        render: (args: any) => <DefaultStoryComponent {...args} />,
    };

    return {
        meta,
        Default,
    };
};
