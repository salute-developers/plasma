import React from 'react';

import { MessagePersonChatOutline as Icon16 } from '../Icon.assets.16/MessagePersonChatOutline';
import { MessagePersonChatOutline as Icon24 } from '../Icon.assets.24/MessagePersonChatOutline';
import { MessagePersonChatOutline as Icon36 } from '../Icon.assets.36/MessagePersonChatOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMessagePersonChatOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
