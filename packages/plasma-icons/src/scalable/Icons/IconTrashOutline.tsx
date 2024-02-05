import React from 'react';

import { TrashOutline as Icon16 } from '../Icon.assets.16/TrashOutline';
import { TrashOutline as Icon24 } from '../Icon.assets.24/TrashOutline';
import { TrashOutline as Icon36 } from '../Icon.assets.36/TrashOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTrashOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
