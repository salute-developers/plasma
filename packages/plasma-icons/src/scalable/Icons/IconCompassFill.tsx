import React from 'react';

import { CompassFill as Icon16 } from '../Icon.assets.16/CompassFill';
import { CompassFill as Icon24 } from '../Icon.assets.24/CompassFill';
import { CompassFill as Icon36 } from '../Icon.assets.36/CompassFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCompassFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
