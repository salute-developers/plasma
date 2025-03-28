import React, { HTMLAttributes } from 'react';

import { SwapVert } from '../Icon.assets/SwapVert';
import { IconRoot, IconProps } from '../IconRoot';

export const IconSwapVert: React.FC<IconProps & HTMLAttributes<HTMLDivElement>> = ({
    size = 'xs',
    color,
    className,
    ...rest
}) => {
    return <IconRoot className={className} size={size} color={color} icon={SwapVert} {...rest} />;
};
