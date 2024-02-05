import React from 'react';

import { FolderPlusOutline as Icon16 } from '../Icon.assets.16/FolderPlusOutline';
import { FolderPlusOutline as Icon24 } from '../Icon.assets.24/FolderPlusOutline';
import { FolderPlusOutline as Icon36 } from '../Icon.assets.36/FolderPlusOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconFolderPlusOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
