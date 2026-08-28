import type { Meta, StoryObj } from '@storybook/react-vite';

import { IconGallery } from '../IconGallery';
import { NavigationMovement as args } from '../iconData/36';

const meta: Meta<typeof IconGallery> = { title: 'Navigation & Movement/36', component: IconGallery };

export default meta;

type Story = StoryObj<typeof meta>;

export const Size36: Story = { name: '36', args };
