import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getUserMessageStories } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../../_helpers';
import { Button } from '../../Button/Button';
import { EmbedIconButton } from '../../EmbedIconButton/EmbedIconButton';

import { UserMessage } from './UserMessage';
import { config } from './UserMessage.config';

type UserMessageProps = ComponentProps<typeof UserMessage>;
const { meta: META, Default } = getUserMessageStories({
    component: UserMessage,
    componentConfig: config,
    Button,
    EmbedIconButton,
    decorators: [WithTheme],
});
const meta: Meta<UserMessageProps> = {
    ...META,
    title: 'AI Kit/UserMessage',
};
export default meta;
export { Default };
