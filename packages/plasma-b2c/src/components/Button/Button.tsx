import React, { forwardRef } from 'react';
import { Button as ButtonHope } from '@salutejs/plasma-hope';
import type { ButtonProps } from '@salutejs/plasma-hope';

/**
 * Кнопка.
 * Поддерживает несколько режимов отображения (`view`) и размеров (`size`).
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
    <ButtonHope design="b2c" {...props} ref={ref} />
));
