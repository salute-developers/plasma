import React from 'react';
import styled from 'styled-components';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory, createResizableStory, resizableStoryArgs, resizableStoryArgTypes } from './stories';

type CreatePopoverStoriesProps = {
    component: any;
    componentConfig: any;
    additionalComponents: {
        Button: React.ComponentType<any>;
    };
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
};

export const getPopoverStories = (config: CreatePopoverStoriesProps) => {
    const { component, componentConfig, additionalComponents, ...rest } = config;
    const { Button } = additionalComponents;

    const meta = createMeta({
        component,
        componentConfig: getConfigVariations(componentConfig),
        ...rest,
    });

    const StyledPopover = styled(component)`
        .popover-arrow::before {
            background: var(--surface-solid-tertiary);
        }
    `;

    const DefaultStoryComponent = createDefaultStory(StyledPopover, { Button });
    const ResizableStoryComponent = createResizableStory(StyledPopover, { Button });

    const Default = {
        render: (args: any) => <DefaultStoryComponent {...args} />,
    };

    const Resizable = {
        argTypes: resizableStoryArgTypes,
        args: resizableStoryArgs,
        render: (args: any) => <ResizableStoryComponent {...args} />,
    };

    return { meta, Default, Resizable };
};
