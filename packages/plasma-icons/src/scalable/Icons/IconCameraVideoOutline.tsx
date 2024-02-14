import React from 'react';

import { CameraVideoOutline as Icon16 } from '../Icon.assets.16/CameraVideoOutline';
import { CameraVideoOutline as Icon24 } from '../Icon.assets.24/CameraVideoOutline';
import { CameraVideoOutline as Icon36 } from '../Icon.assets.36/CameraVideoOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCameraVideoOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
