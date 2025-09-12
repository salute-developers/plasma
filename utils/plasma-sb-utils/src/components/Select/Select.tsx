import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createSingleStory } from './stories';

type CreateStoriesProps = {
    component: any;
    componentConfig: any;
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
};

export const getSelectStories = (config: CreateStoriesProps) => {
    const { component, componentConfig, ...rest } = config;

    const buttonConfig = getConfigVariations(componentConfig);

    const meta = createMeta({
        component,
        componentConfig: buttonConfig,
        ...rest,
    });

    console.log('meta', meta);

    const SingleStoryComponent = createSingleStory(component);

    const Single = {
        parameters: {
            controls: {
                exclude: ['chipView', 'isTargetAmount', 'chipType'],
            },
        },
        render: (args: any) => <SingleStoryComponent {...args} />,
        args: {
            closeAfterSelect: true,
        },
    };

    return {
        meta,
        Single,
    };
};
