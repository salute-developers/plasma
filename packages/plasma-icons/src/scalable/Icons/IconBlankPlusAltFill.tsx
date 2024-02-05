import React from 'react';

import { BlankPlusAltFill as Icon16 } from '../Icon.assets.16/BlankPlusAltFill';
import { BlankPlusAltFill as Icon24 } from '../Icon.assets.24/BlankPlusAltFill';
import { BlankPlusAltFill as Icon36 } from '../Icon.assets.36/BlankPlusAltFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBlankPlusAltFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
