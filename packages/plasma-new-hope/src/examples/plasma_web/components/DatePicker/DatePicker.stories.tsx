import React, { ComponentProps, Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IconPlaceholder } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../../_helpers';
import { IconButton } from '../IconButton/IconButton';
import { RangeInputRefs } from '../../../../components/Range/Range.types';

import { DatePicker, DatePickerRange } from './DatePicker';

const onChangeValue = action('onChangeValue');
const onCommitValue = action('onCommitValue');
const onBlur = action('onBlur');
const onFocus = action('onFocus');

const onChangeFirstValue = action('onChangeFirstValue');
const onChangeSecondValue = action('onChangeSecondValue');

const sizes = ['l', 'm', 's', 'xs'];
const views = ['default'];
const dividers = ['none', 'dash', 'icon'];

const meta: Meta = {
    title: 'plasma_web/DatePicker',
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
    const [error, setError] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

    const iconSize = size === 'xs' ? 'xs' : 's';

    const handleCommitDate = (newDate: Date | string, dateError?: boolean, dateSuccess?: boolean) => {
        if (dateError) {
            setError(true);
            onCommitValue(newDate);
            return;
        }

        if (dateSuccess) {
            setSuccess(true);
        }

        onCommitValue(newDate);
        setIsOpen(false);
    };

    return (
        <DatePicker
            isOpen={isOpen}
            size={size}
            valueError={error || valueError}
            valueSuccess={success || valueSuccess}
            contentLeft={enableContentLeft ? <IconPlaceholder size={iconSize} /> : undefined}
            contentRight={enableContentRight ? <IconPlaceholder size={iconSize} /> : undefined}
            onBlur={onBlur}
            onFocus={onFocus}
            onToggle={(is) => setIsOpen(is)}
            onChangeValue={(e, currentValue) => {
                setError(false);
                setSuccess(false);
                onChangeValue(e, currentValue);
            }}
            onCommitDate={handleCommitDate}
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
    },
    args: {
        label: 'Лейбл',
        leftHelper: 'Подсказка к полю',
        placeholder: '30.05.2024',
        size: 'l',
        view: 'default',
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
    ...rest
}: StoryPropsRange) => {
    const rangeRef = useRef<RangeInputRefs>(null);

    const [isFirstOpen, setIsFirstOpen] = useState(false);
    const [isSecondOpen, setIsSecondOpen] = useState(false);

    const [firstValueInnerError, setFirstValueError] = useState(false);
    const [secondValueInnerError, setSecondValueError] = useState(false);

    const [firstValueInnerSuccess, setFirstValueSuccess] = useState(false);
    const [secondValueInnerSuccess, setSecondValueSuccess] = useState(false);

    const iconSize = size === 'xs' ? 'xs' : 's';
    const showDividerIcon = dividerVariant === 'icon';
    const showDefaultTextBefore = dividerVariant === 'none';

    const dividerIconProps = {
        dividerIcon: showDividerIcon ? <IconPlaceholder size="s" /> : null,
        dividerVariant,
    };

    const handleCommitDate = (
        errorSetter: Dispatch<SetStateAction<boolean>>,
        successSetter: Dispatch<SetStateAction<boolean>>,
        openSetter: Dispatch<SetStateAction<boolean>>,
    ) => (newDate: Date | string, dateError?: boolean, dateSuccess?: boolean) => {
        if (dateError) {
            errorSetter(true);
            onCommitValue(newDate);
            return;
        }

        if (dateSuccess) {
            successSetter(true);
        }

        onCommitValue(newDate);
        openSetter(false);
    };

    return (
        <DatePickerRange
            size={size}
            ref={rangeRef}
            isOpenFirst={isFirstOpen}
            isOpenSecond={isSecondOpen}
            firstValueError={firstValueError || firstValueInnerError}
            firstValueSuccess={firstValueSuccess || firstValueInnerSuccess}
            secondValueError={secondValueError || secondValueInnerError}
            secondValueSuccess={secondValueSuccess || secondValueInnerSuccess}
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
            onToggleFirst={(is) => setIsFirstOpen(is)}
            onToggleSecond={(is) => setIsSecondOpen(is)}
            onChangeFirstValue={(e, currentValue) => {
                setFirstValueError(false);
                setFirstValueSuccess(false);
                onChangeFirstValue(e, currentValue);
            }}
            onChangeSecondValue={(e, currentValue) => {
                setSecondValueError(false);
                setSecondValueSuccess(false);
                onChangeSecondValue(e, currentValue);
            }}
            onCommitFirstDate={handleCommitDate(setFirstValueError, setFirstValueSuccess, setIsFirstOpen)}
            onCommitSecondDate={handleCommitDate(setSecondValueError, setSecondValueSuccess, setIsSecondOpen)}
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
        size: 'l',
        view: 'default',
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
