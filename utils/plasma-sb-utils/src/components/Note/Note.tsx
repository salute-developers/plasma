import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory } from './stories';

type CreateNoteStoriesProps = {
    component: any;
    componentConfig: any;
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
    additionalComponents: {
        LinkButton: any;
    };
};

export const getNoteStories = (config: CreateNoteStoriesProps) => {
    const { component, componentConfig, additionalComponents, ...rest } = config;

    const noteConfig = getConfigVariations(componentConfig);

    const meta = createMeta({
        component,
        componentConfig: noteConfig,
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
