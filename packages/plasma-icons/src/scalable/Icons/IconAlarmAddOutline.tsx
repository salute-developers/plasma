import React from 'react';

import { AlarmAddOutline as Icon16 } from '../Icon.assets.16/AlarmAddOutline';
import { AlarmAddOutline as Icon24 } from '../Icon.assets.24/AlarmAddOutline';
import { AlarmAddOutline as Icon36 } from '../Icon.assets.36/AlarmAddOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconAlarmAddOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
