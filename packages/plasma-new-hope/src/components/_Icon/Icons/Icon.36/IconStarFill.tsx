import React from 'react';

import { StarFill } from '../../Icon.assets/Icon.svg.36/StarFill';
import { IconRoot, IconProps } from '../../IconRoot';

export const IconStarFill36: React.FC<IconProps> = ({ size = 'xs', color, className, ...rest }) => {
    return <IconRoot className={className} size={size} color={color} icon={StarFill} {...rest} />;
};
