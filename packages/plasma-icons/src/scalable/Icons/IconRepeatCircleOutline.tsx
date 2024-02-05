import React from 'react';

import { RepeatCircleOutline as Icon16 } from '../Icon.assets.16/RepeatCircleOutline';
import { RepeatCircleOutline as Icon24 } from '../Icon.assets.24/RepeatCircleOutline';
import { RepeatCircleOutline as Icon36 } from '../Icon.assets.36/RepeatCircleOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconRepeatCircleOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
