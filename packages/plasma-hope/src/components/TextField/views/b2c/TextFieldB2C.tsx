import React, { forwardRef } from 'react';
import { FieldHelper } from '@salutejs/plasma-core';

import { TextFieldPropsCommon, TextFieldView } from '../../types';

import { Placeholder } from './Placeholder';
import { Input } from './Input';
import { Field, FieldWrapper } from './Field';
import { Content } from './Content';
import { Caption } from './Caption';
import { textFieldProps } from './TextField.props';

// eslint-disable-next-line prefer-arrow-callback
export const TextFieldB2C = forwardRef<HTMLInputElement, TextFieldPropsCommon>(function TextField(
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
        size = 'm',
        view,
        onChange,
        onKeyUp,
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
                    onChange={onChange}
                    onKeyUp={onKeyUp}
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
