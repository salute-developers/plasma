import React, { ComponentProps, forwardRef, ReactNode } from 'react';
import type { TextFieldProps } from '@salutejs/plasma-hope';
import { textFieldConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import type { PopoverPlacement, PopoverPlacementBasic } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './TextField.config';

const mergedConfig = mergeConfig(textFieldConfig, config);
export const TextFieldComponent = component(mergedConfig);

type newHopeTextFieldProps = ComponentProps<typeof TextFieldComponent>;

type ValidationOption<T> = {
    value?: T;
    errorMessage?: string;
};

type PasswordValidationOptions = {
    minLength?: ValidationOption<number>;
    maxLength?: ValidationOption<number>;
    includeUppercase?: ValidationOption<boolean>;
    includeLowercase?: ValidationOption<boolean>;
    includeDigits?: ValidationOption<boolean>;
    includeSpecialSymbols?: ValidationOption<boolean>;
};

type EmailValidationOptions = {
    customEmailRegex?: ValidationOption<RegExp>;
    minLength?: ValidationOption<number>;
    maxLength?: ValidationOption<number>;
    minHostLength?: ValidationOption<number>;
    maxHostLength?: ValidationOption<number>;
    minDomainLength?: ValidationOption<number>;
    maxDomainLength?: ValidationOption<number>;
    minZoneLength?: ValidationOption<number>;
    maxZoneLength?: ValidationOption<number>;
    whitelistDomains?: ValidationOption<string[]>;
    blacklistDomains?: ValidationOption<string[]>;
};

type OnValidateArgs = {
    isValid: boolean;
    errorMessage?: string;
};

type ValidationProps =
    | {
          /*
           * Тип валидации
           */
          validationType?: never;
          /*
           * Опции валидации
           * @description
           * Содержит массив опций валидации с сообщением ошибки
           */
          options?: never;
          /*
           * Состояние сокрытия оригинального пароля
           */
          passwordHidden?: never;
          /*
           * Функция, вызываемая при валидации значения.
           * @description
           * Вызывается при событии onBlur и по нажатию Enter, когда фокус на поле ввода
           */
          onValidate?: never;
      }
    | {
          validationType: 'password';
          options?: PasswordValidationOptions;
          passwordHidden?: boolean;
          onValidate?: (args: OnValidateArgs) => void;
      }
    | {
          validationType: 'email';
          options?: EmailValidationOptions;
          passwordHidden?: never;
          onValidate?: (args: OnValidateArgs) => void;
      };

type RequiredProps = {
    /**
     * Задает выравнивание индикатора обязательности поля
     * @default right
     */
    requiredPlacement?: 'left' | 'right';
} & (
    | {
          /**
           * Флаг обязательности поля
           */
          required: true;
          /**
           * Флаг необязательности поля
           */
          optional?: never | false;
      }
    | {
          /**
           * Флаг необязательности поля
           */
          optional?: true;
          /**
           * Флаг обязательности поля
           */
          required?: never | false;
      }
);

type ClearProps =
    | {
          /**
           * view применяется с clear-токенами
           */
          clear?: boolean;
          /**
           * отобразить ли divider
           */
          hasDivider?: boolean;
      }
    | {
          /**
           * view применяется с clear-токенами
           */
          clear?: false;
          /**
           * отобразить ли divider
           */
          hasDivider?: never;
      };

type HintProps =
    | {
          /**
           * Текст тултипа
           */
          hintText: string;
          /**
           * Способ открытия тултипа - наведение или клик мышью
           */
          hintTrigger?: 'hover' | 'click';
          /**
           * Вид тултипа
           */
          hintView?: 'default';
          /**
           * Размер тултипа
           */
          hintSize?: 's' | 'm';
          /**
           * Элемент, рядом с которым произойдет вызов всплывающего окна.
           * Если свойство не задано, применится иконка по умолчанию.
           */
          hintTarget?: ReactNode;
          /**
           * Направление раскрытия тултипа.
           */
          hintPlacement?: PopoverPlacement | Array<PopoverPlacementBasic>;
          /**
           * Видимость стрелки (хвоста).
           */
          hintHasArrow?: boolean;
          /**
           * Отступ окна относительно элемента, у которого оно вызвано.
           * @default
           * [0, 8]
           */
          hintOffset?: [number, number];
          /**
           * Ширина окна (в rem).
           */
          hintWidth?: string;
          /**
           * Слот для контента слева, например `Icon`.
           */
          hintContentLeft?: ReactNode;
      }
    | {
          hintTrigger?: never;
          hintText?: never;
          hintView?: never;
          hintSize?: never;
          hintTarget?: never;
          hintPlacement?: never;
          hintHasArrow?: never;
          hintOffset?: never;
          hintWidth?: never;
          hintContentLeft?: never;
      };

export type CustomTextFieldProps = (TextFieldProps &
    Pick<newHopeTextFieldProps, 'enumerationType' | 'chips' | 'onChangeChips' | 'titleCaption'>) &
    RequiredProps &
    ClearProps &
    HintProps &
    ValidationProps;

const statusToView: Record<NonNullable<TextFieldProps['status']>, NonNullable<newHopeTextFieldProps['view']>> = {
    success: 'positive',
    warning: 'warning',
    error: 'negative',
};

const viewToLabelPlacement: Record<
    NonNullable<TextFieldProps['view']>,
    NonNullable<newHopeTextFieldProps['labelPlacement']>
> = {
    default: 'outer',
    innerLabel: 'inner',
};

/**
 * Поле ввода текста.
 */
export const TextField = forwardRef<HTMLInputElement, CustomTextFieldProps>((props, ref) => {
    const {
        view,
        status,

        label,
        caption,
        placeholder,
        helperText,
        hintText,

        enumerationType,
        chips,
        onSearch,
        onChangeChips,

        ...rest
    } = props;

    /** TODO: https://github.com/salute-developers/plasma/issues/1064 Remove In plasma-2.0 */
    /* eslint-disable no-underscore-dangle */
    const _view = status ? statusToView[status] : 'default';
    let _labelPlacement = view ? viewToLabelPlacement[view] : 'outer';
    let _label = label ? String(label) : caption;
    let _placeholder = placeholder;
    // NOTE: rest.size https://github.com/salute-developers/plasma/issues/961
    // if size is undefined <TextFieldComp size={size} /> would not use defaults
    if (rest.size === 'xs' && _labelPlacement === 'inner') {
        _placeholder = _label;
        _label = undefined;
        _labelPlacement = 'outer';
    }

    if (enumerationType === 'chip') {
        return (
            <TextFieldComponent
                {...rest}
                view={_view}
                labelPlacement={_labelPlacement}
                label={_label}
                placeholder={_placeholder}
                leftHelper={helperText}
                ref={ref}
                enumerationType="chip"
                chips={chips}
                hintText={String(hintText || '')}
                onChangeChips={onChangeChips}
            />
        );
    }

    return (
        <TextFieldComponent
            {...rest}
            view={_view}
            labelPlacement={_labelPlacement}
            label={_label}
            placeholder={_placeholder}
            leftHelper={helperText}
            ref={ref}
            enumerationType="plain"
            hintText={String(hintText || '')}
            onSearch={onSearch}
        />
    );
});
