import React from 'react';

import { TimerFill as Icon16 } from '../Icon.assets.16/TimerFill';
import { TimerFill as Icon24 } from '../Icon.assets.24/TimerFill';
import { TimerFill as Icon36 } from '../Icon.assets.36/TimerFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTimerFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
