import React, { forwardRef, useRef, useState } from 'react';
import type { ChangeEvent, FC, ClipboardEvent } from 'react';
import { NumericFormat, numericFormatter } from 'react-number-format';
import type { NumberFormatValues, SourceInfo } from 'react-number-format';
import { useForkRef } from '@salutejs/plasma-core';

import type {
    CustomNumberFormatProps,
    CustomNumericFormatProps,
    InputComponentOmittedProps,
} from './NumberFormat.types';

export const composeNumberFormat = <T extends InputComponentOmittedProps>(InputComponent: FC<T>) => {
    return forwardRef<HTMLInputElement, T & CustomNumberFormatProps & CustomNumericFormatProps>(
        (
            {
                thousandSeparator = ' ',
                decimalScale = 3,
                decimalSeparator = '.',
                disabled,
                value: outerValue,
                onChange,
                onPaste,
                ...rest
            },
            outerRef,
        ) => {
            const inputRef = useRef<HTMLInputElement>(null);
            const inputForkRef = useForkRef(inputRef, outerRef);

            const [innerValue, setInnerValue] = useState('');

            const value = numericFormatter(String(outerValue ?? innerValue), {
                thousandSeparator,
                decimalScale,
                decimalSeparator,
            });

            const handleChangeValue = (values: NumberFormatValues, sourceInfo: SourceInfo) => {
                const changeEvent = sourceInfo.event as ChangeEvent<HTMLInputElement>;
                setInnerValue(values.value);

                if (onChange) {
                    onChange(changeEvent, values);
                }
            };

            const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
                if (disabled) {
                    return;
                }

                if (decimalSeparator !== '.' && inputRef.current) {
                    if (!Number.isNaN(Number(event.clipboardData.getData('text/plain')))) {
                        event.preventDefault();

                        const pastedValue = event.clipboardData.getData('text/plain').replace('.', decimalSeparator);
                        const input = event.target as HTMLInputElement;
                        const startPos = input.selectionStart || 0;

                        const newCursorPos = startPos + pastedValue.length;
                        setInnerValue(pastedValue);

                        setTimeout(() => {
                            inputRef.current?.setSelectionRange(newCursorPos, newCursorPos);
                        }, 10);
                    }
                }

                if (onPaste) {
                    onPaste(event);
                }
            };

            return (
                <NumericFormat
                    value={value}
                    thousandSeparator={thousandSeparator}
                    decimalScale={decimalScale}
                    decimalSeparator={decimalSeparator}
                    customInput={InputComponent}
                    getInputRef={inputForkRef}
                    _textEllipsisDisable
                    onValueChange={handleChangeValue}
                    onPaste={handlePaste}
                    {...rest}
                />
            );
        },
    );
};
