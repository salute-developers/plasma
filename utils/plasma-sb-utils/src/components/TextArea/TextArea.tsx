import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory } from './stories';

type CreateStoriesProps = {
    component: any;
    componentConfig: any;
    customIcon?: (size: string, type?: 'right', disabled?: boolean, readOnly?: boolean) => JSX.Element;
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
    additionalComponents?: {};
};

export const getTextAreaStories = (config: CreateStoriesProps) => {
    const { component, componentConfig, customIcon, ...rest } = config;

    const textAreaConfig = getConfigVariations(componentConfig);

    const meta = createMeta({
        component,
        componentConfig: textAreaConfig,
        ...rest,
    });

    const DefaultStoryComponent = createDefaultStory(component, customIcon);

    const Default = {
        render: (args: any) => <DefaultStoryComponent {...args} />,
    };

    return {
        meta,
        Default,
    };
};
