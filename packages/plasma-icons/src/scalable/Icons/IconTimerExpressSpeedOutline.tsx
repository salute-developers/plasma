import React from 'react';

import { TimerExpressSpeedOutline as Icon16 } from '../Icon.assets.16/TimerExpressSpeedOutline';
import { TimerExpressSpeedOutline as Icon24 } from '../Icon.assets.24/TimerExpressSpeedOutline';
import { TimerExpressSpeedOutline as Icon36 } from '../Icon.assets.36/TimerExpressSpeedOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTimerExpressSpeedOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
