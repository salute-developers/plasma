import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { getConfigVariations } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../_helpers';
import { config } from '../TextField/TextField.config';

import { NumberFormat } from './NumberFormat';

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');
const onSearch = action('onSearch');

const { views, sizes } = getConfigVariations(config);

const labelPlacements = ['outer', 'inner'];
const thousandsGroupStyles = ['thousand', 'lakh', 'wan', 'none'];

const meta: Meta = {
    title: 'Data Entry/NumberFormat',
    component: NumberFormat,
    decorators: [WithTheme],
    argTypes: {
        thousandsGroupStyle: {
            options: thousandsGroupStyles,
            control: {
                type: 'select',
            },
        },
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
        hasDivider: {
            control: {
                type: 'boolean',
            },
            if: {
                arg: 'clear',
                truthy: true,
            },
        },
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
        labelPlacement: {
            options: labelPlacements,
            control: {
                type: 'inline-radio',
            },
        },
        keepPlaceholder: {
            control: {
                type: 'boolean',
            },
            if: {
                arg: 'labelPlacement',
                eq: 'inner',
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
    },
};

export default meta;

type StoryPropsDefault = Omit<
    ComponentProps<typeof NumberFormat>,
    | 'helperBlock'
    | 'contentLeft'
    | 'htmlSize'
    | 'contentRight'
    | 'type'
    | 'name'
    | 'onFocus'
    | 'onBlur'
    | 'onChange'
    | 'checked'
    | 'maxLength'
    | 'minLength'
    | 'required'
    | 'enumerationType'
    | 'chips'
    | 'chipView'
    | 'chipValidator'
    | 'onChangeChips'
    | 'hintText'
    | 'hintView'
    | 'hintSize'
    | 'hintTargetIcon'
    | 'hintPlacement'
    | 'hintTargetPlacement'
    | 'hintHasArrow'
    | 'hintOffset'
    | 'hintWidth'
    | 'hintContentLeft'
    | 'hintTrigger'
>;

const StoryDemo = ({ ...rest }: StoryPropsDefault) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                width: '70%',
                margin: '0 auto',
            }}
        >
            <NumberFormat
                {...rest}
                enumerationType="plain"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
            />
        </div>
    );
};

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        defaultValue: '',
        thousandSeparator: ' ',
        decimalScale: 3,
        decimalSeparator: '.',
        thousandsGroupStyle: 'thousand',
        fixedDecimalScale: false,
        allowNegative: true,
        allowLeadingZeros: false,
        size: 'l',
        view: 'default',
        label: 'Лейбл',
        labelPlacement: 'outer',
        keepPlaceholder: false,
        titleCaption: 'Подпись к полю',
        textBefore: '',
        textAfter: '₽',
        placeholder: 'Заполните поле',
        leftHelper: 'Подсказка к полю',
        disabled: false,
        readOnly: false,
        optional: false,
        optionalText: 'опционально',
        required: false,
        requiredPlacement: 'right',
        clear: false,
        hasDivider: false,
    },
    render: (args) => <StoryDemo {...args} />,
};
