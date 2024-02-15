import React from 'react';

import { CloseSquareOutline as Icon16 } from '../Icon.assets.16/CloseSquareOutline';
import { CloseSquareOutline as Icon24 } from '../Icon.assets.24/CloseSquareOutline';
import { CloseSquareOutline as Icon36 } from '../Icon.assets.36/CloseSquareOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCloseSquareOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
