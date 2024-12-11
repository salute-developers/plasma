import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';
import { IconKeyFill, IconKeyOutline, IconLockFill } from '@salutejs/plasma-icons';
import { ratingClasses } from '@salutejs/plasma-new-hope/styled-components';

import { Rating } from './Rating';

const views = ['default', 'accent'];
const sizes = ['l', 'm', 's', 'xs', 'xxs', 'h1', 'h2', 'h3', 'h4', 'h5', 'displayL', 'displayM', 'displayS'];
const scorePrecision = [1, 2];
const valuePlacements = ['before', 'after'];
const iconsCount = [1, 5, 10];
const helperTextStretching = ['fixed', 'filled'];

const meta: Meta<typeof Rating> = {
    title: 'Data Display/Rating',
    component: Rating,
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
        value: {
            control: {
                type: 'number',
            },
        },
        precision: {
            options: scorePrecision,
            control: {
                type: 'inline-radio',
            },
            if: { arg: 'hasValue', truthy: true },
        },
        valuePlacement: {
            options: valuePlacements,
            control: {
                type: 'inline-radio',
            },
            if: { arg: 'hasValue', truthy: true },
        },
        hasIcons: {
            control: {
                type: 'boolean',
            },
            if: { arg: 'hasValue', truthy: true },
        },
        iconQuantity: {
            options: iconsCount,
            control: {
                type: 'inline-radio',
            },
        },
        helperTextStretching: {
            options: helperTextStretching,
            control: {
                type: 'inline-radio',
            },
            if: { arg: 'helperText', neq: '' },
        },
        ...disableProps(['iconSlot', 'iconSlotOutline', 'iconSlotHalf']),
    },
};

export default meta;

type StoryPropsDefault = ComponentProps<typeof Rating> & {
    hasValue?: boolean;
};

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        view: 'default',
        size: 'l',
        hasValue: true,
        value: 3.8,
        precision: 1,
        valuePlacement: 'before',
        hasIcons: true,
        iconQuantity: 5,
        helperText: 'Helper text',
        helperTextStretching: 'filled',
    },
    render: ({ hasIcons, hasValue, ...args }) => (
        <Rating hasIcons={hasValue ? hasIcons : true} hasValue={hasValue} {...args} />
    ),
};

export const CustomIcons: StoryObj<StoryPropsDefault> = {
    argTypes: {
        ...disableProps(['size', 'view']),
    },
    args: {
        view: 'default',
        size: 'l',
        hasValue: true,
        value: 3.8,
        precision: 1,
        valuePlacement: 'before',
        hasIcons: true,
        iconQuantity: 5,
        helperText: 'Helper text',
        helperTextStretching: 'filled',
    },
    render: ({ hasIcons, hasValue, ...args }) => (
        <Rating
            hasIcons={hasValue ? hasIcons : true}
            hasValue={hasValue}
            iconSlot={<IconKeyFill size="s" className={ratingClasses.customIconSizing} />}
            iconSlotOutline={<IconLockFill size="s" className={ratingClasses.customIconSizing} />}
            iconSlotHalf={<IconKeyOutline size="s" className={ratingClasses.customIconSizing} />}
            {...args}
        />
    ),
};
