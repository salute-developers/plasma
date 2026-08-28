import type { Meta, StoryObj } from '@storybook/react-vite';

import { IconGallery } from '../IconGallery';
import { WorldLifestyle as args } from '../iconData/16';

const meta: Meta<typeof IconGallery> = { title: 'World & Lifestyle/16', component: IconGallery };

export default meta;

type Story = StoryObj<typeof meta>;

export const Size16: Story = { name: '16', args };
