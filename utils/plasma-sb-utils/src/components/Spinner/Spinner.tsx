import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory, createLiveStory } from './stories';

type CreateSpinnerStoriesProps = {
    component: any;
    componentConfig: any;
    additionalComponents: {
        Button: React.ComponentType<any>;
    };
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
};

export const getSpinnerStories = (config: CreateSpinnerStoriesProps) => {
    const { component, componentConfig, additionalComponents, ...rest } = config;
    const { Button } = additionalComponents;

    const spinnerConfig = getConfigVariations(componentConfig);
    const meta = createMeta({ component, componentConfig: spinnerConfig, ...rest });

    const DefaultStoryComponent = createDefaultStory(component);
    const LiveStoryComponent = createLiveStory(component, { Button });

    const Default = {
        render: (args: any) => <DefaultStoryComponent {...args} />,
    };
    const Live = {
        render: (args: any) => <LiveStoryComponent {...args} />,
    };

    return { meta, Default, Live };
};
