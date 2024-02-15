import React from 'react';

import { PipOffOutline as Icon16 } from '../Icon.assets.16/PipOffOutline';
import { PipOffOutline as Icon24 } from '../Icon.assets.24/PipOffOutline';
import { PipOffOutline as Icon36 } from '../Icon.assets.36/PipOffOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPipOffOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
