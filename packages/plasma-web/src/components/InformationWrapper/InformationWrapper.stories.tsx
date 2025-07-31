import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator, getConfigVariations } from '@salutejs/plasma-sb-utils';
import type { PopoverPlacement } from '@salutejs/plasma-new-hope';
import { IconFolder } from '@salutejs/plasma-icons';

import { TextField } from '../TextField/TextField';
import { TextArea } from '../TextArea/TextArea';

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
const componentContents = ['Placeholder', 'TextField', 'TextArea'];

const meta: Meta<typeof InformationWrapper> = {
    title: 'Data Display/InformationWrapper',
    component: InformationWrapper,
    decorators: [InSpacingDecorator],
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
    enableLeftHelperIcon: boolean;
    componentContent: 'Placeholder' | 'TextField' | 'TextArea';
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

const StoryDemo = ({
    hasHint,
    id,
    componentContent,
    size,
    enableLeftHelperIcon,
    leftHelper,
    ...rest
}: StoryPropsDefault) => {
    const LeftHelper = () => {
        return (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                {enableLeftHelperIcon && <IconFolder size="xs" />}
                <span>{leftHelper}</span>
            </div>
        );
    };

    const content = {
        Placeholder: <SvgPlaceholder />,
        TextField: <TextField id={id} size={size} />,
        TextArea: <TextArea id={id} size={size} />,
    };

    return (
        <div
            style={{
                width: '70%',
                margin: '0 auto',
            }}
        >
            <InformationWrapper leftHelper={<LeftHelper />} size={size} {...rest}>
                {content[componentContent]}
            </InformationWrapper>
        </div>
    );
};

export const Default: StoryObj<StoryPropsDefault> = {
    argTypes: {
        componentContent: {
            options: componentContents,
            control: {
                type: 'select',
            },
        },
    },
    args: {
        id: 'example-form-item',
        size: 'l',
        view: 'default',
        componentContent: 'Placeholder',
        label: 'Лейбл',
        labelPlacement: 'top',
        titleCaption: 'Подпись к полю',
        leftHelper: 'Подсказка слева',
        enableLeftHelperIcon: true,
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
