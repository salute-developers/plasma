import React from 'react';

import { RadioFill as Icon16 } from '../Icon.assets.16/RadioFill';
import { RadioFill as Icon24 } from '../Icon.assets.24/RadioFill';
import { RadioFill as Icon36 } from '../Icon.assets.36/RadioFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconRadioFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
