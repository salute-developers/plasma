import React from 'react';

import { MarkerFill as Icon16 } from '../Icon.assets.16/MarkerFill';
import { MarkerFill as Icon24 } from '../Icon.assets.24/MarkerFill';
import { MarkerFill as Icon36 } from '../Icon.assets.36/MarkerFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMarkerFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
