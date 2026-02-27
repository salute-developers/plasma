import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getPaginationStories } from '@salutejs/plasma-sb-utils';

import { IconButton } from '../IconButton/IconButton';

import { Pagination } from './Pagination';
import { config } from './Pagination.config';

type PaginationProps = ComponentProps<typeof Pagination>;

const { meta: META, Default } = getPaginationStories({
    component: Pagination,
    componentConfig: config,
    additionalComponents: { IconButton },
});

const meta: Meta<PaginationProps> = {
    ...META,
    title: 'Navigation/Pagination',
};

export default meta;

export { Default };
