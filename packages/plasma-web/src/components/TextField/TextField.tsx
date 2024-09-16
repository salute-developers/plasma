import React, { forwardRef } from 'react';
import type { TextFieldProps as TextFieldPropsOld } from '@salutejs/plasma-hope';
import { textFieldConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './TextField.config';

const mergedConfig = mergeConfig(textFieldConfig, config);
export const TextFieldComponent = component(mergedConfig);

type newHopeTextFieldProps = React.ComponentProps<typeof TextFieldComponent>;

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

type TextFieldProps = TextFieldPropsOld & RequiredProps;

export type CustomTextFieldProps = TextFieldProps &
    Pick<newHopeTextFieldProps, 'enumerationType' | 'chips' | 'onChangeChips'>;

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
            onSearch={onSearch}
        />
    );
});
