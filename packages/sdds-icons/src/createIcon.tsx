import React, { forwardRef } from 'react';
import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from 'react';

export type IconProps = ComponentPropsWithoutRef<'svg'> & {
    gradient?: string;
    /**
     * Цвет второго слоя duotone-иконки. По умолчанию совпадает с `currentColor`.
     */
    secondaryColor?: string;
    /**
     * Прозрачность второго слоя duotone-иконки от 0 до 1. По умолчанию берётся из исходного SVG.
     */
    secondaryOpacity?: number;
};

const getStyle = (style: CSSProperties | undefined, secondaryColor?: string, secondaryOpacity?: number) => {
    if (secondaryColor === undefined && secondaryOpacity === undefined) {
        return style;
    }

    return {
        '--sdds-icon-secondary-color': secondaryColor,
        '--sdds-icon-secondary-opacity': secondaryOpacity,
        ...style,
    } as CSSProperties;
};

export const createIcon = (content: ReactNode, size: number, maskImage: string) => {
    return forwardRef<SVGSVGElement, IconProps>(({ gradient, secondaryColor, secondaryOpacity, ...props }, ref) => {
        return (
            <svg
                ref={ref}
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                style={getStyle(props.style, secondaryColor, secondaryOpacity)}
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
