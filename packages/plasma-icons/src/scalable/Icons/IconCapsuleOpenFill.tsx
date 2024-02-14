import React from 'react';

import { CapsuleOpenFill as Icon16 } from '../Icon.assets.16/CapsuleOpenFill';
import { CapsuleOpenFill as Icon24 } from '../Icon.assets.24/CapsuleOpenFill';
import { CapsuleOpenFill as Icon36 } from '../Icon.assets.36/CapsuleOpenFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCapsuleOpenFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
