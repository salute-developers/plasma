import React from 'react';

import { StarOutline } from '../../Icon.assets/Icon.svg.36/StarOutline';
import { IconRoot, IconProps } from '../../IconRoot';

export const IconStarOutline36: React.FC<IconProps> = ({ size = 'xs', color, className, ...rest }) => {
    return <IconRoot className={className} size={size} color={color} icon={StarOutline} {...rest} />;
};
