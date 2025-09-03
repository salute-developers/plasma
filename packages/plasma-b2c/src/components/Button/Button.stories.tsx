import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react';
import { getButtonStories } from '@salutejs/plasma-sb-utils';

import { config } from './Button.config';

import { Button } from '.';

type ButtonProps = ComponentProps<typeof Button>;

const { meta: META, Default } = getButtonStories({ component: Button, componentConfig: config });

const meta: Meta<ButtonProps> = {
    ...META,
    title: 'Data Entry/Button',
};

export default meta;

export { Default };
