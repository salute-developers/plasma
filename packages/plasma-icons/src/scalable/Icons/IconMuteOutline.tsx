import React from 'react';

import { MuteOutline as Icon16 } from '../Icon.assets.16/MuteOutline';
import { MuteOutline as Icon24 } from '../Icon.assets.24/MuteOutline';
import { MuteOutline as Icon36 } from '../Icon.assets.36/MuteOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMuteOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
