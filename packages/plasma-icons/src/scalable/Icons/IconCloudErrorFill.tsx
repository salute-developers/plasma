import React from 'react';

import { CloudErrorFill as Icon16 } from '../Icon.assets.16/CloudErrorFill';
import { CloudErrorFill as Icon24 } from '../Icon.assets.24/CloudErrorFill';
import { CloudErrorFill as Icon36 } from '../Icon.assets.36/CloudErrorFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCloudErrorFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
