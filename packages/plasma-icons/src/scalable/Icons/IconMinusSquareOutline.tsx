import React from 'react';

import { MinusSquareOutline as Icon16 } from '../Icon.assets.16/MinusSquareOutline';
import { MinusSquareOutline as Icon24 } from '../Icon.assets.24/MinusSquareOutline';
import { MinusSquareOutline as Icon36 } from '../Icon.assets.36/MinusSquareOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMinusSquareOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
