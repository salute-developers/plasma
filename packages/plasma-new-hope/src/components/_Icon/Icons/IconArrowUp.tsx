import React, { HTMLAttributes } from 'react';

import { ArrowUp } from '../Icon.assets/ArrowUp';
import { IconRoot, IconProps } from '../IconRoot';

export const IconArrowUp: React.FC<IconProps & HTMLAttributes<HTMLDivElement>> = ({
    size = 'xs',
    color,
    className,
    ...rest
}) => {
    return <IconRoot className={className} size={size} color={color} icon={ArrowUp} {...rest} />;
};
