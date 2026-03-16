import React from 'react';

import { HeartOutline } from '../Icon.assets/HeartOutline';
import { IconRoot, IconProps } from '../IconRoot';

export const IconHeartOutline: React.FC<IconProps> = ({ size = 's', color, className, ...rest }) => {
    console.log(size);
    return <IconRoot className={className} size={size} color={color} icon={HeartOutline} {...rest} />;
};
