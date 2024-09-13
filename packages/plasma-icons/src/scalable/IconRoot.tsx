import React from 'react';

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
}

interface IconRootProps extends IconProps {
    size: IconSize;
    icon: React.FC<IconProps>;
}

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

export const IconRoot: React.FC<IconRootProps> = ({ icon: Icon, size, color, className }) => {
    const c = color || 'var(--plasma-colors-primary)';

    const data = `${sizeMap[size].scale}rem`;

    const RootStyle = {
        display: 'inline-flex',
        width: `${data}`,
        height: `${data}`,
        flex: `0 0 ${data}`,
    };

    return (
        <div aria-hidden style={RootStyle} className={className}>
            <Icon color={c} size={size} />
        </div>
    );
};
