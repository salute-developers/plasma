import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getBadgeStories } from '@salutejs/plasma-sb-utils';

import { Badge } from './Badge';
import { config } from './Badge.config';

type BadgeProps = ComponentProps<typeof Badge>;

const { meta: META, Default } = getBadgeStories({
    component: Badge,
    componentConfig: config,
});

const meta: Meta<BadgeProps> = {
    ...META,
    title: 'Data Display/Badge',
};

export default meta;

export { Default };
