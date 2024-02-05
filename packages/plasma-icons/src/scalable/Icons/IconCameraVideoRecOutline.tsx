import React from 'react';

import { CameraVideoRecOutline as Icon16 } from '../Icon.assets.16/CameraVideoRecOutline';
import { CameraVideoRecOutline as Icon24 } from '../Icon.assets.24/CameraVideoRecOutline';
import { CameraVideoRecOutline as Icon36 } from '../Icon.assets.36/CameraVideoRecOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCameraVideoRecOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
