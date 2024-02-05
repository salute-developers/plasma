import React from 'react';

import { MagicDailyFill as Icon16 } from '../Icon.assets.16/MagicDailyFill';
import { MagicDailyFill as Icon24 } from '../Icon.assets.24/MagicDailyFill';
import { MagicDailyFill as Icon36 } from '../Icon.assets.36/MagicDailyFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMagicDailyFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
