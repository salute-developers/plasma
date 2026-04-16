import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getTableStories } from '@salutejs/plasma-sb-utils';

import { Dropdown } from '../Dropdown';
import { IconButton } from '../IconButton';
import { ButtonGroup } from '../ButtonGroup';
import { Button } from '../Button';
import { Pagination as PaginationComponent } from '../Pagination';
import { LineSkeleton } from '../Skeleton';

import { Table } from './Table';
import { config } from './Table.config';

type StoryProps = ComponentProps<typeof Table>;

const { meta: META, Default, Complex, Pagination, InfiniteLoading } = getTableStories({
    component: Table,
    componentConfig: config,
    additionalComponents: {
        Dropdown,
        IconButton,
        ButtonGroup,
        Button,
        Pagination: PaginationComponent,
        LineSkeleton,
    },
});

const meta: Meta<StoryProps> = {
    ...META,
    title: 'Data Display/Table',
};

export default meta;

export { Default, Complex, Pagination, InfiniteLoading };
