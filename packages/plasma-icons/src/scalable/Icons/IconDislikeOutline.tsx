import React from 'react';

import { DislikeOutline as Icon16 } from '../Icon.assets.16/DislikeOutline';
import { DislikeOutline as Icon24 } from '../Icon.assets.24/DislikeOutline';
import { DislikeOutline as Icon36 } from '../Icon.assets.36/DislikeOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDislikeOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
