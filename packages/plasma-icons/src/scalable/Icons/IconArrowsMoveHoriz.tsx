import React from 'react';

import { ArrowsMoveHoriz as Icon16 } from '../Icon.assets.16/ArrowsMoveHoriz';
import { ArrowsMoveHoriz as Icon24 } from '../Icon.assets.24/ArrowsMoveHoriz';
import { ArrowsMoveHoriz as Icon36 } from '../Icon.assets.36/ArrowsMoveHoriz';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconArrowsMoveHoriz: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
