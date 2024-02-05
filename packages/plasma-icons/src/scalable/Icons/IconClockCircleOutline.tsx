import React from 'react';

import { ClockCircleOutline as Icon16 } from '../Icon.assets.16/ClockCircleOutline';
import { ClockCircleOutline as Icon24 } from '../Icon.assets.24/ClockCircleOutline';
import { ClockCircleOutline as Icon36 } from '../Icon.assets.36/ClockCircleOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconClockCircleOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
