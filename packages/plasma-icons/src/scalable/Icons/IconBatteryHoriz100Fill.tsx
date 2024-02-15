import React from 'react';

import { BatteryHoriz100Fill as Icon16 } from '../Icon.assets.16/BatteryHoriz100Fill';
import { BatteryHoriz100Fill as Icon24 } from '../Icon.assets.24/BatteryHoriz100Fill';
import { BatteryHoriz100Fill as Icon36 } from '../Icon.assets.36/BatteryHoriz100Fill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBatteryHoriz100Fill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
