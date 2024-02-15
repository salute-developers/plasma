import React from 'react';

import { MessagesOutline as Icon16 } from '../Icon.assets.16/MessagesOutline';
import { MessagesOutline as Icon24 } from '../Icon.assets.24/MessagesOutline';
import { MessagesOutline as Icon36 } from '../Icon.assets.36/MessagesOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMessagesOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
