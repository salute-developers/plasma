import React from 'react';

import { BookmarkStarOutline as Icon16 } from '../Icon.assets.16/BookmarkStarOutline';
import { BookmarkStarOutline as Icon24 } from '../Icon.assets.24/BookmarkStarOutline';
import { BookmarkStarOutline as Icon36 } from '../Icon.assets.36/BookmarkStarOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBookmarkStarOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
