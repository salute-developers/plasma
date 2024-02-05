import React from 'react';

import { StarCircleFill as Icon16 } from '../Icon.assets.16/StarCircleFill';
import { StarCircleFill as Icon24 } from '../Icon.assets.24/StarCircleFill';
import { StarCircleFill as Icon36 } from '../Icon.assets.36/StarCircleFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconStarCircleFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
