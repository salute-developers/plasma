import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getInputStories } from '@salutejs/plasma-sb-utils';

import { IconButton } from '../../IconButton/IconButton';

import { Input } from './Input';

type InputProps = ComponentProps<typeof Input>;

const { meta: META, Default } = getInputStories({ component: Input, IconButton });

const meta: Meta<InputProps> = {
    ...META,
    title: 'AI Kit/Input',
};

export default meta;
export { Default };
