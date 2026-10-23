import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory, createWithSlotStory } from './stories';

type CreateTabBarStoriesProps = {
    component: any;
    itemComponent: any;
    slotComponent: any;
    componentConfig: any;
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
};

export const getTabBarStories = (config: CreateTabBarStoriesProps) => {
    const { component, itemComponent, slotComponent, componentConfig, ...rest } = config;

    const tabBarConfig = getConfigVariations(componentConfig);

    const meta = createMeta({
        component,
        componentConfig: tabBarConfig,
        ...rest,
    });

    const DefaultStoryComponent = createDefaultStory(component, itemComponent);
    const WithSlotStoryComponent = createWithSlotStory(component, itemComponent, slotComponent);

    const Default = {
        render: (args: any) => <DefaultStoryComponent {...args} />,
    };

    const WithSlot = {
        args: {
            island: true,
        },
        render: (args: any) => <WithSlotStoryComponent {...args} />,
    };

    return {
        meta,
        Default,
        WithSlot,
    };
};
