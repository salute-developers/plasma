import React from 'react';

import { ShareScreenFill as Icon16 } from '../Icon.assets.16/ShareScreenFill';
import { ShareScreenFill as Icon24 } from '../Icon.assets.24/ShareScreenFill';
import { ShareScreenFill as Icon36 } from '../Icon.assets.36/ShareScreenFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconShareScreenFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
