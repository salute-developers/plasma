import React, { HTMLAttributes } from 'react';
import type { CSSProperties } from 'react';

export const sizeMap = {
    xs: {
        scale: 1,
        size: 16,
    }, // 16px
    s: {
        scale: 1.5,
        size: 24,
    }, // 24px
    m: {
        scale: 2.25,
        size: 36,
    }, // 36px
};

export type IconSize = keyof typeof sizeMap;

export interface IconProps {
    size?: IconSize;
    /**
     * Цвет иконки. Можно передавать css-градиент
     */
    color?: string;
    className?: string;
    style?: CSSProperties;
}

interface IconRootProps extends IconProps, HTMLAttributes<HTMLDivElement> {
    size: IconSize;
    icon: React.FC<IconProps>;
}

const isGradient = (color: string) => /gradient/.test(color);

const iconMaskIds = new WeakMap<React.FC<IconProps>, number>();
let maskCounter = 0;

const getMaskId = (icon: React.FC<IconProps>, size: IconSize): string => {
    if (!iconMaskIds.has(icon)) {
        iconMaskIds.set(icon, maskCounter++);
    }
    return `plasma-icon-${iconMaskIds.get(icon) ?? maskCounter}-${size}`;
};

export const getIconComponent = (
    icon16: React.FC<IconProps> | null,
    icon24: React.FC<IconProps> | null,
    icon36: React.FC<IconProps> | null,
    size: number,
) => {
    if (size === 16 && icon16 !== null) {
        return icon16;
    }

    if (size === 24 && icon24 !== null) {
        return icon24;
    }

    if (size === 36 && icon36 !== null) {
        return icon36;
    }

    return icon16 || icon24 || icon36;
};

export const IconRoot: React.FC<IconRootProps> = ({ icon: Icon, size, color, className, style, ...rest }) => {
    const iconSize = `${sizeMap[size].scale}rem`;
    const resolvedColor = color || 'var(--plasma-colors-primary)';
    const gradient = isGradient(resolvedColor);

    return (
        <div
            aria-hidden
            style={
                {
                    width: iconSize,
                    height: iconSize,
                    flex: 'none',
                    ...style,
                } as CSSProperties
            }
            className={`icon-root-container ${className || ''}`}
            {...rest}
        >
            {gradient ? (
                <svg
                    width="100%"
                    height="100%"
                    viewBox={`0 0 ${sizeMap[size].size} ${sizeMap[size].size}`}
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: 'block' }}
                >
                    <defs>
                        <mask id={getMaskId(Icon, size)}>
                            <Icon color="white" size={size} />
                        </mask>
                    </defs>
                    <g mask={`url(#${getMaskId(Icon, size)})`}>
                        <foreignObject width="100%" height="100%">
                            <div style={{ width: '100%', height: '100%', background: resolvedColor }} />
                        </foreignObject>
                    </g>
                </svg>
            ) : (
                <Icon color={resolvedColor} size={size} style={{ display: 'block' }} />
            )}
        </div>
    );
};
