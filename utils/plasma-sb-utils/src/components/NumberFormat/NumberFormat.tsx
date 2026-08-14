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
    customIcon?: (size: string, disabled?: boolean, readOnly?: boolean) => JSX.Element;
};

export const getNumberFormatStories = (config: CreateStoriesProps) => {
    const { component, componentConfig, customIcon, ...rest } = config;
    const componentConfigVariations = getConfigVariations(componentConfig);
    const meta = createMeta({ component, componentConfig: componentConfigVariations, ...rest });
    const DefaultStoryComponent = createDefaultStory(component, customIcon);
    const Default = { render: (args: any) => <DefaultStoryComponent {...args} /> };

    return { meta, Default };
};
