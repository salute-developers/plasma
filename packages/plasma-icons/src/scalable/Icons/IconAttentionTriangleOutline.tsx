import React from 'react';

import { AttentionTriangleOutline as Icon16 } from '../Icon.assets.16/AttentionTriangleOutline';
import { AttentionTriangleOutline as Icon24 } from '../Icon.assets.24/AttentionTriangleOutline';
import { AttentionTriangleOutline as Icon36 } from '../Icon.assets.36/AttentionTriangleOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconAttentionTriangleOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
