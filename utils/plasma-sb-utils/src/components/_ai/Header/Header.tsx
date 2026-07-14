import React from 'react';

import { getConfigVariations } from '../../../helpers';

import { createMeta } from './meta';
import { createDefaultStory } from './stories';

export const getHeaderStories = ({ component, componentConfig, IconButton, decorators }: any) => {
    const meta = createMeta({ component, componentConfig: getConfigVariations(componentConfig), decorators });
    const Story = createDefaultStory(component, IconButton);

    return { meta, Default: { render: (args: any) => <Story {...args} /> } };
};
