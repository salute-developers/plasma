import React, { forwardRef } from 'react';
import type { TextFieldProps } from '@salutejs/plasma-hope';
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

export type CustomTextFieldProps = (TextFieldProps &
    Pick<newHopeTextFieldProps, 'enumerationType' | 'chips' | 'onChangeChips'>) &
    RequiredProps;

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
            onSearch={onSearch}
        />
    );
});
