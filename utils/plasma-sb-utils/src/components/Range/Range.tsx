import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory } from './stories';

type CreateStoriesProps = {
    component: any;
    componentConfig: any;
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
    additionalComponents?: {};
    customIcon?: (size: string, type?: 'left' | 'right', disabled?: boolean, readOnly?: boolean) => JSX.Element;
};

export const getRangeStories = (config: CreateStoriesProps) => {
    const { component, componentConfig, customIcon, ...rest } = config;

    const rangeConfig = getConfigVariations(componentConfig);

    const meta = createMeta({
        component,
        componentConfig: rangeConfig,
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
