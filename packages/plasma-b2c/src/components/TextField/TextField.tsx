import React, { forwardRef, useCallback } from 'react';
import { FieldHelper } from '@salutejs/plasma-core';
import type { FieldProps, InputProps } from '@salutejs/plasma-core';

import { FieldWrapper } from '../Field';

import { Placeholder } from './Placeholder';
import { Input } from './Input';
import { Field } from './Field';
import { Content } from './Content';
import { Caption } from './Caption';
import { textFieldProps } from './TextField.props';

export interface TextFieldProps extends Omit<FieldProps, 'size'>, InputProps {
    /**
     * Лейбл сверху.
     */
    caption?: string;

    /**
     * Доступные размеры компонента.
     */
    size?: 'l' | 'm' | 's' | 'xs';
}

/**
 * Поле ввода текста.
 */
// eslint-disable-next-line prefer-arrow-callback
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
    {
        id,
        disabled,
        status,
        label,
        placeholder,
        contentLeft,
        contentRight,
        caption,
        helperText,
        style,
        className,
        onChange,
        size = 'm',
        ...rest
    },
    ref,
) {
    const placeLabel = (label || placeholder) as string | undefined;

    const handleChange = useCallback(
        (event) => {
            const { maxLength, value } = event.target;

            if (!onChange || (maxLength !== -1 && value.length > maxLength)) {
                return;
            }

            onChange(event);
        },
        [onChange],
    );

    return (
        <Field
            $disabled={disabled}
            $isContentLeft={Boolean(contentLeft)}
            $isContentRight={Boolean(contentRight)}
            $isHelper={Boolean(helperText)}
            properties={textFieldProps[size]}
            witPlaceholder={!!placeLabel}
            contentLeft={contentLeft}
            status={status}
            style={style}
            className={className}
        >
            {caption && <Caption id={id ? `${id}-label` : undefined}>{caption}</Caption>}
            <FieldWrapper status={status}>
                {contentLeft && <Content pos="left">{contentLeft}</Content>}
                <Input
                    ref={ref}
                    id={id}
                    placeholder={placeLabel}
                    disabled={disabled}
                    status={status}
                    aria-labelledby={id ? `${id}-label` : undefined}
                    aria-describedby={id ? `${id}-helpertext` : undefined}
                    onChange={handleChange}
                    {...rest}
                />
                {placeLabel && (
                    <Placeholder visible={size !== 'xs'} htmlFor={id}>
                        {placeLabel}
                    </Placeholder>
                )}
                {contentRight && <Content pos="right">{contentRight}</Content>}
            </FieldWrapper>
            {helperText && <FieldHelper id={id ? `${id}-helpertext` : undefined}>{helperText}</FieldHelper>}
        </Field>
    );
});
