import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getNumberInputStories } from '@salutejs/plasma-sb-utils';

import { NumberInput } from './NumberInput';
import { config } from './NumberInput.config';

type NumberInputProps = ComponentProps<typeof NumberInput>;

const { meta: META, Default, DisplayWithoutValue } = getNumberInputStories({
    component: NumberInput,
    componentConfig: config,
    additionalArgTypes: {
        appearance: {
            options: ['default', 'white'],
            control: { type: 'select' },
        },
    },
    defaultArgs: {
        size: 'm',
    },
});

const meta: Meta<NumberInputProps> = {
    ...META,
    title: 'Data Entry/NumberInput',
};

export default meta;

export { Default, DisplayWithoutValue };
