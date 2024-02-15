import React from 'react';

import { HourglassTopFill as Icon16 } from '../Icon.assets.16/HourglassTopFill';
import { HourglassTopFill as Icon24 } from '../Icon.assets.24/HourglassTopFill';
import { HourglassTopFill as Icon36 } from '../Icon.assets.36/HourglassTopFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHourglassTopFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
