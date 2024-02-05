import React from 'react';

import { BookmarkDashFill as Icon16 } from '../Icon.assets.16/BookmarkDashFill';
import { BookmarkDashFill as Icon24 } from '../Icon.assets.24/BookmarkDashFill';
import { BookmarkDashFill as Icon36 } from '../Icon.assets.36/BookmarkDashFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBookmarkDashFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
