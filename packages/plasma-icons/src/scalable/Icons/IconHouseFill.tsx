import React from 'react';

import { HouseFill as Icon16 } from '../Icon.assets.16/HouseFill';
import { HouseFill as Icon24 } from '../Icon.assets.24/HouseFill';
import { HouseFill as Icon36 } from '../Icon.assets.36/HouseFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHouseFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
