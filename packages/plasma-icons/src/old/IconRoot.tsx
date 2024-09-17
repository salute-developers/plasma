import React from 'react';
import type { CSSProperties } from 'react';
import styled from 'styled-components';

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

const StyledRoot = styled.div`
    display: inline-flex;

    width: var(--icon-size);
    height: var(--icon-size);
    flex: 0 0 var(--icon-size);
`;

export const IconRoot: React.FC<IconRootProps> = ({ icon: IconComponent, size, color, className }) => {
    const c = color || 'var(--plasma-colors-primary)';

    const IconRootVars = { '--icon-size': `${sizeMap[size]}rem` } as CSSProperties;

    return (
        <StyledRoot aria-hidden style={IconRootVars} className={className}>
            <IconComponent color={c} size={size} />
        </StyledRoot>
    );
};
