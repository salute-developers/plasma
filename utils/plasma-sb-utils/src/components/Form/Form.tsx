import React from 'react';

import { createMeta } from './meta';
import { createDefaultStory } from './stories';

type CreateFormStoriesProps = {
    component: any;
    componentConfig: any;
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
    additionalComponents: {
        TextField: any;
        Select?: any;
    };
};

export const getFormStories = (config: CreateFormStoriesProps) => {
    const { component, additionalComponents, ...rest } = config;

    const meta = createMeta({
        component,
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
