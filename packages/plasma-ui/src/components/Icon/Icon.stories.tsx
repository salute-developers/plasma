import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { disableProps, InSpacingDecorator } from '../../helpers';

import { IconSet } from './IconSet';

import type { IconSetProps } from '.';

const meta: Meta<IconSetProps> = {
    title: 'Content/Icon',
    decorators: [InSpacingDecorator],
    component: IconSet,
    argTypes: {
        ...disableProps(['size', 'exclude', 'include']),
    },
};

export default meta;

export const XsSize: StoryObj<IconSetProps> = {
    args: {
        size: 'xs',
        include: ['chevronUp', 'chevronDown', 'disclosureRight'],
    },
};

export const SmallSize: StoryObj<IconSetProps> = {
    args: {
        size: 's',
        exclude: ['chevronUp', 'chevronDown'],
    },
};

export const CustomColor: StoryObj<IconSetProps> = {
    args: {
        color: '#fc0',
        exclude: ['chevronUp', 'chevronDown'],
    },
};
