import React, { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getContainerStories } from '@salutejs/plasma-sb-utils';

import { Button } from '../../Button/Button';
import { Chip } from '../../Chip/Chip';
import { ChipGroup } from '../../ChipGroup/ChipGroup';
import { EmbedIconButton } from '../../EmbedIconButton/EmbedIconButton';
import { Flow } from '../../Flow/Flow';
import { IconButton } from '../../IconButton/IconButton';
import { Answer } from '../Answer/Answer';
import { Header } from '../Header/Header';
import { Input } from '../Input/Input';
import { UserMessage } from '../UserMessage/UserMessage';

import { Container, containerMergedConfig } from './Container';

type ContainerProps = ComponentProps<typeof Container>;

const { meta: META, Default } = getContainerStories({
    component: Container,
    componentConfig: containerMergedConfig,
    components: {
        IconButton,
        Button,
        EmbedIconButton,
        Flow,
        Chip,
        ChipGroup,
        Header,
        Input,
        Answer,
        UserMessage,
    },
});

const meta: Meta<ContainerProps> = {
    ...META,
    title: 'AI Kit/Container',
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
