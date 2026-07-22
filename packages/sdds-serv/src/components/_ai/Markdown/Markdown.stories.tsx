import React, { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getMarkdownStories } from '@salutejs/plasma-sb-utils';

import { Markdown, markdownMergedConfig } from './Markdown';

type MarkdownProps = ComponentProps<typeof Markdown>;

const { meta: META, Default, Latex, Streaming } = getMarkdownStories({
    component: Markdown,
    componentConfig: markdownMergedConfig,
});

const meta: Meta<MarkdownProps> = {
    ...META,
    title: 'AI Kit/Markdown',
    decorators: [
        (Story) => (
            <div style={{ padding: '2rem' }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
export { Default, Latex, Streaming };
