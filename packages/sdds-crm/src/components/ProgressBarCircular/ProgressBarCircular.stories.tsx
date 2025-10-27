import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator, getConfigVariations, disableProps } from '@salutejs/plasma-sb-utils';
import React, { ComponentProps } from 'react';
import { IconCross } from '@salutejs/plasma-icons';

import { config } from './ProgressBarCircular.config';

import { ProgressBarCircular } from '.';

const { views, sizes } = getConfigVariations(config);

const meta: Meta<typeof ProgressBarCircular> = {
    title: 'Overlay/ProgressBarCircular',
    component: ProgressBarCircular,
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
        strokeSize: {
            options: [2, 4, 6, 8],
            control: {
                type: 'radio',
            },
        },
        ...disableProps(['status']),
    },
};

export default meta;

type StoryPropsDefault = ComponentProps<typeof ProgressBarCircular>;

const getContent = (value: number, size?: string) => {
    if (size === 'xxl' || size === 'xl') {
        if (value >= 100) {
            return '100%';
        }
        if (value <= 0) {
            return '0%';
        }
        return `${value}%`;
    }

    if (size !== 'xxs') {
        return <IconCross size={size === 'l' ? 's' : 'xs'} />;
    }

    return '';
};

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        view: 'default',
        size: 's',
        value: 50,
        hasTrack: true,
    },
    render: ({ ...args }) => <ProgressBarCircular {...args}>{getContent(args.value, args.size)}</ProgressBarCircular>,
};
