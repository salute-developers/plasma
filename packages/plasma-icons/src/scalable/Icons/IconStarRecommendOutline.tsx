import React from 'react';

import { StarRecommendOutline as Icon16 } from '../Icon.assets.16/StarRecommendOutline';
import { StarRecommendOutline as Icon24 } from '../Icon.assets.24/StarRecommendOutline';
import { StarRecommendOutline as Icon36 } from '../Icon.assets.36/StarRecommendOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconStarRecommendOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
