import React from 'react';

import { GlassesFill as Icon16 } from '../Icon.assets.16/GlassesFill';
import { GlassesFill as Icon24 } from '../Icon.assets.24/GlassesFill';
import { GlassesFill as Icon36 } from '../Icon.assets.36/GlassesFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconGlassesFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
