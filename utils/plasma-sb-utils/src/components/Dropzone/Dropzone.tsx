import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory } from './stories';

type CreateDropzoneStoriesProps = {
    component: any;
    componentConfig: any;
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
};

export const getDropzoneStories = (config: CreateDropzoneStoriesProps) => {
    const { component, componentConfig, ...rest } = config;

    const dropzoneConfig = getConfigVariations(componentConfig);

    const meta = createMeta({
        component,
        componentConfig: dropzoneConfig,
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
