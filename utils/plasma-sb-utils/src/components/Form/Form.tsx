import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory } from './stories';

type CreateFormStoriesProps = {
    component: any;
    componentConfig: any;
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
    additionalComponents: {
        TextField: any;
        Select?: any;
    };
};

export const getFormStories = (config: CreateFormStoriesProps) => {
    const { component, componentConfig, additionalComponents, ...rest } = config;

    const formConfig = getConfigVariations(componentConfig);

    const meta = createMeta({
        component,
        componentConfig: formConfig,
        ...rest,
    });

    const DefaultStoryComponent = createDefaultStory(component, additionalComponents);

    const Default = {
        render: (args: any) => <DefaultStoryComponent {...args} />,
    };

    return {
        meta,
        Default,
    };
};
