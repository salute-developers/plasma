import React from 'react';

import { ContrastMaxOutline as Icon16 } from '../Icon.assets.16/ContrastMaxOutline';
import { ContrastMaxOutline as Icon24 } from '../Icon.assets.24/ContrastMaxOutline';
import { ContrastMaxOutline as Icon36 } from '../Icon.assets.36/ContrastMaxOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconContrastMaxOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
