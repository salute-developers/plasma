import React from 'react';

import { PauseOutline as Icon16 } from '../Icon.assets.16/PauseOutline';
import { PauseOutline as Icon24 } from '../Icon.assets.24/PauseOutline';
import { PauseOutline as Icon36 } from '../Icon.assets.36/PauseOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPauseOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
