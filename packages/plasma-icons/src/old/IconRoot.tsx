import React from 'react';
import type { CSSProperties } from 'react';
import styled from 'styled-components';

export const sizeMap = {
    xs: 1, // 16px
    s: 1.5, // 24px
    m: 2.25, // 36px
};

export type IconSize = keyof typeof sizeMap;

export interface IconProps {
    size?: IconSize;
    color?: string;
    className?: string;
    style?: CSSProperties;
}

interface IconRootProps extends IconProps {
    size: IconSize;
    icon: React.FC<IconProps>;
}

const IconsRoot = styled.div`
    display: inline-flex;
    width: var(--icon-size);
    height: var(--icon-size);
    flex: 0 0 var(--icon-size);
`;

export const IconRoot: React.FC<IconRootProps> = ({ icon: Icon, size, color, className, style, ...rest }) => (
    <IconsRoot
        aria-hidden
        style={{ '--icon-size': `${sizeMap[size]}rem`, ...style } as CSSProperties}
        className={className || ''}
        {...rest}
    >
        <Icon color={color || 'var(--plasma-colors-primary)'} size={size} />
    </IconsRoot>
);
