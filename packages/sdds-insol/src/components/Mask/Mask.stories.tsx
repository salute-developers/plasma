import React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';

import { Mask } from './Mask';

const onChange = action('onChange');

const sizes = ['l', 'm', 's', 'xs'];
const views = ['default', 'positive', 'warning', 'negative'];

const propsToDisable = [
    'helperBlock',
    'contentLeft',
    'htmlSize',
    '$isFocused',
    'contentRight',
    'onChangeChips',
    'onSearch',
    'type',
    'name',
    'onFocus',
    'onBlur',
    'onChange',
    'value',
    'checked',
    'minLength',
    'caption',
    'values',
    'enumerationType',
    'chips',
    'label',
];

const meta: Meta<typeof Mask> = {
    title: 'Controls/Mask',
    component: Mask,
    decorators: [InSpacingDecorator],
    argTypes: {
        requiredPlacement: {
            options: ['left', 'right'],
            control: {
                type: 'select',
            },
        },
        required: {
            control: {
                type: 'boolean',
            },
            if: { arg: 'optional', truthy: false },
        },
        optional: {
            control: {
                type: 'boolean',
            },
            if: { arg: 'required', truthy: false },
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
        ...disableProps(propsToDisable),
    },
};

export default meta;

type StoryPropsDefault = Omit<
    ComponentProps<typeof Mask>,
    | 'helperBlock'
    | 'contentLeft'
    | 'htmlSize'
    | 'contentRight'
    | 'type'
    | 'name'
    | 'onFocus'
    | 'onBlur'
    | 'onChange'
    | 'value'
    | 'checked'
    | 'maxLength'
    | 'minLength'
    | 'enumerationType'
    | 'chips'
    | 'onChangeChips'
>;

const StoryDemo = ({ view, ...rest }: StoryPropsDefault) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '50%' }}>
            <Mask
                label="Маска телефона"
                mask="+7 (000) 000 - 00 - 00"
                maskChar="_"
                showStartChars={false}
                view={view}
                onChange={onChange}
                {...rest}
            />

            <Mask
                label="Маска телефона: отображается всегда"
                mask="+7 (000) 000 - 00 - 00"
                maskChar="_"
                view={view}
                alwaysShowMask
                onChange={onChange}
                {...rest}
            />

            <Mask
                label="Маска даты"
                mask="00/00/0000"
                maskString="DD/MM/YYYY"
                alwaysShowMask
                view={view}
                onChange={onChange}
                {...rest}
            />

            <Mask
                label="Маска даты: значения по умолчанию"
                // eslint-disable-next-line no-octal-escape
                mask="12.\04.0000"
                maskChar="_"
                alwaysShowMask
                view={view}
                onChange={onChange}
                {...rest}
            />

            <Mask
                label="Маска времени"
                mask="00:00"
                maskChar="_"
                alwaysShowMask
                view={view}
                onChange={onChange}
                {...rest}
            />
        </div>
    );
};

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        size: 'l',
        view: 'default',
        placeholder: 'Заполните поле',
        disabled: false,
        readOnly: false,
        required: false,
        requiredPlacement: 'right',
        optional: false,
    },
    render: (args) => <StoryDemo {...args} />,
};
