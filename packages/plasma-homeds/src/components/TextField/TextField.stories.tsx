import { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getTextFieldStories } from '@salutejs/plasma-sb-utils';

import { TextField } from './TextField';
import { config } from './TextField.config';

type TextFieldProps = ComponentProps<typeof TextField>;

const { meta: META, Default } = getTextFieldStories({
    component: TextField,
    componentConfig: config,
    defaultArgs: {
        labelPlacement: 'inner',
    },
    disablePropsList: ['appearance', 'clear', 'hasDivider', 'labelPlacement'],
});

const meta: Meta<TextFieldProps> = {
    ...META,
    title: 'Data Entry/TextField',
};

export default meta;

export { Default };
