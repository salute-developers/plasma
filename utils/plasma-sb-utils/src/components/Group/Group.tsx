import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory } from './stories';

type CreateGroupStoriesProps = {
    component: any;
    componentConfig: any;
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
    additionalComponents: {
        Button: any;
        IconButton: any;
        Chip: any;
        Icon: any;
    };
};

export const getGroupStories = ({
    component,
    componentConfig,
    additionalComponents,
    ...rest
}: CreateGroupStoriesProps) => {
    const groupConfig = {
        ...getConfigVariations(componentConfig),
        variations: componentConfig.variations,
    };
    const meta = createMeta({
        component,
        componentConfig: groupConfig,
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
