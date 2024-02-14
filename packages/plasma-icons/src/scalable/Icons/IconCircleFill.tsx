import React from 'react';

import { CircleFill as Icon16 } from '../Icon.assets.16/CircleFill';
import { CircleFill as Icon24 } from '../Icon.assets.24/CircleFill';
import { CircleFill as Icon36 } from '../Icon.assets.36/CircleFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCircleFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
