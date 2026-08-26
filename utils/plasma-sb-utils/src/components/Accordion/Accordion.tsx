import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createControlledStory, createDefaultStory } from './stories';

type CreateAccordionStoriesProps = {
    component: any;
    accordionItem: any;
    iconButton: any;
    componentConfig: any;
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
};

export const getAccordionStories = ({
    component,
    accordionItem,
    iconButton,
    componentConfig,
    ...rest
}: CreateAccordionStoriesProps) => {
    const accordionConfig = getConfigVariations(componentConfig);
    const meta = createMeta({
        component,
        componentConfig: accordionConfig,
        ...rest,
    });

    const DefaultStoryComponent = createDefaultStory(component, accordionItem);
    const ControlledStoryComponent = createControlledStory(component, accordionItem, iconButton);

    const Default = {
        render: (args: any) => <DefaultStoryComponent {...args} />,
    };

    const Controlled = {
        render: (args: any) => <ControlledStoryComponent {...args} />,
    };

    return {
        meta,
        Default,
        Controlled,
    };
};
