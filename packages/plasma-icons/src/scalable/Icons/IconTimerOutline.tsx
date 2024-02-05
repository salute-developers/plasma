import React from 'react';

import { TimerOutline as Icon16 } from '../Icon.assets.16/TimerOutline';
import { TimerOutline as Icon24 } from '../Icon.assets.24/TimerOutline';
import { TimerOutline as Icon36 } from '../Icon.assets.36/TimerOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTimerOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
