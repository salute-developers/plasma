import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getContainerStories } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../../_helpers';
import { IconButton } from '../../IconButton/IconButton';
import { Button } from '../../Button/Button';
import { EmbedIconButton } from '../../EmbedIconButton/EmbedIconButton';
import { Flow } from '../../Flow/Flow';
import { Chip } from '../../Chip/Chip';
import { ChipGroup } from '../../ChipGroup/ChipGroup';
import { Header } from '../Header/Header';
import { Input } from '../Input/Input';
import { Answer } from '../Answer/Answer';
import { UserMessage } from '../UserMessage/UserMessage';

import { Container } from './Container';
import { config } from './Container.config';

type ContainerProps = ComponentProps<typeof Container>;
const { meta: META, Default } = getContainerStories({
    component: Container,
    componentConfig: config,
    decorators: [WithTheme],
    components: { IconButton, Button, EmbedIconButton, Flow, Chip, ChipGroup, Header, Input, Answer, UserMessage },
});
const meta: Meta<ContainerProps> = {
    ...META,
    title: 'AI Kit/Container',
};
export default meta;
export { Default };
