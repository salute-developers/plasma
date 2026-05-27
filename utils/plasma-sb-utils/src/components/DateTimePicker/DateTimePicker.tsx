import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory } from './stories';

type CreateDateTimePickerStoriesProps = {
    component: any;
    componentConfig: any;
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
    customIcon?: (size: string, type?: 'left' | 'right', disabled?: boolean, readOnly?: boolean) => JSX.Element;
};

export const getDateTimePickerStories = (config: CreateDateTimePickerStoriesProps) => {
    const { component, componentConfig, customIcon, ...rest } = config;

    const dateTimePickerConfig = getConfigVariations(componentConfig);

    const meta = createMeta({
        component,
        componentConfig: dateTimePickerConfig,
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
