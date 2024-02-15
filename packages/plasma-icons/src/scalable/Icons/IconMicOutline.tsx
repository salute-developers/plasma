import React from 'react';

import { MicOutline as Icon16 } from '../Icon.assets.16/MicOutline';
import { MicOutline as Icon24 } from '../Icon.assets.24/MicOutline';
import { MicOutline as Icon36 } from '../Icon.assets.36/MicOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMicOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
