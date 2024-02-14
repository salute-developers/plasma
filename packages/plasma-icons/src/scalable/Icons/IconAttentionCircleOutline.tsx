import React from 'react';

import { AttentionCircleOutline as Icon16 } from '../Icon.assets.16/AttentionCircleOutline';
import { AttentionCircleOutline as Icon24 } from '../Icon.assets.24/AttentionCircleOutline';
import { AttentionCircleOutline as Icon36 } from '../Icon.assets.36/AttentionCircleOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconAttentionCircleOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
