import React from 'react';

import { CloudDashFill as Icon16 } from '../Icon.assets.16/CloudDashFill';
import { CloudDashFill as Icon24 } from '../Icon.assets.24/CloudDashFill';
import { CloudDashFill as Icon36 } from '../Icon.assets.36/CloudDashFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCloudDashFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
