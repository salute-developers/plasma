import React from 'react';

import { SquareOutline as Icon16 } from '../Icon.assets.16/SquareOutline';
import { SquareOutline as Icon24 } from '../Icon.assets.24/SquareOutline';
import { SquareOutline as Icon36 } from '../Icon.assets.36/SquareOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSquareOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
