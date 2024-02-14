import React from 'react';

import { StarRecommendFill as Icon16 } from '../Icon.assets.16/StarRecommendFill';
import { StarRecommendFill as Icon24 } from '../Icon.assets.24/StarRecommendFill';
import { StarRecommendFill as Icon36 } from '../Icon.assets.36/StarRecommendFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconStarRecommendFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
