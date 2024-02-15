import React from 'react';

import { DropDashFill as Icon16 } from '../Icon.assets.16/DropDashFill';
import { DropDashFill as Icon24 } from '../Icon.assets.24/DropDashFill';
import { DropDashFill as Icon36 } from '../Icon.assets.36/DropDashFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDropDashFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
