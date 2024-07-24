import * as React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { Breadcrumbs } from '.';

type BreadcrumbsProps = ComponentProps<typeof Breadcrumbs>;

const meta: Meta<BreadcrumbsProps> = {
    title: 'Content/Breadcrumbs',
    component: Breadcrumbs,
    args: {
        view: 'default',
        size: 'm',
        showItems: 2,
        items: [
            { title: 'Home', href: '/' },
            { title: 'About as', href: '/' },
            { renderItem: () => <span>Custom Item</span> },
            { title: 'Contacts' },
        ],
    },
};

export default meta;

export const Default: StoryObj<BreadcrumbsProps> = {
    render: (props: BreadcrumbsProps) => {
        const args = { ...props };

        return <Breadcrumbs {...args} />;
    },
};
