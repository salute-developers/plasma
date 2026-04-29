import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory, createMultipleValuesStory, createMultipleValuesStoryArgTypes } from './stories';

type CreateSliderStoriesProps = {
    component: any;
    componentConfig: any;
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
};

export const getSliderStories = (config: CreateSliderStoriesProps) => {
    const { component, componentConfig, ...rest } = config;

    const sliderConfig = getConfigVariations(componentConfig);

    const meta = createMeta({ component, componentConfig: sliderConfig, ...rest });

    const DefaultStoryComponent = createDefaultStory(component);
    const MultipleValuesStoryComponent = createMultipleValuesStory(component);

    const Default = {
        render: (args: any) => <DefaultStoryComponent {...args} />,
    };

    const MultipleValues = {
        ...createMultipleValuesStoryArgTypes(),
        render: (args: any) => <MultipleValuesStoryComponent {...args} />,
    };

    return { meta, Default, MultipleValues };
};
