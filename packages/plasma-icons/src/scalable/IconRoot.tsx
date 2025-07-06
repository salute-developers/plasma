import React, { HTMLAttributes } from 'react';
import type { CSSProperties } from 'react';
import styled from 'styled-components';

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
    color?: string;
    className?: string;
    style?: CSSProperties;
}

interface IconRootProps extends IconProps, HTMLAttributes<HTMLDivElement> {
    size: IconSize;
    icon: React.FC<IconProps>;
}

const IconsRoot = styled.div`
    display: inline-flex;
    width: var(--icon-size);
    height: var(--icon-size);
    flex: 0 0 var(--icon-size);
`;

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
    return (
        <IconsRoot
            aria-hidden
            style={{ '--icon-size': `${sizeMap[size].scale}rem`, ...style } as CSSProperties}
            className={className || ''}
            {...rest}
        >
            <Icon color={color || 'var(--plasma-colors-primary)'} size={size} />
        </IconsRoot>
    );
};
