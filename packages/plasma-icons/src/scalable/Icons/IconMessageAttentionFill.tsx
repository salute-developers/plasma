import React from 'react';

import { MessageAttentionFill as Icon16 } from '../Icon.assets.16/MessageAttentionFill';
import { MessageAttentionFill as Icon24 } from '../Icon.assets.24/MessageAttentionFill';
import { MessageAttentionFill as Icon36 } from '../Icon.assets.36/MessageAttentionFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMessageAttentionFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
