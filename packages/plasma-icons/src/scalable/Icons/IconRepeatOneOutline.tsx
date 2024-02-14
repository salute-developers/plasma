import React from 'react';

import { RepeatOneOutline as Icon16 } from '../Icon.assets.16/RepeatOneOutline';
import { RepeatOneOutline as Icon24 } from '../Icon.assets.24/RepeatOneOutline';
import { RepeatOneOutline as Icon36 } from '../Icon.assets.36/RepeatOneOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconRepeatOneOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
