import React from 'react';

import { LightningFill as Icon16 } from '../Icon.assets.16/LightningFill';
import { LightningFill as Icon24 } from '../Icon.assets.24/LightningFill';
import { LightningFill as Icon36 } from '../Icon.assets.36/LightningFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconLightningFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
