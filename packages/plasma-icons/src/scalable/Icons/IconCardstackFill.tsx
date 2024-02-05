import React from 'react';

import { CardstackFill as Icon16 } from '../Icon.assets.16/CardstackFill';
import { CardstackFill as Icon24 } from '../Icon.assets.24/CardstackFill';
import { CardstackFill as Icon36 } from '../Icon.assets.36/CardstackFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCardstackFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
