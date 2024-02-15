import React from 'react';

import { DisclosureUpFill as Icon16 } from '../Icon.assets.16/DisclosureUpFill';
import { DisclosureUpFill as Icon24 } from '../Icon.assets.24/DisclosureUpFill';
import { DisclosureUpFill as Icon36 } from '../Icon.assets.36/DisclosureUpFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDisclosureUpFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
