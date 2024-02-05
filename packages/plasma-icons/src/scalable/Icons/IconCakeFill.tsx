import React from 'react';

import { CakeFill as Icon16 } from '../Icon.assets.16/CakeFill';
import { CakeFill as Icon24 } from '../Icon.assets.24/CakeFill';
import { CakeFill as Icon36 } from '../Icon.assets.36/CakeFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCakeFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
