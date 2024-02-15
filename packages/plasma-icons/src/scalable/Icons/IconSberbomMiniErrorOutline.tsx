import React from 'react';

import { SberbomMiniErrorOutline as Icon16 } from '../Icon.assets.16/SberbomMiniErrorOutline';
import { SberbomMiniErrorOutline as Icon24 } from '../Icon.assets.24/SberbomMiniErrorOutline';
import { SberbomMiniErrorOutline as Icon36 } from '../Icon.assets.36/SberbomMiniErrorOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSberbomMiniErrorOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
