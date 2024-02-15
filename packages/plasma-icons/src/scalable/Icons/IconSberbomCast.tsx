import React from 'react';

import { SberbomCast as Icon16 } from '../Icon.assets.16/SberbomCast';
import { SberbomCast as Icon24 } from '../Icon.assets.24/SberbomCast';
import { SberbomCast as Icon36 } from '../Icon.assets.36/SberbomCast';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSberbomCast: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
