import * as React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { disableProps, getConfigVariations } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../../_helpers';

import { PaginationDots } from './PaginationDots';
import { config } from './PaginationDots.config';

const { views, sizes } = getConfigVariations(config);
const orientations: Array<string> = ['vertical', 'horizontal'];

const meta: Meta<typeof PaginationDots> = {
    title: 'web/Data Entry/PaginationDots',
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
                type: 'inner-radio',
            },
        },
        orientation: {
            options: orientations,
            control: {
                type: 'inline-radio',
            },
        },
        activeDotCentered: {
            control: {
                type: 'boolean',
            },
        },
        ...disableProps(['value', 'focused', 'pin']),
    },
};

export default meta;

type StoryPropsDefault = ComponentProps<typeof PaginationDots> & {
    enableContentLeft: boolean;
    enableContentRight: boolean;
};

const StoryDefault = ({ size, ...rest }: StoryPropsDefault) => {
    return <PaginationDots size={size} value={0} count={9} {...rest} />;
};

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        orientation: 'horizontal',
        stretched: true,
        currentDot: 'first',
    },
    render: (args) => <StoryDefault {...args} />,
};
