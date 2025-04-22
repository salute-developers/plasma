import React, { ComponentProps, useEffect, useRef, useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { disableProps, getConfigVariations, IconPlaceholder } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../../_helpers';
import { IconButton } from '../IconButton/IconButton';
import { RangeInputRefs } from '../../../../components/Range/Range.types';

import { DatePicker, DatePickerRange } from './DatePicker';
import { config } from './DatePicker.config';

const onChangeValue = action('onChangeValue');
const onCommitDate = action('onCommitDate');
const onBlur = action('onBlur');
const onFocus = action('onFocus');

const onChangeFirstValue = action('onChangeFirstValue');
const onChangeSecondValue = action('onChangeSecondValue');

const { sizes, views } = getConfigVariations(config);
const dividers = ['none', 'dash', 'icon'];
const labelPlacements = ['outer', 'inner'];
const requiredPlacements = ['left', 'right'];

const meta: Meta = {
    title: 'b2c/Data Entry/DatePicker',
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
    lang,
    format,
    min,
    max,
    ...rest
}: StoryPropsDefault) => {
    const [isOpen, setIsOpen] = useState(false);

    const iconSize = size === 'xs' ? 'xs' : 's';

    return (
        <DatePicker
            opened={isOpen}
            size={size}
            valueError={valueError}
            valueSuccess={valueSuccess}
            contentLeft={enableContentLeft ? <IconPlaceholder size={iconSize} /> : undefined}
            contentRight={enableContentRight ? <IconPlaceholder size={iconSize} /> : undefined}
            onBlur={onBlur}
            onFocus={onFocus}
            onToggle={(is) => setIsOpen(is)}
            onChangeValue={onChangeValue}
            onCommitDate={onCommitDate}
            lang={lang}
            format={format}
            min={min}
            max={max}
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
        format: {
            options: ['DD.MM.YYYY', 'DD MMMM YYYY', 'YYYY DD MM', 'DD YYYY MM'],
            control: {
                type: 'select',
            },
        },
    },
    args: {
        label: 'Лейбл',
        leftHelper: 'Подсказка к полю',
        placeholder: '30.05.2024',
        size: 'l',
        view: 'default',
        labelPlacement: 'outer',
        defaultDate: new Date(2024, 5, 14),
        renderFromDate: new Date(2024, 4, 14),
        includeEdgeDates: true,
        min: new Date(2024, 1, 1),
        max: new Date(2024, 12, 29),
        maskWithFormat: false,
        required: false,
        requiredPlacement: 'right',
        hasRequiredIndicator: true,
        disabled: false,
        readOnly: false,
        textBefore: '',
        enableContentLeft: true,
        enableContentRight: true,
        valueError: false,
        valueSuccess: false,
        lang: 'ru',
        format: 'DD.MM.YYYY',
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
            <IconPlaceholder size={iconSize} />
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
    lang,
    min,
    max,
    ...rest
}: StoryPropsRange) => {
    const rangeRef = useRef<RangeInputRefs>(null);

    const [isOpen, setIsOpen] = useState(false);

    const iconSize = size === 'xs' ? 'xs' : 's';
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
            contentLeft={enableContentLeft ? <IconPlaceholder size={iconSize} /> : undefined}
            contentRight={enableContentRight ? <ActionButton size={size} /> : undefined}
            firstTextfieldContentLeft={
                enableFirstTextfieldContentLeft ? <IconPlaceholder size={iconSize} /> : undefined
            }
            firstTextfieldContentRight={
                enableFirstTextfieldContentRight ? <IconPlaceholder size={iconSize} /> : undefined
            }
            secondTextfieldContentLeft={
                enableSecondTextfieldContentLeft ? <IconPlaceholder size={iconSize} /> : undefined
            }
            secondTextfieldContentRight={
                enableSecondTextfieldContentRight ? <IconPlaceholder size={iconSize} /> : undefined
            }
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
            lang={lang}
            min={min}
            max={max}
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
        format: {
            options: ['DD.MM.YYYY', 'DD MMMM YYYY'],
            control: {
                type: 'select',
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
        size: 'l',
        view: 'default',
        isDoubleCalendar: false,
        closeAfterDateSelect: true,
        dividerVariant: 'dash',
        includeEdgeDates: true,
        min: new Date(2024, 1, 1),
        max: new Date(2024, 12, 29),
        renderFromDate: new Date(2024, 4, 14),
        maskWithFormat: false,
        required: false,
        requiredPlacement: 'right',
        hasRequiredIndicator: true,
        disabled: false,
        readOnly: false,
        enableContentLeft: true,
        enableContentRight: true,
        enableFirstTextfieldContentLeft: false,
        enableFirstTextfieldContentRight: false,
        enableSecondTextfieldContentLeft: false,
        enableSecondTextfieldContentRight: false,

        lang: 'ru',
        format: 'DD.MM.YYYY',

        firstValueError: false,
        firstValueSuccess: false,
        secondValueError: false,
        secondValueSuccess: false,
    },
    render: (args) => <StoryRange {...args} />,
};

const StoryDeferred = ({
    enableContentLeft,
    enableContentRight,
    valueError,
    valueSuccess,
    size,
    min,
    max,
    ...rest
}: StoryPropsDefault) => {
    const [isOpen, setIsOpen] = useState(false);

    const [defVal, setDefVal] = useState<Date | undefined>(undefined);

    const iconSize = size === 'xs' ? 'xs' : 's';

    useEffect(() => {
        setTimeout(() => {
            setDefVal(new Date(2024, 5, 14));
        }, 5000);
    }, []);

    return (
        <>
            <h3>Асинхронная установка даты по умолчанию</h3>
            <DatePicker
                defaultDate={defVal}
                opened={isOpen}
                size={size}
                valueError={valueError}
                valueSuccess={valueSuccess}
                contentLeft={enableContentLeft ? <IconPlaceholder size={iconSize} /> : undefined}
                contentRight={enableContentRight ? <IconPlaceholder size={iconSize} /> : undefined}
                onBlur={onBlur}
                onFocus={onFocus}
                onToggle={(is) => setIsOpen(is)}
                onChangeValue={onChangeValue}
                onCommitDate={onCommitDate}
                min={min}
                max={max}
                {...rest}
            />
        </>
    );
};

export const Deferred: StoryObj<StoryPropsDefault> = {
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
        format: {
            options: ['DD.MM.YYYY', 'DD MMMM YYYY'],
            control: {
                type: 'select',
            },
        },
    },
    args: {
        label: 'Лейбл',
        leftHelper: 'Подсказка к полю',
        placeholder: '30.05.2024',
        size: 'l',
        view: 'default',
        labelPlacement: 'outer',
        includeEdgeDates: true,
        min: new Date(2024, 1, 1),
        max: new Date(2024, 12, 29),
        maskWithFormat: false,
        required: false,
        requiredPlacement: 'right',
        hasRequiredIndicator: true,
        disabled: false,
        readOnly: false,
        textBefore: '',
        enableContentLeft: true,
        enableContentRight: true,
        valueError: false,
        valueSuccess: false,
    },
    render: (args) => <StoryDeferred {...args} />,
};
