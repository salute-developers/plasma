import React from 'react';

import { HeartDashOutline } from '../Icon.assets/HeartDashOutline';
import { IconRoot, IconProps } from '../IconRoot';

export const IconHeartDashOutline: React.FC<IconProps> = ({ size = 's', color, className, ...rest }) => {
    return <IconRoot className={className} size={size} color={color} icon={HeartDashOutline} {...rest} />;
};
