import React, { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getHeaderStories } from '@salutejs/plasma-sb-utils';

import { IconButton } from '../../IconButton/IconButton';

import { Header, headerMergedConfig } from './Header';

type HeaderProps = ComponentProps<typeof Header>;

const { meta: META, Default } = getHeaderStories({
    component: Header,
    componentConfig: headerMergedConfig,
    IconButton,
});

const meta: Meta<HeaderProps> = {
    ...META,
    title: 'AI Kit/Header',
    decorators: [
        (Story) => (
            <div style={{ padding: '2rem' }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
export { Default };
