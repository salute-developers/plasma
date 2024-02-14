import React from 'react';

import { PictureOutline as Icon16 } from '../Icon.assets.16/PictureOutline';
import { PictureOutline as Icon24 } from '../Icon.assets.24/PictureOutline';
import { PictureOutline as Icon36 } from '../Icon.assets.36/PictureOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPictureOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
