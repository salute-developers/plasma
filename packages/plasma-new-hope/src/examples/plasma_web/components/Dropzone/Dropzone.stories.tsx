import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { disableProps } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../../_helpers';

import { Dropzone } from './Dropzone';

const onDragEnter = action('onDragEnter');
const onDragLeave = action('onDragLeave');
const onDrop = action('onDrop');
const onChange = action('onChange');
const onChoseFiles = action('onChoseFiles');

const iconPlacements = ['top', 'left'];

const meta: Meta<typeof Dropzone> = {
    title: 'plasma_web/Dropzone',
    component: Dropzone,
    decorators: [WithTheme],
    argTypes: {
        iconPlacement: {
            options: iconPlacements,
            control: {
                type: 'inline-radio',
            },
            defaultValue: 'top',
        },
        ...disableProps(['view', 'size']),
    },
};

export default meta;

type StoryPropsDefault = ComponentProps<typeof Dropzone>;

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        iconPlacement: 'top',
        width: 400,
        height: 280,
        stretch: false,
        disabled: false,
        title: 'Click to upload',
        description: 'or drag and drop files here',
    },
    render: (args) => (
        <div style={{ height: '100vh' }}>
            <Dropzone
                {...args}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                onChange={onChange}
                onChoseFiles={onChoseFiles}
            />
        </div>
    ),
};
