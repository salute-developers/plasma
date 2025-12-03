import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { InSpacingDecorator, getConfigVariations } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../_helpers';
import { IconFolder, IconDownload, IconTrash } from '../../../components/_Icon';

import { File } from './File';
import { config } from './File.config';

const { views, sizes } = getConfigVariations(config);

type StoryPropsDefault = ComponentProps<typeof File>;

const meta: Meta<StoryPropsDefault> = {
    title: 'Data Display/File',
    component: File,
    decorators: [WithTheme, InSpacingDecorator],
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
        label: {
            control: {
                type: 'text',
            },
        },
        description: {
            control: {
                type: 'text',
            },
        },
        fileUrl: {
            control: {
                type: 'text',
            },
        },
        thumbUrl: {
            control: {
                type: 'text',
            },
        },
        thumbIcon: {
            control: {
                type: 'boolean',
            },
            mapping: {
                true: <IconFolder />,
                false: undefined,
            },
        },
        actionPlacement: {
            options: ['left', 'right'],
            control: {
                type: 'radio',
            },
        },
        loaderType: {
            options: ['circular', 'linear'],
            control: {
                type: 'radio',
            },
        },
        isLoading: {
            control: {
                type: 'boolean',
            },
        },
        loaderValue: {
            control: {
                type: 'range',
                min: 0,
                max: 100,
                step: 1,
            },
            if: {
                arg: 'isLoading',
                eq: true,
            },
        },
        disabled: {
            control: {
                type: 'boolean',
            },
        },
        actionContent: {
            options: ['none', 'download', 'trash'],
            control: {
                type: 'select',
            },
            mapping: {
                none: undefined,
                download: <IconDownload />,
                trash: <IconTrash />,
            },
        },
    },
};

export default meta;

const TXTIcon = () => {};

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        view: 'default',
        size: 'm',
        label: 'Document.pdf',
        description: 2048576,
        fileUrl: 'Document.pdf',
        actionPlacement: 'right',
        actionContent: 'download',
        isLoading: false,
        loaderValue: 0,
        disabled: false,
    },
};
