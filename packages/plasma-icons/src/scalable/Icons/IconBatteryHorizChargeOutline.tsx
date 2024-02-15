import React from 'react';

import { BatteryHorizChargeOutline as Icon16 } from '../Icon.assets.16/BatteryHorizChargeOutline';
import { BatteryHorizChargeOutline as Icon24 } from '../Icon.assets.24/BatteryHorizChargeOutline';
import { BatteryHorizChargeOutline as Icon36 } from '../Icon.assets.36/BatteryHorizChargeOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBatteryHorizChargeOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
