import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { getConfigVariations } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../_helpers';
import { IconCrossThin } from '../../../components/_Icon';

import { ProgressBarCircular } from './ProgressBarCircular';
import { config } from './ProgressBarCircular.config';

const { views, sizes } = getConfigVariations(config);

const meta: Meta<typeof ProgressBarCircular> = {
    title: 'Data Display/ProgressBarCircular',
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
        strokeWidth: {
            control: {
                type: 'range',
                min: 1,
                max: 16,
            },
        },
    },
};

export default meta;

type StoryPropsDefault = ComponentProps<typeof ProgressBarCircular> & {
    hasValue?: boolean;
};

const getContent = (value?: number, size?: string) => {
    if (size === 'xxl' || size === 'xl') {
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
    },
    render: ({ ...args }) => <ProgressBarCircular {...args}>{getContent(args.value, args.size)}</ProgressBarCircular>,
};
