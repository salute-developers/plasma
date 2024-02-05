import React from 'react';

import { PostcardOutline as Icon16 } from '../Icon.assets.16/PostcardOutline';
import { PostcardOutline as Icon24 } from '../Icon.assets.24/PostcardOutline';
import { PostcardOutline as Icon36 } from '../Icon.assets.36/PostcardOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPostcardOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
