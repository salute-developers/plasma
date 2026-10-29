import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getIconButtonStories } from '@salutejs/plasma-sb-utils';

import { IconButton } from './IconButton';
import { config } from './IconButton.config';

type IconButtonProps = ComponentProps<typeof IconButton>;

const { meta: META, Default } = getIconButtonStories({
    component: IconButton,
    componentConfig: config,
});

const meta: Meta<IconButtonProps> = {
    ...META,
    title: 'Data Entry/⚠️ IconButton',
};

export default meta;

export { Default };
