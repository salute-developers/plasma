import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createCustomHighlightStory, createDefaultStory } from './stories';

type CreateTourStoriesProps = {
    component: any;
    componentConfig: any;
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
    additionalComponents: {
        Button: React.FC<any>;
        TextField: React.FC<any>;
        Switch: React.FC<any>;
        Range: React.FC<any>;
        Avatar: React.FC<any>;
    };
};

export const getTourStories = (config: CreateTourStoriesProps) => {
    const { component, componentConfig, additionalComponents, ...rest } = config;

    const tourConfig = getConfigVariations(componentConfig);

    const meta = createMeta({
        component,
        componentConfig: tourConfig,
        ...rest,
    });

    const DefaultStoryComponent = createDefaultStory(component, additionalComponents);
    const CustomHighlightStoryComponent = createCustomHighlightStory(component, additionalComponents);

    const Default = {
        render: (args: any) => <DefaultStoryComponent {...args} />,
    };

    const CustomHighlight = {
        render: (args: any) => <CustomHighlightStoryComponent {...args} />,
    };

    return {
        meta,
        Default,
        CustomHighlight,
    };
};
