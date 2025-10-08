import React, { forwardRef } from 'react';
import type { KeyboardEvent } from 'react';
import cls from 'classnames';

import type { InputProps } from '../../DateTimePicker.types';

import { StyledInput } from './Input.styles';

type InputUIProps = {
    value: string;
    errorClass?: string;
    successClass?: string;
} & Omit<InputProps, 'value'>;

export const Input = forwardRef<HTMLInputElement, InputUIProps>(
    (
        {
            value,
            readOnly,
            disabled,
            placeholder,
            contentLeft,
            contentRight,
            textBefore,
            textAfter,
            required,
            requiredPlacement,
            hasRequiredIndicator,
            label,
            labelPlacement,
            keepPlaceholder,

            errorClass,
            successClass,

            onChangeValue,
            onSearch,
            onFocus,
            onBlur,
            onKeyDown,
            ...rest
        },
        ref,
    ) => {
        const handleSearch = (searchValue: string, event?: KeyboardEvent<HTMLInputElement>) => {
            if (onSearch) {
                onSearch(event, searchValue);
            }
        };

        return (
            <StyledInput
                ref={ref}
                className={cls(errorClass, successClass)}
                value={value}
                readOnly={readOnly}
                disabled={disabled}
                placeholder={placeholder}
                contentLeft={contentLeft}
                contentRight={contentRight}
                textBefore={textBefore}
                textAfter={textAfter}
                onChange={onChangeValue}
                onSearch={handleSearch}
                onFocus={onFocus}
                onBlur={onBlur}
                onKeyDown={onKeyDown}
                required={required}
                requiredPlacement={requiredPlacement}
                hasRequiredIndicator={hasRequiredIndicator}
                label={label}
                labelPlacement={labelPlacement}
                keepPlaceholder={keepPlaceholder}
                {...rest}
            />
        );
    },
);
