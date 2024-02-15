import React from 'react';

import { ShieldLinesCirclesFill as Icon16 } from '../Icon.assets.16/ShieldLinesCirclesFill';
import { ShieldLinesCirclesFill as Icon24 } from '../Icon.assets.24/ShieldLinesCirclesFill';
import { ShieldLinesCirclesFill as Icon36 } from '../Icon.assets.36/ShieldLinesCirclesFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconShieldLinesCirclesFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
