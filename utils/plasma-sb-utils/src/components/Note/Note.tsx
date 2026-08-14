import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory } from './stories';
import { getIconSize as defaultGetIconSize, NoteIconSize } from './fixtures';

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
    getIconSize?: (size?: string, isScalable?: boolean) => NoteIconSize;
    linkButtonSize?: string;
};

export const getNoteStories = (config: CreateNoteStoriesProps) => {
    const {
        component,
        componentConfig,
        additionalComponents,
        getIconSize = defaultGetIconSize,
        linkButtonSize,
        ...rest
    } = config;

    const noteConfig = getConfigVariations(componentConfig);

    const meta = createMeta({
        component,
        componentConfig: noteConfig,
        ...rest,
    });

    const DefaultStoryComponent = createDefaultStory(component, additionalComponents, {
        getIconSize,
        linkButtonSize,
    });

    const Default = {
        render: (args: any) => <DefaultStoryComponent {...args} />,
    };

    return {
        meta,
        Default,
    };
};
