import React from 'react';

import { FileGlassFill as Icon16 } from '../Icon.assets.16/FileGlassFill';
import { FileGlassFill as Icon24 } from '../Icon.assets.24/FileGlassFill';
import { FileGlassFill as Icon36 } from '../Icon.assets.36/FileGlassFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconFileGlassFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
