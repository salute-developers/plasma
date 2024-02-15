import React from 'react';

import { Scene3dFill as Icon16 } from '../Icon.assets.16/Scene3dFill';
import { Scene3dFill as Icon24 } from '../Icon.assets.24/Scene3dFill';
import { Scene3dFill as Icon36 } from '../Icon.assets.36/Scene3dFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconScene3dFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
