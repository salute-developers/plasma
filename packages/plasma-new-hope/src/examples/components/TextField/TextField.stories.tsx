import React from 'react';
import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getTextFieldStories } from '@salutejs/plasma-sb-utils';

import { TextField } from './TextField';
import { config } from './TextField.config';

type textFieldProps = ComponentProps<typeof TextField>;

const { meta: META, Default, Chips } = getTextFieldStories({
    component: TextField,
    componentConfig: config,
});

const meta: Meta<textFieldProps> = {
    ...META,
    title: 'Data Entry/TextField',
};

export default meta;

export { Default, Chips };
