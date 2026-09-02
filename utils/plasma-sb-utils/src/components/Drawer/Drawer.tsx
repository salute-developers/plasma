import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory } from './stories';

type CreateDrawerStoriesProps = {
    component: any;
    componentConfig: any;
    additionalComponents: {
        Button: React.ComponentType<any>;
        DrawerContent: React.ComponentType<any>;
        DrawerFooter: React.ComponentType<any>;
        DrawerHeader: React.ComponentType<any>;
        H2: React.ComponentType<any>;
        H3: React.ComponentType<any>;
        PopupProvider: React.ComponentType<any>;
        SSRProvider: React.ComponentType<any>;
    };
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
    frame?: string;
    iconButtonColor?: string;
};

export const getDrawerStories = (config: CreateDrawerStoriesProps) => {
    const { component, componentConfig, additionalComponents, frame, iconButtonColor, ...rest } = config;

    const meta = createMeta({
        component,
        componentConfig: getConfigVariations(componentConfig),
        ...rest,
    });

    const DefaultStoryComponent = createDefaultStory(component, additionalComponents, { frame, iconButtonColor });

    const Default = {
        render: (args: any) => <DefaultStoryComponent {...args} />,
    };

    return { meta, Default };
};
