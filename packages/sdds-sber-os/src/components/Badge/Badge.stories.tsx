import React, { ComponentProps } from 'react';
import { disableProps, InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import type { StoryObj, Meta } from '@storybook/react-vite';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
    title: 'Data Display/Badge',
    component: Badge,
    decorators: [InSpacingDecorator],
    argTypes: {
        size: {
            options: ['l', 'm', 's'],
            control: {
                type: 'select',
            },
        },
        view: {
            options: ['default', 'accent', 'positive', 'warning', 'negative', 'dark', 'light'],
            control: {
                type: 'select',
            },
        },
        pilled: {
            control: { type: 'boolean' },
            if: { arg: 'clear', truthy: false },
        },
        maxWidth: {
            control: { type: 'text' },
        },
        text: {
            control: { type: 'text' },
            if: { arg: 'enableText', truthy: true },
        },
        ...disableProps(['contentLeft', 'contentRight', 'transparent']),
    },
};

export default meta;

type StoryProps = ComponentProps<typeof Badge> & {
    enableContentLeft: boolean;
    enableContentRight: boolean;
    enableText: boolean;
};
type Story = StoryObj<StoryProps>;

const BellIcon = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" {...props}>
        <path
            d="M11.501 21.28c1.088 0 1.978-.889 1.978-1.977H9.524c0 1.088.88 1.978 1.977 1.978zm5.933-5.932v-4.944c0-3.035-1.622-5.576-4.45-6.248v-.673c0-.82-.662-1.483-1.483-1.483-.82 0-1.483.662-1.483 1.483v.672c-2.838.673-4.45 3.204-4.45 6.25v4.943l-1.275 1.276c-.623.623-.188 1.69.692 1.69h13.022c.88 0 1.325-1.067.702-1.69l-1.275-1.276z"
            fill="currentColor"
        />
    </svg>
);

export const Default: Story = {
    argTypes: {
        enableContentLeft: {
            control: { type: 'boolean' },
            if: { arg: 'enableContentRight', truthy: false },
        },
        enableContentRight: {
            control: { type: 'boolean' },
            if: { arg: 'enableText', truthy: true },
        },
    },
    args: {
        view: 'default',
        size: 'm',
        enableText: true,
        text: 'Hello',
        enableContentLeft: false,
        enableContentRight: false,
        clear: false,
        pilled: false,
        transparent: false,
        maxWidth: '',
    },
    render: ({ enableContentLeft, enableContentRight, enableText, size, ...rest }: StoryProps) => {
        const iconSize = () => {
            switch (size) {
                case 'l':
                    return '1rem';
                case 'xs':
                    return '0.625rem';
                default:
                    return '0.75rem';
            }
        };

        return (
            <Badge
                contentLeft={
                    enableContentLeft || !enableText ? <BellIcon width={iconSize()} height={iconSize()} /> : undefined
                }
                contentRight={enableContentRight ? <BellIcon width={iconSize()} height={iconSize()} /> : undefined}
                size={size}
                {...rest}
            />
        );
    },
};
