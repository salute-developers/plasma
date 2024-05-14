import React, { ChangeEvent, ComponentProps, Dispatch, SetStateAction, useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IconPlaceholder } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../../_helpers';
import { IconChevronLeft } from '../../../../components/_Icon';
import { IconButton } from '../IconButton/IconButton';

import { Range } from './Range';

const onChangeFirstValue = action('onChangeFirstValue');
const onChangeSecondValue = action('onChangeSecondValue');
const onSearchFirstValue = action('onSearchFirstValue');
const onSearchSecondValue = action('onSearchSecondValue');
const onFocusFirstTextfield = action('onFocusFirstTextfield');
const onFocusSecondTextfield = action('onFocusSecondTextfield');
const onBlurFirstTextfield = action('onBlurFirstTextfield');
const onBlurSecondTextfield = action('onBlurSecondTextfield');

const sizes = ['l', 'm', 's', 'xs'];
const views = ['default'];
const dividers = ['none', 'dash', 'icon'];

const meta: Meta<typeof Range> = {
    title: 'plasma_b2c/Range',
    component: Range,
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
    },
};

export default meta;

type StoryPropsDefault = ComponentProps<typeof Range> & {
    enableContentLeft: boolean;
    enableContentRight: boolean;
    enableFirstTextfieldContentLeft: boolean;
    enableSecondTextfieldContentLeft: boolean;
    enableFirstTextfieldContentRight: boolean;
    enableSecondTextfieldContentRight: boolean;
};

const getSizeForIcon = (size) => {
    const map = {
        m: 's',
        l: 's',
        s: 's',
        xs: 'xs',
    };
    if (map[size]) {
        return map[size];
    }

    return size;
};

const ActionButton = ({ size }) => {
    return (
        <IconButton view="clear" size={size}>
            <IconChevronLeft color="inherit" size={getSizeForIcon(size)} />
        </IconButton>
    );
};

const StoryDefault = ({
    dividerVariant,
    enableContentLeft,
    enableContentRight,
    firstTextfieldTextBefore,
    secondTextfieldTextBefore,
    enableFirstTextfieldContentLeft,
    enableSecondTextfieldContentLeft,
    enableFirstTextfieldContentRight,
    enableSecondTextfieldContentRight,
    size,
    ...rest
}: StoryPropsDefault) => {
    const [firstValue, setFirstValue] = useState('');
    const [secondValue, setSecondValue] = useState('');

    const iconSize = size === 'xs' ? 'xs' : 's';
    const showDividerIcon = dividerVariant === 'icon';
    const showDefaultTextBefore = dividerVariant === 'none';

    const dividerIconProps = {
        dividerIcon: showDividerIcon ? <IconPlaceholder size="s" /> : null,
        dividerVariant,
    };

    return (
        <Range
            size={size}
            firstValue={firstValue}
            secondValue={secondValue}
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
            onChangeFirstValue={(e) => {
                setFirstValue(e.target.value);
                onChangeFirstValue(e, e.target.value);
            }}
            onChangeSecondValue={(e) => {
                setSecondValue(e.target.value);
                onChangeSecondValue(e, e.target.value);
            }}
            onSearchFirstValue={onSearchFirstValue}
            onSearchSecondValue={onSearchSecondValue}
            onFocusFirstTextfield={onFocusFirstTextfield}
            onFocusSecondTextfield={onFocusSecondTextfield}
            onBlurFirstTextfield={onBlurFirstTextfield}
            onBlurSecondTextfield={onBlurSecondTextfield}
            {...dividerIconProps}
            {...rest}
        />
    );
};

export const Default: StoryObj<StoryPropsDefault> = {
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
        firstPlaceholder: 'Заполните поле 1',
        secondPlaceholder: 'Заполните поле 2',
        size: 'l',
        view: 'default',
        disabled: false,
        readOnly: false,
        firstTextfieldTextBefore: 'С',
        secondTextfieldTextBefore: 'ПО',
        enableContentLeft: true,
        enableContentRight: true,
        dividerVariant: 'dash',
        enableFirstTextfieldContentLeft: false,
        enableFirstTextfieldContentRight: false,
        enableSecondTextfieldContentLeft: false,
        enableSecondTextfieldContentRight: false,
        firstValueError: false,
        secondValueError: false,
        firstValueSuccess: false,
        secondValueSuccess: false,
    },
    render: (args) => <StoryDefault {...args} />,
};

const StoryDemo = ({ enableContentLeft, enableContentRight, size, ...rest }: StoryPropsDefault) => {
    const [firstValue, setFirstValue] = useState('');
    const [secondValue, setSecondValue] = useState('');

    const [firstValueError, setFirstValueError] = useState(false);
    const [secondValueError, setSecondValueError] = useState(false);

    const [firstValueSuccess, setFirstValueSuccess] = useState(false);
    const [secondValueSuccess, setSecondValueSuccess] = useState(false);

    const checkValue = (value: string) => /^([1-9][0-9]*|)$/.test(value);

    const handleChangeValue = (
        e: ChangeEvent<HTMLInputElement>,
        setter: Dispatch<SetStateAction<string>>,
        error: boolean,
        errorSetter: Dispatch<SetStateAction<boolean>>,
        success: boolean,
        successSetter: Dispatch<SetStateAction<boolean>>,
    ) => {
        const { value } = e.target;
        if (!checkValue(value)) {
            return;
        }

        if (error) {
            errorSetter(false);
        }

        if (success) {
            successSetter(false);
        }

        setter(value);
    };

    const firstValueConstraint = (value: number) =>
        value <= 0 || value >= 9 || (secondValue && value >= Number(secondValue) && !secondValueError);
    const secondValueConstraint = (value: number) =>
        value <= 0 || value > 10 || (firstValue && value <= Number(firstValue) && !firstValueError);

    const handleCommitValue = (
        value: string,
        constraint: (currentValue: number) => boolean,
        errorSetter: Dispatch<SetStateAction<boolean>>,
        successSetter: Dispatch<SetStateAction<boolean>>,
    ) => {
        if (!value) {
            return;
        }

        if (!checkValue(value)) {
            return errorSetter(true);
        }

        if (constraint(Number(value))) {
            return errorSetter(true);
        }

        successSetter(true);
    };

    const iconSize = size === 'xs' ? 'xs' : 's';

    return (
        <Range
            dividerVariant="dash"
            size={size}
            firstValue={firstValue}
            secondValue={secondValue}
            firstValueError={firstValueError}
            secondValueError={secondValueError}
            firstValueSuccess={firstValueSuccess}
            secondValueSuccess={secondValueSuccess}
            contentLeft={enableContentLeft ? <IconPlaceholder size={iconSize} /> : undefined}
            contentRight={enableContentRight ? <ActionButton size={size} /> : undefined}
            onChangeFirstValue={(e) => {
                handleChangeValue(
                    e,
                    setFirstValue,
                    firstValueError,
                    setFirstValueError,
                    firstValueSuccess,
                    setFirstValueSuccess,
                );
            }}
            onChangeSecondValue={(e) => {
                handleChangeValue(
                    e,
                    setSecondValue,
                    secondValueError,
                    setSecondValueError,
                    secondValueSuccess,
                    setSecondValueSuccess,
                );
            }}
            onSearchFirstValue={(e) => {
                const { value } = e.target as HTMLInputElement;
                handleCommitValue(value, firstValueConstraint, setFirstValueError, setFirstValueSuccess);
            }}
            onSearchSecondValue={(e) => {
                const { value } = e.target as HTMLInputElement;
                handleCommitValue(value, secondValueConstraint, setSecondValueError, setSecondValueSuccess);
            }}
            onFocusFirstTextfield={onFocusFirstTextfield}
            onFocusSecondTextfield={onFocusSecondTextfield}
            onBlurFirstTextfield={onBlurFirstTextfield}
            onBlurSecondTextfield={onBlurSecondTextfield}
            {...rest}
        />
    );
};

export const Demo: StoryObj<StoryPropsDefault> = {
    args: {
        label: 'Введите кол-во товара',
        leftHelper: 'Кол-во товара не может быть меньше 1 и превышать 10',
        firstPlaceholder: '1',
        secondPlaceholder: '5',
        size: 'l',
        view: 'default',
        disabled: false,
        readOnly: false,
        firstTextfieldTextBefore: '',
        secondTextfieldTextBefore: '',
        enableContentLeft: true,
        enableContentRight: true,
    },
    render: (args) => <StoryDemo {...args} />,
};
