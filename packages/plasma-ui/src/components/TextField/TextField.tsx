import React, { forwardRef, useCallback, KeyboardEvent } from 'react';
import styled from 'styled-components';
import { FieldRoot, FieldPlaceholder, FieldContent, Input, secondary } from '@salutejs/plasma-core';
import type { FieldProps, InputProps } from '@salutejs/plasma-core';

import { FieldHelper, applyInputStyles } from '../Field';
import { spatnavClassNameAttrs } from '../../utils';

export interface TextFieldProps extends FieldProps, InputProps {
    /**
     * Callback по нажатию Enter
     */
    onSearch?: (value: string, event?: KeyboardEvent<HTMLInputElement>) => void;
}

const StyledInput = styled(Input).attrs(spatnavClassNameAttrs)`
    ${applyInputStyles};

    border-radius: 1rem;

    &::placeholder {
        opacity: 0;
    }

    &:placeholder-shown + ${FieldPlaceholder} {
        color: ${({ status }) => (status ? null : secondary)};
    }
`;

/**
 * Поле ввода текста.
 */
// eslint-disable-next-line prefer-arrow-callback
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
    {
        id,
        size = 'l',
        disabled,
        status,
        label,
        placeholder,
        contentLeft,
        contentRight,
        helperText,
        style,
        className,
        onChange,
        onSearch,
        ...rest
    },
    ref,
) {
    const placeLabel = (label || placeholder) as string | undefined;

    const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
        (event) => {
            const { maxLength, value } = event.target;

            if (!onChange || (maxLength !== -1 && value.length > maxLength)) {
                return;
            }

            onChange(event);
        },
        [onChange],
    );

    const handleSearch = useCallback(
        (event: KeyboardEvent<HTMLInputElement>) => {
            if (event.keyCode === 13 && onSearch) {
                onSearch((event.target as HTMLInputElement).value, event);
            }
        },
        [onSearch],
    );

    return (
        <FieldRoot
            $size={size}
            $disabled={disabled}
            $isContentLeft={Boolean(contentLeft)}
            $isContentRight={Boolean(contentRight)}
            $isHelper={Boolean(helperText)}
            status={status}
            style={style}
            className={className}
        >
            {contentLeft && <FieldContent pos="left">{contentLeft}</FieldContent>}
            <StyledInput
                $size={size}
                ref={ref}
                id={id}
                placeholder={placeLabel}
                disabled={disabled}
                status={status}
                aria-describedby={id ? `${id}-helpertext` : undefined}
                onChange={handleChange}
                onKeyUp={onSearch && handleSearch}
                {...rest}
            />
            {placeLabel && size === 'l' && <FieldPlaceholder htmlFor={id}>{placeLabel}</FieldPlaceholder>}
            {contentRight && <FieldContent pos="right">{contentRight}</FieldContent>}
            {helperText && <FieldHelper id={id ? `${id}-helpertext` : undefined}>{helperText}</FieldHelper>}
        </FieldRoot>
    );
});
