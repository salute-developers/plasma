import React, { forwardRef } from 'react';
import type { ChangeEvent, FC } from 'react';
import { NumericFormat } from 'react-number-format';
import type { NumberFormatValues, SourceInfo } from 'react-number-format';

import type {
    CustomNumberFormatProps,
    CustomNumericFormatProps,
    InputComponentOmittedProps,
} from './NumberFormat.types';

export const composeNumberFormat = <T extends InputComponentOmittedProps>(InputComponent: FC<T>) => {
    return forwardRef<HTMLInputElement, T & CustomNumberFormatProps & CustomNumericFormatProps>(
        ({ thousandSeparator = ' ', decimalScale = 3, decimalSeparator = '.', onChange, ...rest }, outerRef) => {
            const handleChangeValue = (values: NumberFormatValues, sourceInfo: SourceInfo) => {
                if (onChange) {
                    const changeEvent = sourceInfo.event as ChangeEvent<HTMLInputElement>;
                    onChange(changeEvent, values);
                }
            };

            const InputComponentWithoutEllipsis = (props: T) => {
                return <InputComponent _textEllipsisEnable {...props} />;
            };

            return (
                <NumericFormat
                    thousandSeparator={thousandSeparator}
                    decimalScale={decimalScale}
                    decimalSeparator={decimalSeparator}
                    customInput={InputComponentWithoutEllipsis}
                    getInputRef={outerRef}
                    onValueChange={handleChangeValue}
                    {...rest}
                />
            );
        },
    );
};
