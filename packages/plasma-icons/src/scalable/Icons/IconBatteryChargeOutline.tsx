import React from 'react';

import { BatteryChargeOutline as Icon16 } from '../Icon.assets.16/BatteryChargeOutline';
import { BatteryChargeOutline as Icon24 } from '../Icon.assets.24/BatteryChargeOutline';
import { BatteryChargeOutline as Icon36 } from '../Icon.assets.36/BatteryChargeOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBatteryChargeOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
