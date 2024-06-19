import React from 'react';
import styled, { css } from 'styled-components';

const sizeMap = {
    xs: 1, // 16px
    s: 1.5, // 24px
    m: 2.25, // 36px
};

export type IconSize = keyof typeof sizeMap;

export interface IconProps {
    size?: IconSize;
    color?: string;
    className?: string;
}

interface IconRootProps extends IconProps {
    size: IconSize;
    icon: React.FC<IconProps>;
}

const StyledRoot = styled.div<{ w: string }>`
    display: inline-flex;
    ${({ w }) => css`
        width: ${w};
        height: ${w};
        flex: 0 0 ${w};
    `}
`;

export const IconRoot: React.FC<IconRootProps> = ({ icon: IconComponent, size, color, className }) => {
    const c = color || 'var(--plasma-colors-primary)';

    const w = `${sizeMap[size]}rem`;

    return (
        <StyledRoot aria-hidden w={w} className={className}>
            <IconComponent color={c} size={size} />
        </StyledRoot>
    );
};
