import React, { ComponentProps, useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { disableProps, IconPlaceholder } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../../_helpers';
import { IconCross } from '../../../../components/_Icon';
import type { PopoverPlacement } from '../Popover/Popover';

import { TextField } from './TextField';

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');
const onSearch = action('onSearch');
const onChipsChange = action('onChipsChange');

const sizes = ['l', 'm', 's', 'xs'];
const views = ['default', 'positive', 'warning', 'negative'];
const hintViews = ['default'];
const hintSizes = ['m', 's'];
const hintTriggers = ['hover', 'click'];
const labelPlacements = ['outer', 'inner'];
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

const meta: Meta<typeof TextField> = {
    title: 'plasma_b2c/TextField',
    component: TextField,
    decorators: [WithTheme],
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
        hasDivider: {
            control: {
                type: 'boolean',
            },
            if: { arg: 'clear', truthy: true },
        },
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
        maxLength: {
            control: {
                type: 'number',
            },
        },
        labelPlacement: {
            options: labelPlacements,
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
        hintText: {
            control: { type: 'text' },
            if: { arg: 'hasHint', truthy: true },
        },
        hintView: {
            options: hintViews,
            control: {
                type: 'select',
            },
            if: { arg: 'hasHint', truthy: true },
        },
        hintSize: {
            options: hintSizes,
            control: {
                type: 'select',
            },
            if: { arg: 'hasHint', truthy: true },
        },
        hintTrigger: {
            options: hintTriggers,
            control: {
                type: 'inline-radio',
            },
            if: { arg: 'hasHint', truthy: true },
        },
        hintPlacement: {
            options: placements,
            control: {
                type: 'select',
            },
            if: { arg: 'hasHint', truthy: true },
            mappers: placements,
        },
        hintHasArrow: {
            control: { type: 'boolean' },
            if: { arg: 'hasHint', truthy: true },
        },
        hintWidth: {
            control: { type: 'text' },
            if: { arg: 'hasHint', truthy: true },
        },
    },
};

export default meta;

type StoryPropsDefault = Omit<
    ComponentProps<typeof TextField>,
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
    | 'required'
    | 'enumerationType'
    | 'chips'
    | 'onChangeChips'
> & {
    hasHint: boolean;
    enableContentLeft: boolean;
    enableContentRight: boolean;
};

const StoryDemo = ({ enableContentLeft, enableContentRight, view, ...rest }: StoryPropsDefault) => {
    const [text, setText] = useState('Значение поля');

    const iconSize = rest.size === 'xs' ? 'xs' : 's';

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '70%', margin: '0 auto' }}>
            <TextField
                {...rest}
                enumerationType="plain"
                value={text}
                contentLeft={enableContentLeft ? <IconCross color="inherit" size={iconSize} /> : undefined}
                contentRight={enableContentRight ? <IconCross color="inherit" size={iconSize} /> : undefined}
                view={view}
                onChange={(e) => {
                    setText(e.target.value);
                    onChange(e.target.value);
                }}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
            />

            <TextField
                {...rest}
                label="Uncontrolled TextField"
                defaultValue="Дефолтное значение"
                enumerationType="plain"
                contentLeft={enableContentLeft ? <IconPlaceholder size={iconSize} /> : undefined}
                contentRight={enableContentRight ? <IconPlaceholder size={iconSize} /> : undefined}
                view={view}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
            />
        </div>
    );
};

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        id: 'example-text-field',
        size: 'l',
        view: 'default',
        label: 'Лейбл',
        labelPlacement: 'outer',
        titleCaption: 'Подпись к полю',
        textBefore: '',
        textAfter: '',
        placeholder: 'Заполните поле',
        leftHelper: 'Подсказка к полю',
        disabled: false,
        readOnly: false,
        enableContentLeft: true,
        enableContentRight: true,
        optional: false,
        required: false,
        requiredPlacement: 'right',
        clear: false,
        hasDivider: false,
        hasHint: true,
        hintText: 'Текст подсказки',
        hintTrigger: 'hover',
        hintView: 'default',
        hintSize: 'm',
        hintPlacement: 'auto',
        hintWidth: '10rem',
        hintHasArrow: true,
    },
    render: (args) => <StoryDemo {...args} />,
};

type StoryPropsChips = Omit<
    ComponentProps<typeof TextField>,
    | 'helperBlock'
    | 'contentLeft'
    | 'htmlSize'
    | 'contentRight'
    | 'type'
    | 'name'
    | 'onFocus'
    | 'onBlur'
    | 'onChange'
    | 'onSearch'
    | 'value'
    | 'checked'
    | 'maxLength'
    | 'minLength'
    | 'enumerationType'
> & {
    hasHint: boolean;
    enableContentLeft: boolean;
    enableContentRight: boolean;
};

const StoryChips = ({ enableContentLeft, enableContentRight, view, ...rest }: StoryPropsChips) => {
    const [text, setText] = useState('Значение поля');

    const iconSize = rest.size === 'xs' ? 'xs' : 's';

    return (
        <TextField
            {...rest}
            enumerationType="chip"
            value={text}
            contentLeft={enableContentLeft ? <IconPlaceholder size={iconSize} /> : undefined}
            contentRight={enableContentRight ? <IconPlaceholder size={iconSize} /> : undefined}
            view={view}
            onChange={(e) => {
                setText(e.target.value);
                onChange(e.target.value);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
            onChangeChips={onChipsChange}
            style={{ width: '70%', margin: '0 auto' }}
        />
    );
};

export const Chips: StoryObj<StoryPropsChips> = {
    args: {
        ...Default.args,
        chips: ['1 value', '2 value', '3 value', '4 value'],
    },
    render: (args) => <StoryChips {...args} />,
};

type StoryEmailValidationProps = StoryPropsDefault & {
    minLengthValue?: number;
    minLengthErrorMessage?: string;
    maxLengthValue?: number;
    maxLengthErrorMessage?: string;
    minHostLengthValue?: number;
    minHostLengthErrorMessage?: string;
    maxHostLengthValue?: number;
    maxHostLengthErrorMessage?: string;
    minDomainLengthValue?: number;
    minDomainLengthErrorMessage?: string;
    maxDomainLengthValue?: number;
    maxDomainLengthErrorMessage?: string;
    minZoneLengthValue?: number;
    minZoneLengthErrorMessage?: string;
    maxZoneLengthValue?: number;
    maxZoneLengthErrorMessage?: string;
    whitelistDomainsValue?: string;
    whitelistDomainsErrorMessage?: string;
    blacklistDomainsValue?: string;
    blacklistDomainsErrorMessage?: string;
};

const StoryEmailValidation = ({
    minLengthValue,
    minLengthErrorMessage,
    maxLengthValue,
    maxLengthErrorMessage,
    minHostLengthValue,
    minHostLengthErrorMessage,
    maxHostLengthValue,
    maxHostLengthErrorMessage,
    minDomainLengthValue,
    minDomainLengthErrorMessage,
    maxDomainLengthValue,
    maxDomainLengthErrorMessage,
    minZoneLengthValue,
    minZoneLengthErrorMessage,
    maxZoneLengthValue,
    maxZoneLengthErrorMessage,
    whitelistDomainsValue,
    whitelistDomainsErrorMessage,
    blacklistDomainsValue,
    blacklistDomainsErrorMessage,
    ...rest
}: StoryEmailValidationProps) => {
    const [error, setError] = useState('');

    const validationOptions = {
        minLength: {
            value: minLengthValue || undefined,
            errorMessage: minLengthErrorMessage || 'Почта слишком короткая',
        },
        maxLength: {
            value: maxLengthValue || undefined,
            errorMessage: maxLengthErrorMessage || 'Почта слишком длинная',
        },
        minHostLength: {
            value: minHostLengthValue || undefined,
            errorMessage: minHostLengthErrorMessage || 'Хост слишком короткий',
        },
        maxHostLength: {
            value: maxHostLengthValue || undefined,
            errorMessage: maxHostLengthErrorMessage || 'Хост слишком длинный',
        },
        minDomainLength: {
            value: minDomainLengthValue || undefined,
            errorMessage: minDomainLengthErrorMessage || 'Домен слишком короткий',
        },
        maxDomainLength: {
            value: maxDomainLengthValue || undefined,
            errorMessage: maxDomainLengthErrorMessage || 'Домен слишком длинный',
        },
        minZoneLength: {
            value: minZoneLengthValue || undefined,
            errorMessage: minZoneLengthErrorMessage || 'Доменная зона слишком короткая',
        },
        maxZoneLength: {
            value: maxZoneLengthValue || undefined,
            errorMessage: maxZoneLengthErrorMessage || 'Доменная зона слишком длинная',
        },
        whitelistDomains: {
            value: whitelistDomainsValue?.split(',') || undefined,
            errorMessage: whitelistDomainsErrorMessage || 'Домен не разрешен',
        },
        blacklistDomains: {
            value: blacklistDomainsValue?.split(',') || undefined,
            errorMessage: blacklistDomainsErrorMessage || 'Домен запрещен',
        },
    };

    const handleOnChange = () => {
        setError('');
    };

    const handleOnValidate = ({ errorMessage }: { errorMessage?: string }) => {
        setError(errorMessage || '');
    };

    return (
        <TextField
            label="Валидация почты"
            validationType="email"
            options={validationOptions}
            size="l"
            view={error ? 'negative' : 'default'}
            leftHelper={error || 'Валидация почты'}
            onChange={handleOnChange}
            onValidate={handleOnValidate}
            {...rest}
        />
    );
};

export const EmailValidation: StoryObj<StoryEmailValidationProps> = {
    argTypes: {
        ...disableProps(['view', 'size', 'maxLength', 'required', 'requiredPlacement', 'optional']),
    },
    args: {
        labelPlacement: 'outer',
        placeholder: 'Заполните поле',
        minLengthValue: 5,
        minLengthErrorMessage: 'Почта слишком короткая',
        maxLengthValue: 25,
        maxLengthErrorMessage: 'Почта слишком длинная',
        minHostLengthValue: 1,
        minHostLengthErrorMessage: 'Хост слишком короткий',
        maxHostLengthValue: 12,
        maxHostLengthErrorMessage: 'Хост слишком длинный',
        minDomainLengthValue: 1,
        minDomainLengthErrorMessage: 'Домен слишком короткий',
        maxDomainLengthValue: 6,
        maxDomainLengthErrorMessage: 'Домен слишком длинный',
        minZoneLengthValue: 1,
        minZoneLengthErrorMessage: 'Доменная зона слишком короткая',
        maxZoneLengthValue: 5,
        maxZoneLengthErrorMessage: 'Доменная зона слишком длинная',
        whitelistDomainsValue: 'gmail.com,yandex.ru,mail.ru,mail.com',
        whitelistDomainsErrorMessage: 'Домен не разрешен',
        blacklistDomainsValue: 'heh.org,hah.ha',
        blacklistDomainsErrorMessage: 'Домен запрещен',
    },
    render: (args) => <StoryEmailValidation {...args} />,
};

type StoryPasswordValidationProps = StoryPropsDefault & {
    minLengthValue?: number;
    minLengthErrorMessage?: string;
    maxLengthValue?: number;
    maxLengthErrorMessage?: string;
    includeUppercase?: boolean;
    includeUppercaseErrorMessage?: string;
    includeLowercase?: boolean;
    includeLowercaseErrorMessage?: string;
    includeDigits?: boolean;
    includeDigitsErrorMessage?: string;
    includeSpecialSymbols?: boolean;
    includeSpecialSymbolsErrorMessage?: string;
};

const StoryPasswordValidation = ({
    minLengthValue,
    minLengthErrorMessage,
    maxLengthValue,
    maxLengthErrorMessage,
    includeUppercase,
    includeUppercaseErrorMessage,
    includeLowercase,
    includeLowercaseErrorMessage,
    includeDigits,
    includeDigitsErrorMessage,
    includeSpecialSymbols,
    includeSpecialSymbolsErrorMessage,
    ...rest
}: StoryPasswordValidationProps) => {
    const [error, setError] = useState('');

    const validationOptions = {
        minLength: {
            value: minLengthValue || undefined,
            errorMessage: minLengthErrorMessage || 'Пароль слишком короткий',
        },
        maxLength: {
            value: maxLengthValue || undefined,
            errorMessage: maxLengthErrorMessage || 'Пароль слишком длинный',
        },
        includeUppercase: {
            value: includeUppercase,
            errorMessage: includeUppercaseErrorMessage || 'Пароль должен содержать хотя бы одну заглавную букву',
        },
        includeLowercase: {
            value: includeLowercase,
            errorMessage: includeLowercaseErrorMessage || 'Пароль должен содержать хотя бы одну строчную букву',
        },
        includeDigits: {
            value: includeDigits,
            errorMessage: includeDigitsErrorMessage || 'Пароль должен содержать хотя бы одну цифру',
        },
        includeSpecialSymbols: {
            value: includeSpecialSymbols,
            errorMessage:
                includeSpecialSymbolsErrorMessage || 'Пароль должен содержать хотя бы один специальный символ',
        },
    };

    const handleOnChange = () => {
        setError('');
    };

    const handleOnValidate = ({ errorMessage }: { errorMessage?: string }) => {
        setError(errorMessage || '');
    };

    return (
        <TextField
            label="Валидация пароля"
            validationType="password"
            options={validationOptions}
            size="l"
            view={error ? 'negative' : 'default'}
            leftHelper={error || 'Валидация пароля'}
            onChange={handleOnChange}
            onValidate={handleOnValidate}
            {...rest}
        />
    );
};

export const PasswordValidation: StoryObj<StoryPasswordValidationProps> = {
    argTypes: {
        ...disableProps(['view', 'size', 'maxLength', 'required', 'requiredPlacement', 'optional']),
    },
    args: {
        labelPlacement: 'outer',
        placeholder: 'Заполните поле',
        passwordHidden: false,
        minLengthValue: 5,
        minLengthErrorMessage: 'Пароль слишком короткий',
        maxLengthValue: 25,
        maxLengthErrorMessage: 'Пароль слишком длинный',
        includeUppercase: true,
        includeUppercaseErrorMessage: 'Пароль должен содержать хотя бы одну заглавную букву',
        includeLowercase: true,
        includeLowercaseErrorMessage: 'Пароль должен содержать хотя бы одну строчную букву',
        includeDigits: true,
        includeDigitsErrorMessage: 'Пароль должен содержать хотя бы одну цифру',
        includeSpecialSymbols: true,
        includeSpecialSymbolsErrorMessage: 'Пароль должен содержать хотя бы один специальный символ',
    },
    render: (args) => <StoryPasswordValidation {...args} />,
};
