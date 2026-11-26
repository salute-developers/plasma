import React, { forwardRef } from 'react';
import cls from 'classnames';

import { Input } from '../Input';
import type { InputProps } from '../Input';

import type { TextFieldProps } from './TextField.types';
import { classes } from './TextField.tokens';
import styles from './TextField.module.css';

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
    (
        {
            label,
            labelPlacement = 'outer',
            keepPlaceholder,
            requiredIndicator,
            requiredPlacement,
            optionalText,
            rootProps,
            'aria-label': ariaLabel,
            ...rest
        },
        ref,
    ) => {
        let indicator: InputProps['indicator'];
        if (optionalText) {
            indicator = { value: 'optional', optionalText };
        }
        if (requiredIndicator) {
            indicator = { value: 'required', placement: requiredPlacement };
        }

        return (
            <Input
                {...rest}
                ref={ref}
                rootProps={{ ...rootProps, className: cls(styles.root, classes.textFieldRoot, rootProps?.className) }}
                label={
                    labelPlacement === 'none' ? undefined : { value: label, placement: labelPlacement, keepPlaceholder }
                }
                indicator={indicator}
                aria-label={ariaLabel ?? (labelPlacement === 'none' ? label : undefined)}
                // Отсекаем внутренний API чипов и для потребителей без TypeScript.
                chips={undefined}
                hidePlaceholderOnChips={undefined}
            />
        );
    },
);
