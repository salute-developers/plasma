import React from 'react';

import { StopFill as Icon16 } from '../Icon.assets.16/StopFill';
import { StopFill as Icon24 } from '../Icon.assets.24/StopFill';
import { StopFill as Icon36 } from '../Icon.assets.36/StopFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconStopFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
