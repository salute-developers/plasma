import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { getConfigVariations } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../_helpers';
import type { PopoverPlacement } from '../Popover/Popover';

import { InformationWrapper } from './InformationWrapper';
import { config } from './InformationWrapper.config';

const { views, sizes } = getConfigVariations(config);

const labelPlacements = ['top', 'left'];
const hintViews = ['default'];
const hintSizes = ['m', 's'];
const hintTriggers = ['hover', 'click'];
const placements: Array<PopoverPlacement> = [
    'top',
    'top-start',
    'top-end',

    'bottom',
    'bottom-start',
    'bottom-end',

    'left',
    'left-start',
    'left-end',

    'right',
    'right-start',
    'right-end',

    'auto',
];

const meta: Meta<typeof InformationWrapper> = {
    title: 'Data Display/InformationWrapper',
    component: InformationWrapper,
    decorators: [WithTheme],
    argTypes: {
        labelPlacement: {
            options: labelPlacements,
            control: {
                type: 'select',
            },
        },
        requiredIndicatorPlacement: {
            options: ['left', 'right'],
            control: {
                type: 'select',
            },
            if: {
                arg: 'optional',
                truthy: false,
            },
        },
        hasRequiredIndicator: {
            control: {
                type: 'boolean',
            },
            if: {
                arg: 'optional',
                truthy: false,
            },
        },
        optional: {
            control: {
                type: 'boolean',
            },
            if: {
                arg: 'required',
                truthy: false,
            },
        },
        optionalText: {
            control: {
                type: 'text',
            },
            if: {
                arg: 'required',
                truthy: false,
            },
        },
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
        titleCaption: {
            control: { type: 'text' },
        },
        leftHelper: {
            control: { type: 'text' },
        },
        hintText: {
            control: { type: 'text' },
            if: {
                arg: 'hasHint',
                truthy: true,
            },
        },
        hintView: {
            options: hintViews,
            control: {
                type: 'select',
            },
            if: {
                arg: 'hasHint',
                truthy: true,
            },
        },
        hintSize: {
            options: hintSizes,
            control: {
                type: 'select',
            },
            if: {
                arg: 'hasHint',
                truthy: true,
            },
        },
        hintTrigger: {
            options: hintTriggers,
            control: {
                type: 'inline-radio',
            },
            if: {
                arg: 'hasHint',
                truthy: true,
            },
        },
        hintPlacement: {
            options: placements,
            control: {
                type: 'select',
            },
            if: {
                arg: 'hasHint',
                truthy: true,
            },
            mappers: placements,
        },
        hintHasArrow: {
            control: { type: 'boolean' },
            if: {
                arg: 'hasHint',
                truthy: true,
            },
        },
        hintWidth: {
            control: { type: 'text' },
            if: {
                arg: 'hasHint',
                truthy: true,
            },
        },
    },
};

export default meta;

type StoryPropsDefault = ComponentProps<typeof InformationWrapper> & {
    hasHint: boolean;
};

const SvgPlaceholder = () => {
    return (
        <div
            style={{
                height: '3rem',
                background:
                    'linear-gradient(to right, #9747FF 0.063rem, transparent 0.063rem) 0 0, linear-gradient(to right, #9747FF 0.063rem, transparent 0.063rem) 0 100%, linear-gradient(to left, #9747FF 0.063rem, transparent 0.063rem) 100% 0, linear-gradient(to left, #9747FF 0.063rem, transparent 0.063rem) 100% 100%, linear-gradient(to bottom, #9747FF 0.063rem, transparent 0.063rem) 0 0, linear-gradient(to bottom, #9747FF 0.063rem, transparent 0.063rem) 100% 0, linear-gradient(to top, #9747FF 0.063rem, transparent 0.063rem) 0 100%, linear-gradient(to top, #9747FF 0.063rem, transparent 0.063rem) 100% 100%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '3rem 1rem',
            }}
        />
    );
};

const StoryDemo = ({ hasHint, ...rest }: StoryPropsDefault) => {
    return (
        <div
            style={{
                width: '70%',
                margin: '0 auto',
            }}
        >
            <InformationWrapper {...rest}>
                <SvgPlaceholder />
            </InformationWrapper>
        </div>
    );
};

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        id: 'example-form-item',
        size: 'l',
        view: 'default',
        label: 'Лейбл',
        labelPlacement: 'top',
        titleCaption: 'Подпись к полю',
        leftHelper: 'Подсказка слева',
        rightHelper: 'Подсказка справа',
        hasRequiredIndicator: true,
        requiredIndicatorPlacement: 'right',
        optional: false,
        optionalText: 'optional',
        hasHint: true,
        hintText: 'Текст подсказки',
        hintTrigger: 'hover',
        hintView: 'default',
        hintSize: 'm',
        hintPlacement: 'auto',
        hintWidth: '10rem',
        hintHasArrow: true,
        disabled: false,
    },
    render: (args) => <StoryDemo {...args} />,
};
