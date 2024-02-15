import React from 'react';

import { CameraReverseFill as Icon16 } from '../Icon.assets.16/CameraReverseFill';
import { CameraReverseFill as Icon24 } from '../Icon.assets.24/CameraReverseFill';
import { CameraReverseFill as Icon36 } from '../Icon.assets.36/CameraReverseFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCameraReverseFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
