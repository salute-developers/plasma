import React, { forwardRef } from 'react';
import type { ReactNode } from 'react';

interface RadioGroupProps {
    children: ReactNode;
}

export const RadioGroup = forwardRef<HTMLInputElement, RadioGroupProps>(({ children, ...rest }, ref) => {
    return (
        <div role="radiogroup" ref={ref} {...rest}>
            {children}
        </div>
    );
});
