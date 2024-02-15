import React from 'react';

import { ChoiceOutline as Icon16 } from '../Icon.assets.16/ChoiceOutline';
import { ChoiceOutline as Icon24 } from '../Icon.assets.24/ChoiceOutline';
import { ChoiceOutline as Icon36 } from '../Icon.assets.36/ChoiceOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconChoiceOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
