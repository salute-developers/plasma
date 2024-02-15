import React from 'react';

import { BookmarkStackFill as Icon16 } from '../Icon.assets.16/BookmarkStackFill';
import { BookmarkStackFill as Icon24 } from '../Icon.assets.24/BookmarkStackFill';
import { BookmarkStackFill as Icon36 } from '../Icon.assets.36/BookmarkStackFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBookmarkStackFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
