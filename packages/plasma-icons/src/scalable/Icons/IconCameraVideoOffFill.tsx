import React from 'react';

import { CameraVideoOffFill as Icon16 } from '../Icon.assets.16/CameraVideoOffFill';
import { CameraVideoOffFill as Icon24 } from '../Icon.assets.24/CameraVideoOffFill';
import { CameraVideoOffFill as Icon36 } from '../Icon.assets.36/CameraVideoOffFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCameraVideoOffFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
