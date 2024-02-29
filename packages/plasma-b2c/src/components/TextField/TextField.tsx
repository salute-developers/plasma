import React, { forwardRef } from 'react';
import type { TextFieldProps } from '@salutejs/plasma-hope';
import { textFieldConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './TextField.config';

const mergedConfig = mergeConfig(textFieldConfig, config);
const TextFieldComponent = component(mergedConfig);

type newHopeTextFieldProps = React.ComponentProps<typeof TextFieldComponent>;
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
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
    const {
        view,
        status,

        label,
        caption,
        placeholder,

        helperText,

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

    return (
        <TextFieldComponent
            {...rest}
            view={_view}
            labelPlacement={_labelPlacement}
            label={_label}
            placeholder={_placeholder}
            leftHelper={helperText}
            ref={ref}
        />
    );
});
