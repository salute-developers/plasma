import type { Meta, StoryObj } from '@storybook/react-vite';

import { IconGallery } from '../IconGallery';
import { MediaBrand as args } from '../iconData/24';

const meta: Meta<typeof IconGallery> = { title: 'Media & Brand/24', component: IconGallery };

export default meta;

type Story = StoryObj<typeof meta>;

export const Size24: Story = { name: '24', args };
