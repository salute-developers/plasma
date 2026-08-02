import React, { forwardRef } from 'react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export const createIcon16 = (content: ReactNode) =>
    forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
        <svg
            ref={ref}
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            {content}
        </svg>
    ));
