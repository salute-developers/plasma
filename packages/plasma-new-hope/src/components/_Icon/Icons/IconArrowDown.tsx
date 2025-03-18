import React, { HTMLAttributes } from 'react';

import { ArrowDown } from '../Icon.assets/ArrowDown';
import { IconRoot, IconProps } from '../IconRoot';

export const IconArrowDown: React.FC<IconProps & HTMLAttributes<HTMLDivElement>> = ({
    size = 'xs',
    color,
    className,
    ...rest
}) => {
    return <IconRoot className={className} size={size} color={color} icon={ArrowDown} {...rest} />;
};
