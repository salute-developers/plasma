import React from 'react';

import { Brightness1Fill as Icon16 } from '../Icon.assets.16/Brightness1Fill';
import { Brightness1Fill as Icon24 } from '../Icon.assets.24/Brightness1Fill';
import { Brightness1Fill as Icon36 } from '../Icon.assets.36/Brightness1Fill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBrightness1Fill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
