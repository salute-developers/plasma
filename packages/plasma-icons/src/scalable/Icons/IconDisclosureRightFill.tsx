import React from 'react';

import { DisclosureRightFill as Icon16 } from '../Icon.assets.16/DisclosureRightFill';
import { DisclosureRightFill as Icon24 } from '../Icon.assets.24/DisclosureRightFill';
import { DisclosureRightFill as Icon36 } from '../Icon.assets.36/DisclosureRightFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDisclosureRightFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
