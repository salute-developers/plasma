import React from 'react';

import { SpeedometerOutline as Icon16 } from '../Icon.assets.16/SpeedometerOutline';
import { SpeedometerOutline as Icon24 } from '../Icon.assets.24/SpeedometerOutline';
import { SpeedometerOutline as Icon36 } from '../Icon.assets.36/SpeedometerOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSpeedometerOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
