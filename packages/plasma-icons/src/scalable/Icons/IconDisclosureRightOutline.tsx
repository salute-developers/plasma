import React from 'react';

import { DisclosureRightOutline as Icon16 } from '../Icon.assets.16/DisclosureRightOutline';
import { DisclosureRightOutline as Icon24 } from '../Icon.assets.24/DisclosureRightOutline';
import { DisclosureRightOutline as Icon36 } from '../Icon.assets.36/DisclosureRightOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDisclosureRightOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
