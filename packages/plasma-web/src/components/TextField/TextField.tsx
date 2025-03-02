import React, { forwardRef, ReactNode } from 'react';
import type { TextFieldProps as TextFieldPropsOld } from '@salutejs/plasma-hope';
import { textFieldConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import type { PopoverPlacement, PopoverPlacementBasic } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './TextField.config';

const mergedConfig = mergeConfig(textFieldConfig, config);
export const TextFieldComponent = component(mergedConfig);

type newHopeTextFieldProps = React.ComponentProps<typeof TextFieldComponent>;

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

type TextFieldProps = Omit<TextFieldPropsOld, 'size' | 'helperText'> & {
    /**
     * Доступные размеры компонента
     */
    size?: 'xl' | 'l' | 'm' | 's' | 'xs';
    /**
     * Подсказка для поля ввода.
     */
    helperText?: ReactNode;
} & ClearProps &
    HintProps;

export type CustomTextFieldProps = TextFieldProps &
    Pick<
        newHopeTextFieldProps,
        | 'enumerationType'
        | 'chips'
        | 'chipType'
        | 'onChangeChips'
        | 'titleCaption'
        | 'labelPlacement'
        | 'keepPlaceholder'
        | 'required'
        | 'requiredPlacement'
        | 'optional'
        | 'chipView'
        | 'chipValidator'
        | 'textBefore'
        | 'textAfter'
    >;

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
        keepPlaceholder,
        placeholder,
        animatedHint,
        helperText,
        hintText,

        enumerationType,
        chips,
        chipView,
        chipValidator,
        onSearch,
        onChangeChips,
        chipType,

        size = 'l',

        ...rest
    } = props;

    /** TODO: #1064 Remove In plasma-2.0 */
    /* eslint-disable no-underscore-dangle */
    const _view = status ? statusToView[status] : 'default';
    let _labelPlacement = animatedHint ? animatedHintToLabelPlacement[animatedHint] : 'outer';
    let _label = label ? String(label) : undefined;

    const isLarge = size === 'l' || size === 'xl';

    if (!isLarge && _labelPlacement === 'inner' && !keepPlaceholder) {
        _label = undefined;
        _labelPlacement = 'outer';
    }

    if (isLarge && animatedHint === 'placeholder' && !label) {
        _label = placeholder;
        _labelPlacement = 'inner';
    }

    const labelProps = {
        label: _label,
        labelPlacement: _labelPlacement,
        keepPlaceholder,
    };

    if (enumerationType === 'chip') {
        return (
            <TextFieldComponent
                {...rest}
                {...labelProps}
                view={_view}
                size={size}
                placeholder={placeholder}
                leftHelper={helperText}
                ref={ref}
                enumerationType="chip"
                chips={chips}
                chipView={chipView}
                chipValidator={chipValidator}
                hintText={String(hintText || '')}
                onChangeChips={onChangeChips}
                chipType={chipType}
            />
        );
    }

    return (
        <TextFieldComponent
            {...rest}
            {...labelProps}
            view={_view}
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
