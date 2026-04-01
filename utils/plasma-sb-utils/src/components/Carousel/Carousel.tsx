import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory } from './stories';

type CreateNoteStoriesProps = {
    component: any;
    componentConfig: any;
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
};

export const getCarouselStories = (config: CreateNoteStoriesProps) => {
    const { component, componentConfig, ...rest } = config;

    const carouselConfig = getConfigVariations(componentConfig);

    const meta = createMeta({
        component,
        componentConfig: carouselConfig,
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
