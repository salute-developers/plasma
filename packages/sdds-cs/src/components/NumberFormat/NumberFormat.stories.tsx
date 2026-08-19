import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getNumberFormatStories } from '@salutejs/plasma-sb-utils';

import { config } from '../TextField/TextField.config';

import { NumberFormat } from './NumberFormat';

type NumberFormatProps = ComponentProps<typeof NumberFormat>;

const { meta: META, Default } = getNumberFormatStories({
    component: NumberFormat,
    componentConfig: config,
    defaultArgs: {
        size: 's',
    },
});

const meta: Meta<NumberFormatProps> = {
    ...META,
    title: 'Data Entry/NumberFormat',
};

export default meta;

export { Default };
