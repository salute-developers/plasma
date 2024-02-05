import React from 'react';

import { NewsFill as Icon16 } from '../Icon.assets.16/NewsFill';
import { NewsFill as Icon24 } from '../Icon.assets.24/NewsFill';
import { NewsFill as Icon36 } from '../Icon.assets.36/NewsFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconNewsFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
