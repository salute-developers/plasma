import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultComponent, createDraggableComponent, createAsyncComponent } from './stories';

type CreateStoriesProps = {
    component: any;
    componentConfig: any;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
};

export const getTreeStories = (config: CreateStoriesProps) => {
    const { component, componentConfig, ...rest } = config;

    const buttonConfig = getConfigVariations(componentConfig);

    const meta = createMeta({
        component,
        componentConfig: buttonConfig,
        ...rest,
    });

    const DefaultComponent = createDefaultComponent(component);

    const Default = {
        render: (args: any) => <DefaultComponent {...args} />,
    };

    const DraggableComponent = createDraggableComponent(component);

    const DragAndDrop = {
        render: (args: any) => <DraggableComponent {...args} />,
    };

    const AsyncComponent = createAsyncComponent(component);

    const AsyncLoading = {
        render: (args: any) => <AsyncComponent {...args} />,
    };

    return {
        meta,
        Default,
        DragAndDrop,
        AsyncLoading,
    };
};
