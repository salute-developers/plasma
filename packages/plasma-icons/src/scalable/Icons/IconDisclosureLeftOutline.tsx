import React from 'react';

import { DisclosureLeftOutline as Icon16 } from '../Icon.assets.16/DisclosureLeftOutline';
import { DisclosureLeftOutline as Icon24 } from '../Icon.assets.24/DisclosureLeftOutline';
import { DisclosureLeftOutline as Icon36 } from '../Icon.assets.36/DisclosureLeftOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDisclosureLeftOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
