import React, { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getUserMessageStories } from '@salutejs/plasma-sb-utils';

import { Button } from '../../Button/Button';
import { EmbedIconButton } from '../../EmbedIconButton/EmbedIconButton';

import { UserMessage, userMessageMergedConfig } from './UserMessage';

type UserMessageProps = ComponentProps<typeof UserMessage>;

const { meta: META, Default } = getUserMessageStories({
    component: UserMessage,
    componentConfig: userMessageMergedConfig,
    Button,
    EmbedIconButton,
});

const meta: Meta<UserMessageProps> = {
    ...META,
    title: 'AI Kit/UserMessage',
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
