import React, { forwardRef, useRef } from 'react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type IconProps = ComponentPropsWithoutRef<'svg'>;

const isGradient = (color: IconProps['color']): color is string => typeof color === 'string' && /gradient/.test(color);

let maskCounter = 0;

export const createIcon = (content: ReactNode, size: number) => {
    return forwardRef<SVGSVGElement, IconProps>(({ color, ...props }, ref) => {
        const maskIdRef = useRef('');

        if (!maskIdRef.current) {
            maskIdRef.current = `sdds-icon-${maskCounter++}-${size}`;
        }

        const maskId = maskIdRef.current;
        const gradient = isGradient(color);

        return (
            <svg
                ref={ref}
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color={gradient ? undefined : color}
                {...props}
            >
                {gradient ? (
                    <>
                        <defs>
                            <mask id={maskId}>
                                <g color="white">{content}</g>
                            </mask>
                        </defs>
                        <g mask={`url(#${maskId})`}>
                            <foreignObject width="100%" height="100%">
                                <div style={{ width: '100%', height: '100%', background: color }} />
                            </foreignObject>
                        </g>
                    </>
                ) : (
                    content
                )}
            </svg>
        );
    });
};
