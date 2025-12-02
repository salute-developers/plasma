import * as React from 'react';
import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getButtonStories } from '@salutejs/plasma-sb-utils';

import { Counter } from '../Counter/Counter';

import { Button } from './Button';
import { config } from './Button.config';

type ButtonProps = ComponentProps<typeof Button>;

const { meta: META, Default, WithValue } = getButtonStories({
    component: Button,
    componentConfig: config,
    additionalComponents: {
        Counter,
    },
});

const meta: Meta<ButtonProps> = {
    ...META,
    title: 'Data Entry/Button',
};

export default meta;

export { Default, WithValue };
