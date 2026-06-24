import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getBadgeStories } from '@salutejs/plasma-sb-utils';

import { Badge } from './Badge';
import { config } from './Badge.config';

type BadgeProps = ComponentProps<typeof Badge>;

const { meta: META, Default } = getBadgeStories({
    component: Badge,
    componentConfig: config,
    title: 'Data Display/⚠️ Badge',
});

const meta: Meta<BadgeProps> = {
    ...META,
};

export default meta;

export { Default };
