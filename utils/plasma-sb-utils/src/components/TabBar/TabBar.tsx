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

    const renderStory = (StoryComponent: any) => (args: any) => {
        const { islandSeparation, separation, island, ...rest } = args;

        return (
            <StoryComponent {...rest} island={island} separation={island ? islandSeparation ?? 'none' : separation} />
        );
    };

    const Default = {
        render: renderStory(DefaultStoryComponent),
    };

    const WithSlot = {
        args: {
            island: true,
        },
        render: renderStory(WithSlotStoryComponent),
    };

    return {
        meta,
        Default,
        WithSlot,
    };
};
