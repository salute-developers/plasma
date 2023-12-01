import React from 'react';
import { styled } from '@linaria/react';

const sizeMap = {
    xxs: 1, // 16px
    xs: 1, // 16px
    s: 1.5, // 24px
    m: 2.25, // 36px
    l: 2.75, // 44px
    xl: 3.5, // 56p
    xxl: 6.25, // 100px
};

export type IconSize = keyof typeof sizeMap;

export interface IconProps {
    size?: IconSize;
    color?: string;
    className?: string;
    /*
     * Прорпс, который принимает название css-переменной.
     * В значении токена может быть как rem, так и другая единица измерения (значение задается через конфиг).
     * @example
     * const token = '--plasma-icon-size';
     * ...
     * <Icon sizeCustomPtoperty={token} {...rest}/>
     */
    sizeCustomProperty?: string;
}

interface IconRootProps extends IconProps {
    size: IconSize;
    icon: React.FC<IconProps>;
}

const StyledRoot = styled.div<{ w: string }>`
    display: inline-flex;
    width: ${({ w }) => w};
    height: ${({ w }) => w};
    flex: 0 0 ${({ w }) => w};
`;

export const IconRoot: React.FC<IconRootProps> = ({
    icon: IconComponent,
    size,
    color,
    className,
    sizeCustomProperty,
}) => {
    const c = color || 'var(--plasma-colors-primary)';

    const w = sizeCustomProperty ? `var(${sizeCustomProperty})` : `${sizeMap[size]}rem`;

    return (
        <StyledRoot aria-hidden w={w} className={className}>
            <IconComponent color={c} size={size} />
        </StyledRoot>
    );
};
