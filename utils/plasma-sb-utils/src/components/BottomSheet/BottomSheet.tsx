import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory } from './stories';

type CreateBottomSheetStoriesProps = {
    component: any;
    componentConfig: any;
    additionalComponents: {
        Button: React.ComponentType<any>;
        Body: React.ComponentType<any>;
        H3: React.ComponentType<any>;
    };
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
};

export const getBottomSheetStories = (config: CreateBottomSheetStoriesProps) => {
    const { component, componentConfig, additionalComponents, ...rest } = config;

    const bottomSheetConfig = {
        ...getConfigVariations(componentConfig),
        defaults: componentConfig.defaults,
    };

    const meta = createMeta({
        component,
        componentConfig: bottomSheetConfig,
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
