import React, { forwardRef } from 'react';
import type { TextFieldProps } from '@salutejs/plasma-hope';
import { textFieldConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './TextField.config';

const mergedConfig = mergeConfig(textFieldConfig, config);
const TextFieldComponent = component(mergedConfig);

type newHopeTextFieldProps = React.ComponentProps<typeof TextFieldComponent>;
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
    const _size = size === 'xs' ? 's' : size;

    if (enumerationType === 'chip') {
        return (
            <TextFieldComponent
                {...rest}
                view={_view}
                size={_size}
                labelPlacement={_labelPlacement}
                label={_label}
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
            size={_size}
            labelPlacement={_labelPlacement}
            label={_label}
            placeholder={placeholder}
            leftHelper={helperText}
            ref={ref}
            enumerationType="plain"
            onSearch={onSearch}
        />
    );
});
