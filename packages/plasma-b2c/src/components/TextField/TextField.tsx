import React, { ComponentProps, forwardRef, ReactNode } from 'react';
import type { TextFieldProps } from '@salutejs/plasma-hope';
import { textFieldConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import type { PopoverPlacement, PopoverPlacementBasic } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './TextField.config';

const mergedConfig = mergeConfig(textFieldConfig, config);
export const TextFieldComponent = component(mergedConfig);

type newHopeTextFieldProps = ComponentProps<typeof TextFieldComponent>;

export type RequiredProps =
    | {
          /**
           * Флаг обязательности поля
           */
          required: true;
          /**
           * Задает выравнивание индикатора обязательности поля
           * @default right
           */
          requiredPlacement?: 'left' | 'right';
          /**
           * Флаг необязательности поля
           */
          optional?: false;
      }
    | {
          /**
           * Флаг обязательности поля
           */
          required?: false;
          /**
           * Задает выравнивание индикатора обязательности поля
           * @default right
           */
          requiredPlacement?: never;
          /**
           * Флаг необязательности поля
           */
          optional?: boolean;
      };

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
    Pick<
        newHopeTextFieldProps,
        | 'enumerationType'
        | 'chips'
        | 'chipType'
        | 'onChangeChips'
        | 'titleCaption'
        | 'labelPlacement'
        | 'keepPlaceholder'
    >) &
    RequiredProps &
    ClearProps &
    HintProps;

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

        required,
        requiredPlacement,
        optional,
        label,
        labelPlacement,
        keepPlaceholder,
        caption,
        placeholder,
        helperText,
        hintText,

        enumerationType,
        chips,
        onSearch,
        onChangeChips,
        chipType,

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
    if (rest.size === 'xs' && _labelPlacement === 'inner' && !keepPlaceholder) {
        _placeholder = _label;
        _label = undefined;
        _labelPlacement = 'outer';
    }

    const labelProps = {
        label: _label,
        labelPlacement: _labelPlacement,
        keepPlaceholder,
    };

    const requiredProps = required
        ? {
              required,
              requiredPlacement,
          }
        : {
              optional,
          };

    if (enumerationType === 'chip') {
        return (
            <TextFieldComponent
                {...rest}
                {...requiredProps}
                {...labelProps}
                view={_view}
                placeholder={_placeholder}
                leftHelper={helperText}
                ref={ref}
                enumerationType="chip"
                chips={chips}
                hintText={String(hintText || '')}
                onChangeChips={onChangeChips}
                chipType={chipType}
            />
        );
    }

    return (
        <TextFieldComponent
            {...rest}
            {...requiredProps}
            {...labelProps}
            view={_view}
            placeholder={_placeholder}
            leftHelper={helperText}
            ref={ref}
            enumerationType="plain"
            hintText={String(hintText || '')}
            onSearch={onSearch}
        />
    );
});
