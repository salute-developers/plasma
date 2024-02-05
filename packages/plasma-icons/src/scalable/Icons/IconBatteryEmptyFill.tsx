import React from 'react';

import { BatteryEmptyFill as Icon16 } from '../Icon.assets.16/BatteryEmptyFill';
import { BatteryEmptyFill as Icon24 } from '../Icon.assets.24/BatteryEmptyFill';
import { BatteryEmptyFill as Icon36 } from '../Icon.assets.36/BatteryEmptyFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBatteryEmptyFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
