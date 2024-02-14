import React from 'react';

import { PipOutline as Icon16 } from '../Icon.assets.16/PipOutline';
import { PipOutline as Icon24 } from '../Icon.assets.24/PipOutline';
import { PipOutline as Icon36 } from '../Icon.assets.36/PipOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPipOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
