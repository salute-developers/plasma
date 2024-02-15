import React from 'react';

import { CubeFill as Icon16 } from '../Icon.assets.16/CubeFill';
import { CubeFill as Icon24 } from '../Icon.assets.24/CubeFill';
import { CubeFill as Icon36 } from '../Icon.assets.36/CubeFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCubeFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
