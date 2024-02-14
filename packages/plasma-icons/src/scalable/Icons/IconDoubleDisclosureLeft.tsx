import React from 'react';

import { DoubleDisclosureLeft as Icon16 } from '../Icon.assets.16/DoubleDisclosureLeft';
import { DoubleDisclosureLeft as Icon24 } from '../Icon.assets.24/DoubleDisclosureLeft';
import { DoubleDisclosureLeft as Icon36 } from '../Icon.assets.36/DoubleDisclosureLeft';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDoubleDisclosureLeft: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
