import React, { ChangeEventHandler, forwardRef, useCallback } from 'react';
import { FieldHelper } from '@salutejs/plasma-core';
import type { FieldProps, InputProps } from '@salutejs/plasma-core';

import { FieldWrapper } from '../Field';

import { Placeholder } from './Placeholder';
import { Input } from './Input';
import { Field } from './Field';
import { Content } from './Content';
import { Caption } from './Caption';
import { textFieldProps } from './TextField.props';

export enum TextFieldView {
    default = 'default',
    innerLabel = 'innerLabel',
}

export interface TextFieldProps extends Omit<FieldProps, 'size'>, InputProps {
    /**
     * Выполняет роль label.
     */
    caption?: string;

    /**
     * Доступные размеры компонента.
     */
    size?: 'l' | 'm' | 's' | 'xs';

    /**
     * Определяет внешний вид компонента и поведение label/placeholder.
     */
    view?: TextFieldView;
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
        placeholder: placeholderInput,
        contentLeft,
        contentRight,
        caption,
        helperText,
        style,
        className,
        onChange,
        size = 'm',
        view,
        ...rest
    },
    ref,
) {
    const placeholder = (label || placeholderInput) as string;

    const hasTextFieldDefaultView = view === TextFieldView.default;

    const withCaption = !view || hasTextFieldDefaultView;
    const withoutCaption = !caption && !hasTextFieldDefaultView;

    const captionOrPlaceholder = !withCaption ? caption : placeholder;
    const currentId = id ? `${id}-label` : undefined;
    const ariaDescribedBy = id ? `${id}-helpertext` : undefined;

    const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
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
            withDefaultPadding={withCaption || withoutCaption}
            properties={textFieldProps[size]}
            contentLeft={contentLeft}
            status={status}
            style={style}
            className={className}
        >
            <Caption visible={withCaption} id={currentId} caption={caption} />
            <FieldWrapper status={status}>
                {contentLeft && <Content pos="left">{contentLeft}</Content>}
                <Input
                    ref={ref}
                    id={id}
                    placeholder={placeholder}
                    disabled={disabled}
                    status={status}
                    aria-labelledby={currentId}
                    aria-describedby={ariaDescribedBy}
                    onChange={handleChange}
                    {...rest}
                />
                {captionOrPlaceholder && (
                    <Placeholder withCaption={withCaption} visible={size !== 'xs'} htmlFor={id}>
                        {captionOrPlaceholder}
                    </Placeholder>
                )}
                {contentRight && <Content pos="right">{contentRight}</Content>}
            </FieldWrapper>
            {helperText && <FieldHelper id={ariaDescribedBy}>{helperText}</FieldHelper>}
        </Field>
    );
});
