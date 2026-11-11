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
    Icon?: (size: string) => React.ReactNode;
    outlineConfig?: any;
};

export const getIconButtonStories = (config: CreateStoriesProps) => {
    const { component, componentConfig, Icon, outlineConfig, ...rest } = config;

    const componentConfigVariations = getConfigVariations(componentConfig);
    const outlineViews = outlineConfig ? getConfigVariations(outlineConfig).views : undefined;

    const meta = createMeta({
        component,
        componentConfig: componentConfigVariations,
        outlineViews,
        ...rest,
    });

    const DefaultStoryComponent = createDefaultStory(component, Icon, Boolean(outlineViews));

    const Default = {
        render: (args: any) => <DefaultStoryComponent {...args} />,
    };

    return {
        meta,
        Default,
    };
};
