import React, { forwardRef } from 'react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export type IconProps = ComponentPropsWithoutRef<'svg'> & {
    gradient?: string;
};

export const createIcon = (content: ReactNode, size: number, maskImage: string) => {
    return forwardRef<SVGSVGElement, IconProps>(({ gradient, ...props }, ref) => {
        return (
            <svg
                ref={ref}
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                {gradient ? (
                    <foreignObject width="100%" height="100%">
                        <div
                            style={{
                                width: '100%',
                                height: '100%',
                                background: gradient,
                                maskImage: `url("${maskImage}")`,
                                maskMode: 'alpha',
                                maskPosition: 'center',
                                maskRepeat: 'no-repeat',
                                maskSize: '100% 100%',
                                WebkitMaskImage: `url("${maskImage}")`,
                                WebkitMaskPosition: 'center',
                                WebkitMaskRepeat: 'no-repeat',
                                WebkitMaskSize: '100% 100%',
                            }}
                        />
                    </foreignObject>
                ) : (
                    content
                )}
            </svg>
        );
    });
};
