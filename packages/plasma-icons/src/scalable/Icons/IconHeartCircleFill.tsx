import React from 'react';

import { HeartCircleFill as Icon16 } from '../Icon.assets.16/HeartCircleFill';
import { HeartCircleFill as Icon24 } from '../Icon.assets.24/HeartCircleFill';
import { HeartCircleFill as Icon36 } from '../Icon.assets.36/HeartCircleFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHeartCircleFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
