import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory } from './stories';

type CreateRatingInputStoriesProps = {
    component: any;
    componentConfig: any;
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
};

export const getRatingInputStories = (config: CreateRatingInputStoriesProps) => {
    const { component, componentConfig, ...rest } = config;
    const meta = createMeta({ component, componentConfig: getConfigVariations(componentConfig), ...rest });
    const DefaultStoryComponent = createDefaultStory(component);
    const Default = { render: (args: any) => <DefaultStoryComponent {...args} /> };

    return { meta, Default };
};
