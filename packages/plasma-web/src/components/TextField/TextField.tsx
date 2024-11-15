import React, { forwardRef, ReactNode } from 'react';
import type { TextFieldProps as TextFieldPropsOld } from '@salutejs/plasma-hope';
import { textFieldConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import type { PopoverPlacement, PopoverPlacementBasic } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './TextField.config';

const mergedConfig = mergeConfig(textFieldConfig, config);
export const TextFieldComponent = component(mergedConfig);

type newHopeTextFieldProps = React.ComponentProps<typeof TextFieldComponent>;

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

type TextFieldProps = TextFieldPropsOld & RequiredProps & ClearProps & HintProps & ValidationProps;

export type CustomTextFieldProps = TextFieldProps &
    Pick<newHopeTextFieldProps, 'enumerationType' | 'chips' | 'onChangeChips' | 'titleCaption'>;

const statusToView: Record<NonNullable<TextFieldProps['status']>, NonNullable<newHopeTextFieldProps['view']>> = {
    success: 'positive',
    warning: 'warning',
    error: 'negative',
};
const animatedHintToLabelPlacement: Record<
    NonNullable<TextFieldProps['animatedHint']>,
    NonNullable<newHopeTextFieldProps['labelPlacement']>
> = {
    placeholder: 'outer',
    label: 'inner',
};

/**
 * Поле ввода текста.
 */
export const TextField = forwardRef<HTMLInputElement, CustomTextFieldProps>((props, ref) => {
    const {
        status,

        label,
        placeholder,
        animatedHint,
        helperText,
        hintText,

        enumerationType,
        chips,
        onSearch,
        onChangeChips,

        size = 'l',

        ...rest
    } = props;

    /** TODO: #1064 Remove In plasma-2.0 */
    /* eslint-disable no-underscore-dangle */
    const _view = status ? statusToView[status] : 'default';
    let _labelPlacement = animatedHint ? animatedHintToLabelPlacement[animatedHint] : 'outer';
    let _label = label ? String(label) : undefined;
    if (size !== 'l' && _labelPlacement === 'inner') {
        _label = undefined;
        _labelPlacement = 'outer';
    }
    if (size === 'l' && animatedHint === 'placeholder' && !label) {
        _label = placeholder;
        _labelPlacement = 'inner';
    }

    if (enumerationType === 'chip') {
        return (
            <TextFieldComponent
                {...rest}
                view={_view}
                labelPlacement={_labelPlacement}
                label={_label}
                size={size}
                placeholder={placeholder}
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
            size={size}
            placeholder={placeholder}
            leftHelper={helperText}
            ref={ref}
            enumerationType="plain"
            hintText={String(hintText || '')}
            onSearch={onSearch}
        />
    );
});
