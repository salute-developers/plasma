import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory } from './stories';

type CreateStoriesProps = {
    component: any;
    componentConfig: any;
    iconButton: any;
    embedIconButton: any;
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
    additionalComponents?: {};
};

export const getRangeStories = (config: CreateStoriesProps) => {
    const { component, componentConfig, iconButton, embedIconButton, ...rest } = config;

    const rangeConfig = getConfigVariations(componentConfig);

    const meta = createMeta({
        component,
        componentConfig: rangeConfig,
        ...rest,
    });

    const DefaultStoryComponent = createDefaultStory(component, iconButton, embedIconButton);

    const Default = {
        render: (args: any) => <DefaultStoryComponent {...args} />,
    };

    return {
        meta,
        Default,
    };
};
