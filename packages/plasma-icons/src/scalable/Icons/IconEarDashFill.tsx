import React from 'react';

import { EarDashFill as Icon16 } from '../Icon.assets.16/EarDashFill';
import { EarDashFill as Icon24 } from '../Icon.assets.24/EarDashFill';
import { EarDashFill as Icon36 } from '../Icon.assets.36/EarDashFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconEarDashFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
