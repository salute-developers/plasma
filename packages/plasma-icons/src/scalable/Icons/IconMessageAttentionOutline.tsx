import React from 'react';

import { MessageAttentionOutline as Icon16 } from '../Icon.assets.16/MessageAttentionOutline';
import { MessageAttentionOutline as Icon24 } from '../Icon.assets.24/MessageAttentionOutline';
import { MessageAttentionOutline as Icon36 } from '../Icon.assets.36/MessageAttentionOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMessageAttentionOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
