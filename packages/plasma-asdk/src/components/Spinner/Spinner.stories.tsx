import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getSpinnerStories } from '@salutejs/plasma-sb-utils';

import { Button } from '../Button/Button';

import { config } from './Spinner.config';

import { Spinner } from '.';

type SpinnerProps = ComponentProps<typeof Spinner>;

const { meta: META, Default, Live } = getSpinnerStories({
    component: Spinner,
    componentConfig: config,
    additionalComponents: { Button },
    disablePropsList: ['view'],
});

const meta: Meta<SpinnerProps> = {
    ...META,
    title: 'Data Display/Spinner',
};

export default meta;

export { Default, Live };
