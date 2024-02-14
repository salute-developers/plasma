import React from 'react';

import { Button2x2BotRFill as Icon16 } from '../Icon.assets.16/Button2x2BotRFill';
import { Button2x2BotRFill as Icon24 } from '../Icon.assets.24/Button2x2BotRFill';
import { Button2x2BotRFill as Icon36 } from '../Icon.assets.36/Button2x2BotRFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconButton2x2BotRFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
