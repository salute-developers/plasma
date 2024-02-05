import React from 'react';

import { FileGlassOutline as Icon16 } from '../Icon.assets.16/FileGlassOutline';
import { FileGlassOutline as Icon24 } from '../Icon.assets.24/FileGlassOutline';
import { FileGlassOutline as Icon36 } from '../Icon.assets.36/FileGlassOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconFileGlassOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
