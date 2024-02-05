import React from 'react';

import { UmbrellaOutline as Icon16 } from '../Icon.assets.16/UmbrellaOutline';
import { UmbrellaOutline as Icon24 } from '../Icon.assets.24/UmbrellaOutline';
import { UmbrellaOutline as Icon36 } from '../Icon.assets.36/UmbrellaOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconUmbrellaOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
