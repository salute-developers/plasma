import React from 'react';

import { HourglassTopOutline as Icon16 } from '../Icon.assets.16/HourglassTopOutline';
import { HourglassTopOutline as Icon24 } from '../Icon.assets.24/HourglassTopOutline';
import { HourglassTopOutline as Icon36 } from '../Icon.assets.36/HourglassTopOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHourglassTopOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
