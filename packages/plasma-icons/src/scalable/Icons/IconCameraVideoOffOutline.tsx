import React from 'react';

import { CameraVideoOffOutline as Icon16 } from '../Icon.assets.16/CameraVideoOffOutline';
import { CameraVideoOffOutline as Icon24 } from '../Icon.assets.24/CameraVideoOffOutline';
import { CameraVideoOffOutline as Icon36 } from '../Icon.assets.36/CameraVideoOffOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCameraVideoOffOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
