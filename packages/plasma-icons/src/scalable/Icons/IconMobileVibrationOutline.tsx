import React from 'react';

import { MobileVibrationOutline as Icon16 } from '../Icon.assets.16/MobileVibrationOutline';
import { MobileVibrationOutline as Icon24 } from '../Icon.assets.24/MobileVibrationOutline';
import { MobileVibrationOutline as Icon36 } from '../Icon.assets.36/MobileVibrationOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMobileVibrationOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
