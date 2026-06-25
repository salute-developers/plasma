import React from 'react';

import { getConfigVariations } from '../../helpers';

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

export const getAttachStories = (config: CreateStoriesProps) => {
    const { component, componentConfig, ...rest } = config;
    const componentConfigVariations = getConfigVariations(componentConfig);
    const meta = createMeta({ component, componentConfig: componentConfigVariations, ...rest });
    const DefaultStoryComponent = createDefaultStory(component);
    const Default = { render: (args: any) => <DefaultStoryComponent {...args} /> };
    return { meta, Default };
};
