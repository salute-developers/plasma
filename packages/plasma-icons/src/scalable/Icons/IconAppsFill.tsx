import React from 'react';

import { AppsFill as Icon16 } from '../Icon.assets.16/AppsFill';
import { AppsFill as Icon24 } from '../Icon.assets.24/AppsFill';
import { AppsFill as Icon36 } from '../Icon.assets.36/AppsFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconAppsFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
