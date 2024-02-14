import React from 'react';

import { BatteryHorizEmptyFill as Icon16 } from '../Icon.assets.16/BatteryHorizEmptyFill';
import { BatteryHorizEmptyFill as Icon24 } from '../Icon.assets.24/BatteryHorizEmptyFill';
import { BatteryHorizEmptyFill as Icon36 } from '../Icon.assets.36/BatteryHorizEmptyFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBatteryHorizEmptyFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
