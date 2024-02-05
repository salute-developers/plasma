import React from 'react';

import { DisclosureUpOutline as Icon16 } from '../Icon.assets.16/DisclosureUpOutline';
import { DisclosureUpOutline as Icon24 } from '../Icon.assets.24/DisclosureUpOutline';
import { DisclosureUpOutline as Icon36 } from '../Icon.assets.36/DisclosureUpOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDisclosureUpOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
