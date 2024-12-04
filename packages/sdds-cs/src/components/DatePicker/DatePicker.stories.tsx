import React, { ComponentProps, useRef, useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IconPlaceholder, InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import { IconPlasma } from '@salutejs/plasma-icons';

import { IconButton } from '../IconButton/IconButton';

import { DatePicker, DatePickerRange } from './DatePicker';

const onChangeValue = action('onChangeValue');
const onBlur = action('onBlur');
const onFocus = action('onFocus');

const onChangeFirstValue = action('onChangeFirstValue');
const onChangeSecondValue = action('onChangeSecondValue');

const sizes = ['s'];
const views = ['default'];
const dividers = ['none', 'dash', 'icon'];
const labelPlacements = ['outer', 'inner'];

const meta: Meta = {
    title: 'Controls/DatePicker',
    decorators: [InSpacingDecorator],
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
        lang: {
            options: ['ru', 'en'],
            control: {
                type: 'inline-radio',
            },
        },
        format: {
            options: ['DD.MM.YYYY', 'DD MMMM YYYY'],
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

type StoryPropsDefault = ComponentProps<typeof DatePicker> & {
    enableContentLeft: boolean;
    enableContentRight: boolean;
};

const StoryDefault = ({
    enableContentLeft,
    enableContentRight,
    valueError,
    valueSuccess,
    size,
    ...rest
}: StoryPropsDefault) => {
    const [isOpen, setIsOpen] = useState(false);

    const iconSize = 's';

    return (
        <DatePicker
            opened={isOpen}
            size={size}
            valueError={valueError}
            valueSuccess={valueSuccess}
            contentLeft={enableContentLeft ? <IconPlasma size={iconSize} /> : undefined}
            contentRight={enableContentRight ? <IconPlasma size={iconSize} /> : undefined}
            onBlur={onBlur}
            onFocus={onFocus}
            onToggle={(is) => setIsOpen(is)}
            onChangeValue={(e, currentValue) => {
                onChangeValue(e, currentValue);
            }}
            onCommitDate={() => setIsOpen(false)}
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
    },
    args: {
        label: 'Лейбл',
        leftHelper: 'Подсказка к полю',
        placeholder: '30.05.2024',
        size: 's',
        view: 'default',
        lang: 'ru',
        format: 'DD.MM.YYYY',
        labelPlacement: 'outer',
        defaultDate: new Date(2024, 5, 14),
        min: new Date(2024, 1, 1),
        max: new Date(2024, 12, 29),
        maskWithFormat: false,
        disabled: false,
        readOnly: false,
        textBefore: '',
        enableContentLeft: true,
        enableContentRight: true,
        valueError: false,
        valueSuccess: false,
    },
    render: (args) => <StoryDefault {...args} />,
};

type StoryPropsRange = ComponentProps<typeof DatePickerRange> & {
    enableContentLeft: boolean;
    enableContentRight: boolean;
    enableFirstTextfieldContentLeft: boolean;
    enableSecondTextfieldContentLeft: boolean;
    enableFirstTextfieldContentRight: boolean;
    enableSecondTextfieldContentRight: boolean;
};

const ActionButton = ({ size }) => {
    const iconSize = size === 'xs' ? 'xs' : 's';
    return (
        <IconButton view="clear" size={size}>
            <IconPlasma size={iconSize} color="var(--text-primary)" />
        </IconButton>
    );
};

const StoryRange = ({
    dividerVariant,
    enableContentLeft,
    enableContentRight,
    firstTextfieldTextBefore,
    secondTextfieldTextBefore,
    enableFirstTextfieldContentLeft,
    enableSecondTextfieldContentLeft,
    enableFirstTextfieldContentRight,
    enableSecondTextfieldContentRight,
    firstValueError,
    firstValueSuccess,
    secondValueError,
    secondValueSuccess,
    size,
    ...rest
}: StoryPropsRange) => {
    const rangeRef = useRef(null);

    const [isOpen, setIsOpen] = useState(false);
    const [firstDate, setFirstDate] = useState<string | Date>('');

    const iconSize = 's';
    const showDividerIcon = dividerVariant === 'icon';
    const showDefaultTextBefore = dividerVariant === 'none';

    const dividerIconProps = {
        dividerIcon: showDividerIcon ? <IconPlaceholder size={iconSize} /> : null,
        dividerVariant,
    };

    return (
        <DatePickerRange
            size={size}
            ref={rangeRef}
            opened={isOpen}
            firstValueError={firstValueError}
            firstValueSuccess={firstValueSuccess}
            secondValueError={secondValueError}
            secondValueSuccess={secondValueSuccess}
            contentLeft={enableContentLeft ? <IconPlasma size={iconSize} /> : undefined}
            contentRight={enableContentRight ? <ActionButton size={size} /> : undefined}
            firstTextfieldContentLeft={enableFirstTextfieldContentLeft ? <IconPlasma size={iconSize} /> : undefined}
            firstTextfieldContentRight={enableFirstTextfieldContentRight ? <IconPlasma size={iconSize} /> : undefined}
            secondTextfieldContentLeft={enableSecondTextfieldContentLeft ? <IconPlasma size={iconSize} /> : undefined}
            secondTextfieldContentRight={enableSecondTextfieldContentRight ? <IconPlasma size={iconSize} /> : undefined}
            firstTextfieldTextBefore={
                showDefaultTextBefore ? firstTextfieldTextBefore || 'С' : firstTextfieldTextBefore
            }
            secondTextfieldTextBefore={
                showDefaultTextBefore ? secondTextfieldTextBefore || 'ПО' : secondTextfieldTextBefore
            }
            onToggle={(is) => setIsOpen(is)}
            onChangeFirstValue={(e, currentValue) => {
                onChangeFirstValue(e, currentValue);
            }}
            onChangeSecondValue={(e, currentValue) => {
                onChangeSecondValue(e, currentValue);
            }}
            onCommitFirstDate={(currentValue) => {
                setFirstDate(currentValue);
            }}
            onCommitSecondDate={(currentValue) => {
                firstDate && currentValue && setIsOpen(false);
            }}
            {...dividerIconProps}
            {...rest}
        />
    );
};

export const Range: StoryObj<StoryPropsRange> = {
    argTypes: {
        dividerVariant: {
            options: dividers,
            control: {
                type: 'inline-radio',
            },
        },
    },
    args: {
        label: 'Лейбл',
        leftHelper: 'Подсказка к полю',
        firstPlaceholder: '30.05.2024',
        secondPlaceholder: '04.06.2024',
        firstTextfieldTextBefore: '',
        secondTextfieldTextBefore: '',
        firstTextfieldTextAfter: '',
        secondTextfieldTextAfter: '',
        size: 's',
        view: 'default',
        lang: 'ru',
        format: 'DD.MM.YYYY',
        isDoubleCalendar: false,
        dividerVariant: 'dash',
        min: new Date(2024, 1, 1),
        max: new Date(2024, 12, 29),
        maskWithFormat: false,
        disabled: false,
        readOnly: false,
        enableContentLeft: true,
        enableContentRight: true,
        enableFirstTextfieldContentLeft: false,
        enableFirstTextfieldContentRight: false,
        enableSecondTextfieldContentLeft: false,
        enableSecondTextfieldContentRight: false,

        firstValueError: false,
        firstValueSuccess: false,
        secondValueError: false,
        secondValueSuccess: false,
    },
    render: (args) => <StoryRange {...args} />,
};
