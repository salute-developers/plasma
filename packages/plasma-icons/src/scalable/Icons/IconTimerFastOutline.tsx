import React from 'react';

import { TimerFastOutline as Icon16 } from '../Icon.assets.16/TimerFastOutline';
import { TimerFastOutline as Icon24 } from '../Icon.assets.24/TimerFastOutline';
import { TimerFastOutline as Icon36 } from '../Icon.assets.36/TimerFastOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTimerFastOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
