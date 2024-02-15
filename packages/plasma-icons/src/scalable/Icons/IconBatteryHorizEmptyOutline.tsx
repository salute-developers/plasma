import React from 'react';

import { BatteryHorizEmptyOutline as Icon16 } from '../Icon.assets.16/BatteryHorizEmptyOutline';
import { BatteryHorizEmptyOutline as Icon24 } from '../Icon.assets.24/BatteryHorizEmptyOutline';
import { BatteryHorizEmptyOutline as Icon36 } from '../Icon.assets.36/BatteryHorizEmptyOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBatteryHorizEmptyOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
