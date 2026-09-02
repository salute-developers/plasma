import type { Meta, StoryObj } from '@storybook/react-vite';

import { IconGallery } from '../IconGallery';
import { ActionsFeedback as args } from '../iconData/36';

const meta: Meta<typeof IconGallery> = { title: 'Actions & Feedback/36', component: IconGallery };

export default meta;

type Story = StoryObj<typeof meta>;

export const Size36: Story = { name: '36', args };
