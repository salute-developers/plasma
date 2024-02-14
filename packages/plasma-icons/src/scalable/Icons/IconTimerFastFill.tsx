import React from 'react';

import { TimerFastFill as Icon16 } from '../Icon.assets.16/TimerFastFill';
import { TimerFastFill as Icon24 } from '../Icon.assets.24/TimerFastFill';
import { TimerFastFill as Icon36 } from '../Icon.assets.36/TimerFastFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTimerFastFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
