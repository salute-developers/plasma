import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory } from './stories';

type CreateStepsStoriesProps = {
    component: any;
    componentConfig: { stepsConfig: any; stepItemConfig: any };
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
};

export const getStepsStories = (config: CreateStepsStoriesProps) => {
    const { component, componentConfig, ...rest } = config;

    const stepsConfig = getConfigVariations(componentConfig.stepsConfig);
    const stepItemConfig = getConfigVariations(componentConfig.stepItemConfig);

    const meta = createMeta({
        component,
        componentConfig: stepsConfig,
        ...rest,
    });

    const DefaultStoryComponent = createDefaultStory(component, stepItemConfig.views);

    const Default = {
        render: (args: any) => <DefaultStoryComponent {...args} />,
    };

    return { meta, Default };
};
