import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createCustomShorterStory, createDefaultStory } from './stories';

type CreateBreadcrumbsStoriesProps = {
    component: any;
    componentConfig: any;
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
    additionalComponents: {
        Dropdown: any;
    };
};

export const getBreadcrumbsStories = (config: CreateBreadcrumbsStoriesProps) => {
    const { component, componentConfig, additionalComponents, ...rest } = config;
    const { Dropdown } = additionalComponents;

    const breadcrumbsConfig = getConfigVariations(componentConfig);

    const meta = createMeta({ component, componentConfig: breadcrumbsConfig, ...rest });

    const DefaultStoryComponent = createDefaultStory(component);
    const CustomShorterStoryComponent = createCustomShorterStory(component, Dropdown);

    const Default = { render: (args: any) => <DefaultStoryComponent {...args} /> };
    const CustomShorter = { render: (args: any) => <CustomShorterStoryComponent {...args} /> };

    return { meta, Default, CustomShorter };
};
