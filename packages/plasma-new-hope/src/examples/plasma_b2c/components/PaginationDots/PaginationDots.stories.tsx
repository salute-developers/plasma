import * as React from 'react';
import { ComponentProps, useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { disableProps, getConfigVariations } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../../_helpers';

import { PaginationDots } from './PaginationDots';
import { config } from './PaginationDots.config';

const { views, sizes } = getConfigVariations(config);
const orientations: Array<string> = ['vertical', 'horizontal'];

const meta: Meta<typeof PaginationDots> = {
    title: 'b2c/Data Entry/PaginationDots',
    decorators: [WithTheme],
    component: PaginationDots,
    args: {
        view: 'default',
        size: 'm',
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
                type: 'inline-radio',
            },
        },
        dotType: {
            options: ['dot', 'line'],
            control: {
                type: 'inline-radio',
            },
        },
        orientation: {
            options: orientations,
            control: {
                type: 'inline-radio',
            },
        },
        count: {
            control: {
                type: 'number',
            },
        },
        visibleCount: {
            control: {
                type: 'number',
            },
        },
        ...disableProps(['value', 'focused', 'pin']),
    },
};

export default meta;

type StoryPropsDefault = ComponentProps<typeof PaginationDots> & {
    currentDot: string;
};

const StoryDefault = ({ dotType, ...rest }: StoryPropsDefault) => {
    const [value, setValue] = useState(0);

    return (
        <div style={{ width: '400px', height: '400px' }}>
            <PaginationDots value={value} activeElementView={dotType} onChange={setValue} {...rest} />
        </div>
    );
};

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        size: 'm',
        dotType: 'dot',
        orientation: 'horizontal',
        centered: false,
        count: 9,
        visibleCount: 9,
    },
    render: (args) => <StoryDefault {...args} />,
};
