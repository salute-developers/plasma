import * as React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { disableProps } from '@salutejs/plasma-sb-utils';

import { Dropdown } from '../Dropdown';

import { Breadcrumbs } from '.';

type BreadcrumbsProps = ComponentProps<typeof Breadcrumbs>;

const meta: Meta<BreadcrumbsProps> = {
    title: 'Content/Breadcrumbs',
    component: Breadcrumbs,
    args: {
        view: 'default',
        size: 'm',
    },
    argTypes: {
        ...disableProps(['separator']),
    },
};

export default meta;

export const Default: StoryObj<BreadcrumbsProps> = {
    args: {
        showItems: 2,
        items: [
            { title: 'Home', href: '/' },
            { title: 'About as', href: '/' },
            { renderItem: () => <span>Custom Item</span> },
            { title: 'Contacts' },
        ],
    },
    render: (props: BreadcrumbsProps) => {
        return <Breadcrumbs {...props} />;
    },
};

export const CustomShorter: StoryObj<BreadcrumbsProps> = {
    args: {
        view: 'default',
        size: 'm',
    },
    render: (props: BreadcrumbsProps) => {
        const items = [
            { title: 'Home', href: '/' },
            { title: 'About as', href: '/' },
            {
                renderItem: () => {
                    const itemsDropdown = [
                        {
                            value: 'Custom Item 1',
                            label: 'Custom Item 1',
                        },
                        {
                            value: 'Custom Item 2',
                            label: 'Custom Item 2',
                        },
                    ];
                    return (
                        <Dropdown
                            variant="tight"
                            placement="bottom"
                            items={itemsDropdown}
                            trigger="hover"
                            size={args.size}
                        >
                            <span>...</span>
                        </Dropdown>
                    );
                },
            },
            { title: 'Contacts' },
        ];

        const args = { ...props, items };

        return <Breadcrumbs {...args} />;
    },
};
