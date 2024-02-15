import React from 'react';

import { SecurityCameraFill as Icon16 } from '../Icon.assets.16/SecurityCameraFill';
import { SecurityCameraFill as Icon24 } from '../Icon.assets.24/SecurityCameraFill';
import { SecurityCameraFill as Icon36 } from '../Icon.assets.36/SecurityCameraFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSecurityCameraFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
