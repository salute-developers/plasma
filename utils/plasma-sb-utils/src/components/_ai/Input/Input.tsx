import React from 'react';

import { createMeta } from './meta';
import { createDefaultStory } from './stories';

export const getInputStories = ({ component, IconButton, decorators }: any) => {
    const meta = createMeta({ component, decorators });
    const Story = createDefaultStory(component, IconButton);

    return { meta, Default: { render: (args: any) => <Story {...args} /> } };
};
