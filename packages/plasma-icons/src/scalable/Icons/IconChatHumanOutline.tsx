import React from 'react';

import { ChatHumanOutline as Icon16 } from '../Icon.assets.16/ChatHumanOutline';
import { ChatHumanOutline as Icon24 } from '../Icon.assets.24/ChatHumanOutline';
import { ChatHumanOutline as Icon36 } from '../Icon.assets.36/ChatHumanOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconChatHumanOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
