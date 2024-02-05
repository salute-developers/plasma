import React from 'react';

import { MessageChatOutline as Icon16 } from '../Icon.assets.16/MessageChatOutline';
import { MessageChatOutline as Icon24 } from '../Icon.assets.24/MessageChatOutline';
import { MessageChatOutline as Icon36 } from '../Icon.assets.36/MessageChatOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMessageChatOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
