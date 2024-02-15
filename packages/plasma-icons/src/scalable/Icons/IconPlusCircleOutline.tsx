import React from 'react';

import { PlusCircleOutline as Icon16 } from '../Icon.assets.16/PlusCircleOutline';
import { PlusCircleOutline as Icon24 } from '../Icon.assets.24/PlusCircleOutline';
import { PlusCircleOutline as Icon36 } from '../Icon.assets.36/PlusCircleOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPlusCircleOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
