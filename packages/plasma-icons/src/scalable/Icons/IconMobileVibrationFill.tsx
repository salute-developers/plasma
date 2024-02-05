import React from 'react';

import { MobileVibrationFill as Icon16 } from '../Icon.assets.16/MobileVibrationFill';
import { MobileVibrationFill as Icon24 } from '../Icon.assets.24/MobileVibrationFill';
import { MobileVibrationFill as Icon36 } from '../Icon.assets.36/MobileVibrationFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMobileVibrationFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
