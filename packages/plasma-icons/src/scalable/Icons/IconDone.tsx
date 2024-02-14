import React from 'react';

import { Done as Icon16 } from '../Icon.assets.16/Done';
import { Done as Icon24 } from '../Icon.assets.24/Done';
import { Done as Icon36 } from '../Icon.assets.36/Done';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDone: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
