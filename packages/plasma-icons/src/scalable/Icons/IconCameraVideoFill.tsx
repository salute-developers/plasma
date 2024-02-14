import React from 'react';

import { CameraVideoFill as Icon16 } from '../Icon.assets.16/CameraVideoFill';
import { CameraVideoFill as Icon24 } from '../Icon.assets.24/CameraVideoFill';
import { CameraVideoFill as Icon36 } from '../Icon.assets.36/CameraVideoFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCameraVideoFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
