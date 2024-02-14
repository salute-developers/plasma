import React from 'react';

import { RepeatOutline as Icon16 } from '../Icon.assets.16/RepeatOutline';
import { RepeatOutline as Icon24 } from '../Icon.assets.24/RepeatOutline';
import { RepeatOutline as Icon36 } from '../Icon.assets.36/RepeatOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconRepeatOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
