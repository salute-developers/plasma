import React from 'react';

import { PlusSquareOutline as Icon16 } from '../Icon.assets.16/PlusSquareOutline';
import { PlusSquareOutline as Icon24 } from '../Icon.assets.24/PlusSquareOutline';
import { PlusSquareOutline as Icon36 } from '../Icon.assets.36/PlusSquareOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPlusSquareOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
