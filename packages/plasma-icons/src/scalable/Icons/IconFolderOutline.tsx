import React from 'react';

import { FolderOutline as Icon16 } from '../Icon.assets.16/FolderOutline';
import { FolderOutline as Icon24 } from '../Icon.assets.24/FolderOutline';
import { FolderOutline as Icon36 } from '../Icon.assets.36/FolderOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconFolderOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
