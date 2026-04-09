import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getChipStories } from '@salutejs/plasma-sb-utils';

import { config } from './Chip.config';

import { Chip } from '.';

type ChipProps = ComponentProps<typeof Chip>;

const { meta: META, Default } = getChipStories({
    component: Chip,
    componentConfig: config,
});

const meta: Meta<ChipProps> = {
    ...META,
    title: 'Data Display/Chip',
};

export default meta;

export { Default };
