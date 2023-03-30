import React, { forwardRef } from 'react';
import { TextField as TextFieldHope } from '@salutejs/plasma-hope';
import type { TextFieldProps } from '@salutejs/plasma-hope';

export const TextFieldBase = TextFieldHope({ design: 'b2c' });

/**
 * Поле ввода текста.
 */
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => (
    <TextFieldBase {...props} ref={ref} />
));
