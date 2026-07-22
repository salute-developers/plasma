import React from 'react';

import { disableProps, getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory, createCustomIconsStory } from './stories';
import type { RatingCustomIcons } from './stories';

type CreateRatingStoriesProps = {
    component: any;
    componentConfig: any;
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
    customIcons?: RatingCustomIcons;
};

export const getRatingStories = (config: CreateRatingStoriesProps) => {
    const { component, componentConfig, customIcons, ...rest } = config;

    const ratingConfig = getConfigVariations(componentConfig);

    const meta = createMeta({
        component,
        componentConfig: ratingConfig,
        ...rest,
    });

    const DefaultStoryComponent = createDefaultStory(component);
    const CustomIconsStoryComponent = createCustomIconsStory(component, customIcons);

    const Default = {
        render: (args: any) => <DefaultStoryComponent {...args} />,
    };

    const CustomIcons = {
        render: (args: any) => <CustomIconsStoryComponent {...args} />,
        argTypes: {
            ...disableProps(['size', 'view']),
        },
    };

    return {
        meta,
        Default,
        CustomIcons,
    };
};
