import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getChipStories } from '@salutejs/plasma-sb-utils';

import { Chip } from './Chip';
import { config } from './Chip.config';

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
