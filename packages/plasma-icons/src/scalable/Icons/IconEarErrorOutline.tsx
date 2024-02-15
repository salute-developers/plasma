import React from 'react';

import { EarErrorOutline as Icon16 } from '../Icon.assets.16/EarErrorOutline';
import { EarErrorOutline as Icon24 } from '../Icon.assets.24/EarErrorOutline';
import { EarErrorOutline as Icon36 } from '../Icon.assets.36/EarErrorOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconEarErrorOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
