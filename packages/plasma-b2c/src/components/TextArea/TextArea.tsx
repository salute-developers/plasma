import React, { forwardRef } from 'react';
import { TextArea as TextAreaHope } from '@salutejs/plasma-hope';
import type { TextAreaProps } from '@salutejs/plasma-hope';

const TextAreaBase = TextAreaHope({ design: 'b2c' });

/**
 * Поле ввода многострочного текста.
 */
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => (
    <TextAreaBase {...props} ref={ref} />
));
