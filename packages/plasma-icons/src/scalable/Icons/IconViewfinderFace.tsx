import React from 'react';

import { ViewfinderFace as Icon16 } from '../Icon.assets.16/ViewfinderFace';
import { ViewfinderFace as Icon24 } from '../Icon.assets.24/ViewfinderFace';
import { ViewfinderFace as Icon36 } from '../Icon.assets.36/ViewfinderFace';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconViewfinderFace: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
