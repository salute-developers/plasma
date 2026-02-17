import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import { IconSaluteOutline } from '@salutejs/plasma-icons';

import { Note } from './Note';

const views = ['default', 'positive', 'warning', 'negative', 'info'];
const sizes = ['l', 'm', 's', 'xs'];
const contentBeforeSizes = ['fixed', 'scalable'];

const meta: Meta<typeof Note> = {
    title: 'Data Display/Note',
    component: Note,
    decorators: [InSpacingDecorator],
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
        contentBeforeSizing: {
            options: contentBeforeSizes,
            control: {
                type: 'inline-radio',
            },
            if: { arg: 'enableContentBefore', truthy: true },
            defaultValue: 'fixed',
        },
        isHeight: {
            control: {
                type: 'boolean',
            },
        },
        height: {
            control: {
                type: 'number',
            },
            if: {
                arg: 'isHeight',
                truthy: true,
            },
        },
    },
};

export default meta;

type StoryPropsDefault = {
    enableContentBefore: boolean;
} & ComponentProps<typeof Note>;

const getIconSize = (size?: string, isScalable?: boolean) => {
    if (isScalable) {
        return 'm';
    }

    if (size === 'l' || size === 'm') {
        return 's';
    }

    return 'xs';
};

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        view: 'default',
        size: 'l',
        width: 400,
        isHeight: false,
        stretch: false,
        title: 'Title',
        text: 'Text',
        enableContentBefore: true,
        contentBeforeSizing: 'fixed',
        hasClose: false,
    },
    render: ({ enableContentBefore, ...args }) => (
        <div style={{ height: '100vh' }}>
            <Note
                contentBefore={
                    enableContentBefore && (
                        <IconSaluteOutline
                            size={getIconSize(args.size, args.contentBeforeSizing === 'scalable')}
                            color="inherit"
                        />
                    )
                }
                {...args}
            />
        </div>
    ),
};
