import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory } from './stories';

type CreateLinkStoriesProps = {
    component: any;
    componentConfig: any;
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
};

export const getLinkStories = (config: CreateLinkStoriesProps) => {
    const { component, componentConfig, ...rest } = config;

    const linkConfig = getConfigVariations(componentConfig);

    const meta = createMeta({ component, componentConfig: linkConfig, ...rest });

    const DefaultStoryComponent = createDefaultStory(component);

    const Default = {
        render: (args: any) => <DefaultStoryComponent {...args} />,
    };

    return { meta, Default };
};
