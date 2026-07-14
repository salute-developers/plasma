import React from 'react';

import { getConfigVariations } from '../../../helpers';

import { createMeta } from './meta';
import { createDefaultStory } from './stories';

export const getUserMessageStories = ({ component, componentConfig, Button, EmbedIconButton, decorators }: any) => {
    const meta = createMeta({ component, componentConfig: getConfigVariations(componentConfig), decorators });
    const Story = createDefaultStory(component, Button, EmbedIconButton);
    return { meta, Default: { render: (args: any) => <Story {...args} /> } };
};
