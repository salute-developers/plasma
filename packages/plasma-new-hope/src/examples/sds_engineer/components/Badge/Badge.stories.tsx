import React from 'react';
import { disableProps } from '@salutejs/plasma-sb-utils';
import type { StoryObj, Meta } from '@storybook/react';

import { WithTheme } from '../../../_helpers';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
    title: 'sds_engineer/Badge',
    component: Badge,
    decorators: [WithTheme],
    argTypes: {
        size: {
            options: ['s', 'm', 'l'],
            control: {
                type: 'select',
            },
        },
        view: {
            options: ['primary', 'accent', 'positive', 'warning', 'negative', 'dark', 'light'],
            control: {
                type: 'select',
            },
        },
        ...disableProps(['contentLeft', 'contentRight']),
    },
};

export default meta;

type Story = StoryObj<typeof Badge>;

const BellIcon = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" {...props}>
        <path
            d="M11.501 21.28c1.088 0 1.978-.889 1.978-1.977H9.524c0 1.088.88 1.978 1.977 1.978zm5.933-5.932v-4.944c0-3.035-1.622-5.576-4.45-6.248v-.673c0-.82-.662-1.483-1.483-1.483-.82 0-1.483.662-1.483 1.483v.672c-2.838.673-4.45 3.204-4.45 6.25v4.943l-1.275 1.276c-.623.623-.188 1.69.692 1.69h13.022c.88 0 1.325-1.067.702-1.69l-1.275-1.276z"
            fill="currentColor"
        />
    </svg>
);

export const Default: Story = {
    args: {
        text: 'Hello',
        view: 'primary',
        size: 'm',
        pilled: false,
        transparent: false,
    },
};

export const WithIcon: Story = {
    args: { ...Default.args },
    render: (args) => <Badge contentLeft={<BellIcon width="1rem" height="1rem" />} {...args} />,
};
