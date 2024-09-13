import React from 'react';

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

export const IconRoot: React.FC<IconRootProps> = ({ icon: IconComponent, size, color, className }) => {
    const c = color || 'var(--plasma-colors-primary)';

    const data = `${sizeMap[size]}rem`;

    const RootStyle = {
        display: 'inline-flex',
        width: `${data}`,
        height: `${data}`,
        flex: `0 0 ${data}`,
    };

    return (
        <div aria-hidden style={RootStyle} className={className}>
            <IconComponent color={c} size={size} />
        </div>
    );
};
