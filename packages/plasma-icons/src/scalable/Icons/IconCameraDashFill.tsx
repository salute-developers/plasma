import React from 'react';

import { CameraDashFill as Icon16 } from '../Icon.assets.16/CameraDashFill';
import { CameraDashFill as Icon24 } from '../Icon.assets.24/CameraDashFill';
import { CameraDashFill as Icon36 } from '../Icon.assets.36/CameraDashFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCameraDashFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
