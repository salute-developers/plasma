import React from 'react';

import { ChatHumanFill as Icon16 } from '../Icon.assets.16/ChatHumanFill';
import { ChatHumanFill as Icon24 } from '../Icon.assets.24/ChatHumanFill';
import { ChatHumanFill as Icon36 } from '../Icon.assets.36/ChatHumanFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconChatHumanFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
