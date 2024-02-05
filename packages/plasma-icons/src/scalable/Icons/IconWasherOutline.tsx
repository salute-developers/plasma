import React from 'react';

import { WasherOutline as Icon16 } from '../Icon.assets.16/WasherOutline';
import { WasherOutline as Icon24 } from '../Icon.assets.24/WasherOutline';
import { WasherOutline as Icon36 } from '../Icon.assets.36/WasherOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWasherOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
