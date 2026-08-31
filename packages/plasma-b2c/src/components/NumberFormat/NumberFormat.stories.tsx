import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getNumberFormatStories } from '@salutejs/plasma-sb-utils';

import { config } from '../TextField/TextField.config';
import { TextFieldView } from '../TextField';

import { NumberFormat } from './NumberFormat';

type NumberFormatProps = ComponentProps<typeof NumberFormat>;

const labelPlacements = ['outer', 'inner'];
const statuses = ['', 'success', 'warning', 'error'];

const { meta: META, Default } = getNumberFormatStories({
    component: NumberFormat,
    componentConfig: config,
    defaultArgs: {
        leftHelper: undefined,
        helperText: 'Подсказка к полю',
        status: '',
    },
    additionalArgTypes: {
        status: {
            options: statuses,
            control: { type: 'select' },
        },
        view: {
            options: { ...TextFieldView, empty: '' },
            control: { type: 'select' },
        },
        animatedHint: {
            options: labelPlacements,
            control: { type: 'inline-radio' },
        },
        maxLength: {
            control: { type: 'number' },
        },
        keepPlaceholder: {
            control: { type: 'boolean' },
            if: {
                arg: 'view',
                eq: 'innerLabel',
            },
        },
        helperText: {
            control: { type: 'text' },
        },
    },
    disablePropsList: ['leftHelper'],
});

const meta: Meta<NumberFormatProps> = {
    ...META,
    title: 'Data Entry/NumberFormat',
};

export default meta;

export { Default };
