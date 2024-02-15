import React from 'react';

import { LightbulbFill as Icon16 } from '../Icon.assets.16/LightbulbFill';
import { LightbulbFill as Icon24 } from '../Icon.assets.24/LightbulbFill';
import { LightbulbFill as Icon36 } from '../Icon.assets.36/LightbulbFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconLightbulbFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
