import React, { ComponentProps, useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { disableProps, getConfigVariations, IconPlaceholder } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../_helpers';

import { DateTimePicker } from './DateTimePicker';
import { config } from './DateTimePicker.config';

const onChangeValue = action('onChangeValue');
const onCommitDate = action('onCommitDate');
const onBlur = action('onBlur');
const onFocus = action('onFocus');
const onToggle = action('onToggle');

const { sizes, views } = getConfigVariations(config);
const labelPlacements = ['outer', 'inner'];
const requiredPlacements = ['left', 'right'];
const shortcutsPlacements = ['left', 'right'];

const dateShortcuts = [
    {
        value: new Date(2024, 11, 14),
        label: 'Дата по умолчанию',
    },
    {
        value: new Date(2024, 1, 1, 12, 12, 12),
        label: 'Минимальная дата',
    },
    {
        value: new Date(2024, 11, 29),
        label: 'Максимальная дата',
    },
];

const meta: Meta = {
    title: 'Data Entry/DateTimePicker',
    decorators: [WithTheme],
    argTypes: {
        view: {
            options: views,
            control: {
                type: 'inline-radio',
            },
        },
        size: {
            options: sizes,
            control: {
                type: 'inline-radio',
            },
        },
        min: {
            control: {
                type: 'date',
            },
        },
        max: {
            control: {
                type: 'date',
            },
        },
        dateShortcutsWidth: {
            control: {
                type: 'text',
            },
            if: { arg: 'showShortcuts', truthy: true },
        },
        dateShortcutsPlacement: {
            options: shortcutsPlacements,
            control: {
                type: 'select',
            },
            if: { arg: 'showShortcuts', truthy: true },
        },
        includeEdgeDates: {
            control: {
                type: 'boolean',
            },
        },
        renderFromDate: {
            control: {
                type: 'date',
            },
        },
        lang: {
            options: ['ru', 'en'],
            control: {
                type: 'inline-radio',
            },
        },
        requiredPlacement: {
            options: requiredPlacements,
            control: {
                type: 'select',
            },
            if: { arg: 'required', truthy: true },
        },
        hasRequiredIndicator: {
            control: {
                type: 'boolean',
            },
            if: {
                arg: 'required',
                truthy: true,
            },
        },
        ...disableProps(['view']),
    },
};

export default meta;

type StoryPropsDefault = ComponentProps<typeof DateTimePicker> & {
    enableContentLeft: boolean;
    showShortcuts?: boolean;
};

const StoryDefault = ({
    enableContentLeft,
    valueError,
    valueSuccess,
    size,
    lang,
    min,
    max,
    showShortcuts,
    ...rest
}: StoryPropsDefault) => {
    const [isOpen, setIsOpen] = useState(false);

    const iconSize = size === 'xs' ? 'xs' : 's';

    return (
        <DateTimePicker
            opened={isOpen}
            size={size}
            valueError={valueError}
            valueSuccess={valueSuccess}
            contentLeft={enableContentLeft ? <IconPlaceholder size={iconSize} /> : undefined}
            onBlur={onBlur}
            onFocus={onFocus}
            onToggle={(is) => {
                setIsOpen(is);
                onToggle(is);
            }}
            onChangeValue={onChangeValue}
            onCommitDate={onCommitDate}
            lang={lang}
            min={min}
            max={max}
            {...(showShortcuts && { dateShortcuts })}
            {...rest}
        />
    );
};

export const Default: StoryObj<StoryPropsDefault> = {
    argTypes: {
        defaultDate: {
            control: {
                type: 'date',
            },
        },
        labelPlacement: {
            options: labelPlacements,
            control: {
                type: 'inline-radio',
            },
        },
        dateFormat: {
            options: ['DD.MM.YYYY', 'DD MMMM YYYY', 'YYYY DD MM', 'DD YYYY MM'],
            control: {
                type: 'select',
            },
        },
        timeFormat: {
            options: ['HH:mm:ss', 'HH:mm', 'mm:ss', 'HH'],
            control: {
                type: 'select',
            },
        },
    },
    args: {
        label: 'Лейбл',
        leftHelper: 'Подсказка к полю',
        placeholder: '30.05.2024 00:00:00',
        size: 'l',
        view: 'default',
        isDouble: false,
        labelPlacement: 'outer',
        preserveInvalidOnBlur: false,
        defaultDate: new Date(2024, 11, 14),
        renderFromDate: new Date(2024, 11, 14),
        includeEdgeDates: true,
        min: new Date(2024, 1, 1, 12, 12, 12),
        max: new Date(2024, 11, 29),
        maskWithFormat: true,
        showShortcuts: true,
        dateShortcutsWidth: '11.5rem',
        dateShortcutsPlacement: 'left',
        required: false,
        requiredPlacement: 'right',
        hasRequiredIndicator: false,
        disabled: false,
        readOnly: false,
        textBefore: '',
        enableContentLeft: true,
        valueError: false,
        valueSuccess: false,
        lang: 'ru',
        dateFormat: 'DD.MM.YYYY',
        timeFormat: 'HH:mm:ss',
        calendarContainerWidth: 0,
        calendarContainerHeight: 0,
        stretched: false,
    },
    render: (args) => <StoryDefault {...args} />,
};
