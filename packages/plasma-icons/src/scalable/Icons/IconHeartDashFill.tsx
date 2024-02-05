import React from 'react';

import { HeartDashFill as Icon16 } from '../Icon.assets.16/HeartDashFill';
import { HeartDashFill as Icon24 } from '../Icon.assets.24/HeartDashFill';
import { HeartDashFill as Icon36 } from '../Icon.assets.36/HeartDashFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHeartDashFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
