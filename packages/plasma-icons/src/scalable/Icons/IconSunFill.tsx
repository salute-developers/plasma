import React from 'react';

import { SunFill as Icon16 } from '../Icon.assets.16/SunFill';
import { SunFill as Icon24 } from '../Icon.assets.24/SunFill';
import { SunFill as Icon36 } from '../Icon.assets.36/SunFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSunFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
