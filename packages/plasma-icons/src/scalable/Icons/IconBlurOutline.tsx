import React from 'react';

import { BlurOutline as Icon16 } from '../Icon.assets.16/BlurOutline';
import { BlurOutline as Icon24 } from '../Icon.assets.24/BlurOutline';
import { BlurOutline as Icon36 } from '../Icon.assets.36/BlurOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBlurOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
