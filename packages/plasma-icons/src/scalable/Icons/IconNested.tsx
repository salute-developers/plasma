import React from 'react';

import { Nested as Icon16 } from '../Icon.assets.16/Nested';
import { Nested as Icon24 } from '../Icon.assets.24/Nested';
import { Nested as Icon36 } from '../Icon.assets.36/Nested';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconNested: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
