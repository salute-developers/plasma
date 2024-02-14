import React from 'react';

import { NewsOutline as Icon16 } from '../Icon.assets.16/NewsOutline';
import { NewsOutline as Icon24 } from '../Icon.assets.24/NewsOutline';
import { NewsOutline as Icon36 } from '../Icon.assets.36/NewsOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconNewsOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
