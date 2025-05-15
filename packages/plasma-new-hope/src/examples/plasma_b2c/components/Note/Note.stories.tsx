import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { WithTheme } from '../../../_helpers';
import { IconSaluteOutline16 } from '../../../../components/_Icon';

import { Note } from './Note';

const views = ['default', 'positive', 'warning', 'negative', 'info'];
const sizes = ['l', 'm', 's', 'xs'];
const contentBeforeSizes = ['fixed', 'scalable'];

const meta: Meta<typeof Note> = {
    title: 'b2c/Data Display/Note',
    component: Note,
    decorators: [WithTheme],
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
        height: 116,
        stretch: false,
        title: 'Title',
        text: 'Text',
        enableContentBefore: true,
        contentBeforeSizing: 'fixed',
        hasClose: true,
    },
    render: ({ enableContentBefore, ...args }) => (
        <div style={{ height: '100vh' }}>
            <Note
                contentBefore={
                    enableContentBefore && (
                        <IconSaluteOutline16
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
