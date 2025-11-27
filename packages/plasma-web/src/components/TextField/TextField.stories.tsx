import React, { ComponentProps } from 'react';
import type { Meta } from '@storybook/react';
import { getTextFieldStories } from '@salutejs/plasma-sb-utils';

import { config } from './TextField.config';

import { TextField, TextFieldView } from '.';

type TextFieldProps = ComponentProps<typeof TextField>;

const labelPlacements = ['inner', 'outer'];
const statuses = ['default', 'success', 'warning', 'error'];

const { meta: META, Default, Chips } = getTextFieldStories({
    component: TextField,
    componentConfig: config,
    defaultArgs: {
        status: 'default',
        view: 'default',
        animatedHint: 'inner',
        helperText: 'Подсказка к полю',
    },
    additionalArgTypes: {
        status: {
            options: statuses,
            control: {
                type: 'select',
            },
        },
        view: {
            options: { ...TextFieldView, ...{ empty: '' } },
            control: {
                type: 'select',
            },
        },
        animatedHint: {
            options: labelPlacements,
            control: {
                type: 'select',
            },
        },
    },
    disablePropsList: ['leftHelper'],
});

const meta: Meta<TextFieldProps> = {
    ...META,
    title: 'Data Entry/TextField',
};

export default meta;

export { Default, Chips };
