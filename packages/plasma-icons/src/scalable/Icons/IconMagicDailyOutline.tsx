import React from 'react';

import { MagicDailyOutline as Icon16 } from '../Icon.assets.16/MagicDailyOutline';
import { MagicDailyOutline as Icon24 } from '../Icon.assets.24/MagicDailyOutline';
import { MagicDailyOutline as Icon36 } from '../Icon.assets.36/MagicDailyOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMagicDailyOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
