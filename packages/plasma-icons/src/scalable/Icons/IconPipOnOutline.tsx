import React from 'react';

import { PipOnOutline as Icon16 } from '../Icon.assets.16/PipOnOutline';
import { PipOnOutline as Icon24 } from '../Icon.assets.24/PipOnOutline';
import { PipOnOutline as Icon36 } from '../Icon.assets.36/PipOnOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPipOnOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
