import React from 'react';

import { AlarmDoneOutline as Icon16 } from '../Icon.assets.16/AlarmDoneOutline';
import { AlarmDoneOutline as Icon24 } from '../Icon.assets.24/AlarmDoneOutline';
import { AlarmDoneOutline as Icon36 } from '../Icon.assets.36/AlarmDoneOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconAlarmDoneOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
