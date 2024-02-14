import React from 'react';

import { ChatFill as Icon16 } from '../Icon.assets.16/ChatFill';
import { ChatFill as Icon24 } from '../Icon.assets.24/ChatFill';
import { ChatFill as Icon36 } from '../Icon.assets.36/ChatFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconChatFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
