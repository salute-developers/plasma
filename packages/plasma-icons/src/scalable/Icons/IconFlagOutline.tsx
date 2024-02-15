import React from 'react';

import { FlagOutline as Icon16 } from '../Icon.assets.16/FlagOutline';
import { FlagOutline as Icon24 } from '../Icon.assets.24/FlagOutline';
import { FlagOutline as Icon36 } from '../Icon.assets.36/FlagOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconFlagOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
