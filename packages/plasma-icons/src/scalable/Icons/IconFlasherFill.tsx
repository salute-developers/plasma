import React from 'react';

import { FlasherFill as Icon16 } from '../Icon.assets.16/FlasherFill';
import { FlasherFill as Icon24 } from '../Icon.assets.24/FlasherFill';
import { FlasherFill as Icon36 } from '../Icon.assets.36/FlasherFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconFlasherFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
