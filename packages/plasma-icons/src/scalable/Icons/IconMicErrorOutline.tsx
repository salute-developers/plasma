import React from 'react';

import { MicErrorOutline as Icon16 } from '../Icon.assets.16/MicErrorOutline';
import { MicErrorOutline as Icon24 } from '../Icon.assets.24/MicErrorOutline';
import { MicErrorOutline as Icon36 } from '../Icon.assets.36/MicErrorOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMicErrorOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
