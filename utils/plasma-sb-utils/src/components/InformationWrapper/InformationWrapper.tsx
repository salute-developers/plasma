import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory } from './stories';

type CreateInformationWrapperStoriesProps = {
    component: any;
    componentConfig: any;
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
};

export const getInformationWrapperStories = (config: CreateInformationWrapperStoriesProps) => {
    const { component, componentConfig, ...rest } = config;

    const informationWrapperConfig = getConfigVariations(componentConfig);

    const meta = createMeta({
        component,
        componentConfig: informationWrapperConfig,
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
