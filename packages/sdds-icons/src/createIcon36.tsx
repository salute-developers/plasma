import React, { forwardRef } from 'react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export const createIcon36 = (content: ReactNode) =>
    forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
        <svg
            ref={ref}
            width={36}
            height={36}
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            {content}
        </svg>
    ));
