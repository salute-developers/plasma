import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react';
import { getButtonStories } from '@salutejs/plasma-sb-utils';

import { config } from './Button.config';

import { Button } from '.';

type ButtonProps = ComponentProps<typeof Button>;

const BUTTON_STORIES_CONTEXT = getButtonStories({ component: Button, config, disablePropsList: ['size'] });

const { meta: META, ...stories } = BUTTON_STORIES_CONTEXT;

const meta: Meta<ButtonProps> = {
    ...META,
    title: 'Data Entry/Button',
    args: {
        ...META.args,
        view: 'accent',
        size: 's',
    },
};

export default meta;

export const Default = stories.ButtonStoryDefault;
export const WithValue = { ...stories.WithValue };
export const Loading = { ...stories.Loading };
