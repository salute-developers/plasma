import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getBreadcrumbsStories } from '@salutejs/plasma-sb-utils';

import { Dropdown } from '../Dropdown';

import { config } from './Breadcrumbs.config';

import { Breadcrumbs } from '.';

type BreadcrumbsProps = ComponentProps<typeof Breadcrumbs>;

const { meta: META, Default, CustomShorter } = getBreadcrumbsStories({
    component: Breadcrumbs,
    componentConfig: config,
    additionalComponents: { Dropdown },
    disablePropsList: ['view'],
});

const meta: Meta<BreadcrumbsProps> = { ...(META as Meta<BreadcrumbsProps>), title: 'Navigation/⚠️ Breadcrumbs' };

export default meta;

export { Default, CustomShorter };
