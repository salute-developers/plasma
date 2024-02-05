import React from 'react';

import { SleepOutline as Icon16 } from '../Icon.assets.16/SleepOutline';
import { SleepOutline as Icon24 } from '../Icon.assets.24/SleepOutline';
import { SleepOutline as Icon36 } from '../Icon.assets.36/SleepOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSleepOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
