import React, { forwardRef } from 'react';
import { Button as ButtonHope } from '@salutejs/plasma-hope';
import type { ButtonProps } from '@salutejs/plasma-hope';

export const ButtonBase = ButtonHope({ design: 'b2c' });

/**
 * Кнопка.
 * Поддерживает несколько режимов отображения (`view`) и размеров (`size`).
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => <ButtonBase {...props} ref={ref} />);
