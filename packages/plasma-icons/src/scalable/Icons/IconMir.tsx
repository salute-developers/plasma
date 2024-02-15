import React from 'react';

import { Mir as Icon16 } from '../Icon.assets.16/Mir';
import { Mir as Icon24 } from '../Icon.assets.24/Mir';
import { Mir as Icon36 } from '../Icon.assets.36/Mir';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMir: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
