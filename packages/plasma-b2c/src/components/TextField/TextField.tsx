import React, { forwardRef } from 'react';
import { TextField as TextFieldHope } from '@salutejs/plasma-hope';
import type { TextFieldProps } from '@salutejs/plasma-hope';

/**
 * Поле ввода текста.
 */
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => (
    <TextFieldHope design="b2c" {...props} ref={ref} />
));
