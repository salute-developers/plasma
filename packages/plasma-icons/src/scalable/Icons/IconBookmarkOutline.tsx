import React from 'react';

import { BookmarkOutline as Icon16 } from '../Icon.assets.16/BookmarkOutline';
import { BookmarkOutline as Icon24 } from '../Icon.assets.24/BookmarkOutline';
import { BookmarkOutline as Icon36 } from '../Icon.assets.36/BookmarkOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBookmarkOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
