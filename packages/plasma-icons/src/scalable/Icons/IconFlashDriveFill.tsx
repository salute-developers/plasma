import React from 'react';

import { FlashDriveFill as Icon16 } from '../Icon.assets.16/FlashDriveFill';
import { FlashDriveFill as Icon24 } from '../Icon.assets.24/FlashDriveFill';
import { FlashDriveFill as Icon36 } from '../Icon.assets.36/FlashDriveFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconFlashDriveFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
