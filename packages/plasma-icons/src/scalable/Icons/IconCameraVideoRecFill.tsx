import React from 'react';

import { CameraVideoRecFill as Icon16 } from '../Icon.assets.16/CameraVideoRecFill';
import { CameraVideoRecFill as Icon24 } from '../Icon.assets.24/CameraVideoRecFill';
import { CameraVideoRecFill as Icon36 } from '../Icon.assets.36/CameraVideoRecFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCameraVideoRecFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
