import React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator, getConfigVariations } from '@salutejs/plasma-sb-utils';

import { LinkButton } from './LinkButton';
import { config } from './LinkButton.config';

const { views, sizes } = getConfigVariations(config);

const sizeMap = {
    xs: '1rem', // 16px
    s: '1.5rem', // 24px
};

const meta: Meta<typeof LinkButton> = {
    title: 'Data Entry/LinkButton',
    decorators: [InSpacingDecorator],
    component: LinkButton,
    args: {
        view: 'default',
        size: 's',
        text: 'Hello',
        disabled: false,
        isLoading: false,
    },
    argTypes: {
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
        size: {
            options: sizes,
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

type StoryPropsDefault = ComponentProps<typeof LinkButton> & {
    enableContentLeft: boolean;
    enableContentRight: boolean;
};

const BellIcon = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" {...props}>
        <path
            d="M11.501 21.28c1.088 0 1.978-.889 1.978-1.977H9.524c0 1.088.88 1.978 1.977 1.978zm5.933-5.932v-4.944c0-3.035-1.622-5.576-4.45-6.248v-.673c0-.82-.662-1.483-1.483-1.483-.82 0-1.483.662-1.483 1.483v.672c-2.838.673-4.45 3.204-4.45 6.25v4.943l-1.275 1.276c-.623.623-.188 1.69.692 1.69h13.022c.88 0 1.325-1.067.702-1.69l-1.275-1.276z"
            fill="currentColor"
        />
    </svg>
);

const StoryDefault = ({ enableContentLeft, enableContentRight, size, ...rest }: StoryPropsDefault) => {
    const iconSize = size as keyof typeof sizeMap;

    return (
        <LinkButton
            contentLeft={
                enableContentLeft ? (
                    <BellIcon width={sizeMap[iconSize]} height={sizeMap[iconSize]} color="inherit" />
                ) : undefined
            }
            contentRight={
                enableContentRight ? (
                    <BellIcon width={sizeMap[iconSize]} height={sizeMap[iconSize]} color="inherit" />
                ) : undefined
            }
            size={size}
            {...rest}
        />
    );
};

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        enableContentLeft: false,
        enableContentRight: false,
    },
    render: (args) => <StoryDefault {...args} />,
};
