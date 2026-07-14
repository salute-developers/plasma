import React from 'react';

import { getConfigVariations } from '../../../helpers';

import { createMeta } from './meta';
import { createDefaultStory } from './stories';

export const getContainerStories = ({ component, componentConfig, components, decorators }: any) => {
    const meta = createMeta({ component, componentConfig: getConfigVariations(componentConfig), decorators });
    const Story = createDefaultStory({ Container: component, ...components });
    return { meta, Default: { render: (args: any) => <Story {...args} /> } };
};
