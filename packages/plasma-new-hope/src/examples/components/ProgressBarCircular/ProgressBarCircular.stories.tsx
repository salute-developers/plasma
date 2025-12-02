import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { getConfigVariations } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../_helpers';
import { IconCrossThin } from '../../../components/_Icon';

import { ProgressBarCircular } from './ProgressBarCircular';
import { config } from './ProgressBarCircular.config';

const { views, sizes } = getConfigVariations(config);

const meta: Meta<typeof ProgressBarCircular> = {
    title: 'Overlay/ProgressBarCircular',
    component: ProgressBarCircular,
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
        strokeSize: {
            options: [2, 4, 6, 8],
            control: {
                type: 'radio',
            },
        },
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
        return <IconCrossThin size={size === 'l' ? 's' : 'xs'} />;
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
    render: ({ ...args }) => (
        <ProgressBarCircular {...args}>{getContent(args.value ?? 0, args.size)}</ProgressBarCircular>
    ),
};
