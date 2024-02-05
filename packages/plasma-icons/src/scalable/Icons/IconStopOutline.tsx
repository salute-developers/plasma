import React from 'react';

import { StopOutline as Icon16 } from '../Icon.assets.16/StopOutline';
import { StopOutline as Icon24 } from '../Icon.assets.24/StopOutline';
import { StopOutline as Icon36 } from '../Icon.assets.36/StopOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconStopOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
