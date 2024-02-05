import React from 'react';

import { BatteryEmptyOutline as Icon16 } from '../Icon.assets.16/BatteryEmptyOutline';
import { BatteryEmptyOutline as Icon24 } from '../Icon.assets.24/BatteryEmptyOutline';
import { BatteryEmptyOutline as Icon36 } from '../Icon.assets.36/BatteryEmptyOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBatteryEmptyOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
