import React, { forwardRef } from 'react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export const createIcon24 = (content: ReactNode) =>
    forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
        <svg
            ref={ref}
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            {content}
        </svg>
    ));
