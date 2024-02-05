import React from 'react';

import { FlasherOutline as Icon16 } from '../Icon.assets.16/FlasherOutline';
import { FlasherOutline as Icon24 } from '../Icon.assets.24/FlasherOutline';
import { FlasherOutline as Icon36 } from '../Icon.assets.36/FlasherOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconFlasherOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
