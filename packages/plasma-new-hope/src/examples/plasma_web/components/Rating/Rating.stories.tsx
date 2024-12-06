import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { disableProps } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../../_helpers';

import { Rating } from './Rating';

const views = ['default', 'accent'];
const sizes = ['l', 'm', 's', 'xs', 'xxs', 'h1', 'h2', 'h3', 'h4', 'h5', 'displayL', 'displayM', 'displayS'];
const scorePrecision = [1, 2];
const valuePlacements = ['before', 'after'];
const iconsCount = [1, 5, 10];

const meta: Meta<typeof Rating> = {
    title: 'web/Data Display/Rating',
    component: Rating,
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
        value: {
            control: {
                type: 'number',
            },
            if: { arg: 'hasValue', truthy: true },
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
        },
        iconQuantity: {
            options: iconsCount,
            control: {
                type: 'inline-radio',
            },
            if: { arg: 'hasIcons', truthy: true },
        },
        ...disableProps(['iconSlot', 'iconSlotOutline', 'iconSlotHalf']),
    },
};

export default meta;

type StoryPropsDefault = ComponentProps<typeof Rating> & {
    hasValue?: boolean;
};

// const StoryDefault = (args: StoryPropsDefault) => {
//     const [value, setValue] = useState(5);

//     const handleChange = (_: any, newValue: number) => {
//         setValue(newValue);
//         onChange(newValue);
//     };

//     return (
//         <Rating {...args} value={value} onChange={handleChange}
//         onDecrement={onDecrement} onIncrement={onIncrement} />
//     );
// };

export const Default: StoryObj<StoryPropsDefault> = {
    argTypes: {
        hasValue: {
            control: {
                type: 'boolean',
            },
        },
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
    },
    render: (args) => <Rating {...args} />,
};
