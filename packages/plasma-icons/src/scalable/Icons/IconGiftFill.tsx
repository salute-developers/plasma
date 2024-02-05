import React from 'react';

import { GiftFill as Icon16 } from '../Icon.assets.16/GiftFill';
import { GiftFill as Icon24 } from '../Icon.assets.24/GiftFill';
import { GiftFill as Icon36 } from '../Icon.assets.36/GiftFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconGiftFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
