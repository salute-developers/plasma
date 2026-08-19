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
        animatedHint: undefined,
        leftHelper: undefined,
        helperText: 'Подсказка к полю',
        status: '',
    },
    additionalArgTypes: {
        view: {
            options: { ...TextFieldView, empty: '' },
            control: { type: 'select' },
            table: { category: 'variation' },
        },
        status: {
            options: statuses,
            control: { type: 'select' },
            table: { category: 'variation' },
        },
        keepPlaceholder: {
            control: { type: 'boolean' },
            if: {
                arg: 'animatedHint',
                eq: 'label',
            },
            table: { category: 'layout' },
        },
        animatedHint: {
            options: labelPlacements,
            control: { type: 'inline-radio' },
            table: { category: 'layout' },
        },
        helperText: {
            control: { type: 'text' },
            table: { category: 'layout' },
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
