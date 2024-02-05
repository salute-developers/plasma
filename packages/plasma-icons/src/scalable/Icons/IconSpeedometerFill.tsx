import React from 'react';

import { SpeedometerFill as Icon16 } from '../Icon.assets.16/SpeedometerFill';
import { SpeedometerFill as Icon24 } from '../Icon.assets.24/SpeedometerFill';
import { SpeedometerFill as Icon36 } from '../Icon.assets.36/SpeedometerFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSpeedometerFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
