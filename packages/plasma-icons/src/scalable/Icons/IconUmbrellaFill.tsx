import React from 'react';

import { UmbrellaFill as Icon16 } from '../Icon.assets.16/UmbrellaFill';
import { UmbrellaFill as Icon24 } from '../Icon.assets.24/UmbrellaFill';
import { UmbrellaFill as Icon36 } from '../Icon.assets.36/UmbrellaFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconUmbrellaFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
