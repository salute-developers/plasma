import React from 'react';

import { DoneSquareOutline as Icon16 } from '../Icon.assets.16/DoneSquareOutline';
import { DoneSquareOutline as Icon24 } from '../Icon.assets.24/DoneSquareOutline';
import { DoneSquareOutline as Icon36 } from '../Icon.assets.36/DoneSquareOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDoneSquareOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
