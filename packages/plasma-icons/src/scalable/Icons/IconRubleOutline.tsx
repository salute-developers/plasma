import React from 'react';

import { RubleOutline as Icon16 } from '../Icon.assets.16/RubleOutline';
import { RubleOutline as Icon24 } from '../Icon.assets.24/RubleOutline';
import { RubleOutline as Icon36 } from '../Icon.assets.36/RubleOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconRubleOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
