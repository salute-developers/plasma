import React from 'react';

import { PawOutline as Icon16 } from '../Icon.assets.16/PawOutline';
import { PawOutline as Icon24 } from '../Icon.assets.24/PawOutline';
import { PawOutline as Icon36 } from '../Icon.assets.36/PawOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPawOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
