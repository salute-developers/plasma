import React from 'react';

import { StarHalfFill } from '../../Icon.assets/Icon.svg.24/StarHalfFill';
import { IconRoot, IconProps } from '../../IconRoot';

export const IconStarHalfFill24: React.FC<IconProps> = ({ size = 'xs', color, className, ...rest }) => {
    return <IconRoot className={className} size={size} color={color} icon={StarHalfFill} {...rest} />;
};
