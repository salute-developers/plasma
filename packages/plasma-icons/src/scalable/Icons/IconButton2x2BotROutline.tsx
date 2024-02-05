import React from 'react';

import { Button2x2BotROutline as Icon16 } from '../Icon.assets.16/Button2x2BotROutline';
import { Button2x2BotROutline as Icon24 } from '../Icon.assets.24/Button2x2BotROutline';
import { Button2x2BotROutline as Icon36 } from '../Icon.assets.36/Button2x2BotROutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconButton2x2BotROutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
