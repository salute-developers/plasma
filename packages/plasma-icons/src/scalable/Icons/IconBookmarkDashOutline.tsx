import React from 'react';

import { BookmarkDashOutline as Icon16 } from '../Icon.assets.16/BookmarkDashOutline';
import { BookmarkDashOutline as Icon24 } from '../Icon.assets.24/BookmarkDashOutline';
import { BookmarkDashOutline as Icon36 } from '../Icon.assets.36/BookmarkDashOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBookmarkDashOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
