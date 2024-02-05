import React from 'react';

import { BatteryHorizChargeFill as Icon16 } from '../Icon.assets.16/BatteryHorizChargeFill';
import { BatteryHorizChargeFill as Icon24 } from '../Icon.assets.24/BatteryHorizChargeFill';
import { BatteryHorizChargeFill as Icon36 } from '../Icon.assets.36/BatteryHorizChargeFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBatteryHorizChargeFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
