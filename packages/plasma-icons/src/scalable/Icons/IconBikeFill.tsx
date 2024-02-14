import React from 'react';

import { BikeFill as Icon16 } from '../Icon.assets.16/BikeFill';
import { BikeFill as Icon24 } from '../Icon.assets.24/BikeFill';
import { BikeFill as Icon36 } from '../Icon.assets.36/BikeFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBikeFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
