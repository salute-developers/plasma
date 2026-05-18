import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getPopoverStories } from '@salutejs/plasma-sb-utils';

import { Button } from '../Button/Button';

import { Popover } from './Popover';
import { config } from './Popover.config';

type PopoverProps = ComponentProps<typeof Popover>;

const { meta: META, Default, Resizable } = getPopoverStories({
    component: Popover,
    componentConfig: config,
    additionalComponents: { Button },
    disablePropsList: ['view'],
});

const meta: Meta<PopoverProps> = {
    ...META,
    title: 'Overlay/Popover',
};

export default meta;

export { Default, Resizable };
