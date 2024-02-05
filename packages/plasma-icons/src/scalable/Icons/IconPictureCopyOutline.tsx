import React from 'react';

import { PictureCopyOutline as Icon16 } from '../Icon.assets.16/PictureCopyOutline';
import { PictureCopyOutline as Icon24 } from '../Icon.assets.24/PictureCopyOutline';
import { PictureCopyOutline as Icon36 } from '../Icon.assets.36/PictureCopyOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPictureCopyOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
