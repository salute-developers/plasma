import React, { forwardRef } from 'react';
import { TextArea as TextAreaHope } from '@salutejs/plasma-hope';
import type { TextAreaProps } from '@salutejs/plasma-hope';

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => (
    <TextAreaHope design="b2c" {...props} ref={ref} />
));
