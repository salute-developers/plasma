import React from 'react';

import { HeartFill as Icon16 } from '../Icon.assets.16/HeartFill';
import { HeartFill as Icon24 } from '../Icon.assets.24/HeartFill';
import { HeartFill as Icon36 } from '../Icon.assets.36/HeartFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHeartFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
