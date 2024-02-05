import React from 'react';

import { SecurityCameraOutline as Icon16 } from '../Icon.assets.16/SecurityCameraOutline';
import { SecurityCameraOutline as Icon24 } from '../Icon.assets.24/SecurityCameraOutline';
import { SecurityCameraOutline as Icon36 } from '../Icon.assets.36/SecurityCameraOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSecurityCameraOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
