import React from 'react';

import { TimerAddOutline as Icon16 } from '../Icon.assets.16/TimerAddOutline';
import { TimerAddOutline as Icon24 } from '../Icon.assets.24/TimerAddOutline';
import { TimerAddOutline as Icon36 } from '../Icon.assets.36/TimerAddOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTimerAddOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
