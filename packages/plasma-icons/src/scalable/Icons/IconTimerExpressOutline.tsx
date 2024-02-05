import React from 'react';

import { TimerExpressOutline as Icon16 } from '../Icon.assets.16/TimerExpressOutline';
import { TimerExpressOutline as Icon24 } from '../Icon.assets.24/TimerExpressOutline';
import { TimerExpressOutline as Icon36 } from '../Icon.assets.36/TimerExpressOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTimerExpressOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
