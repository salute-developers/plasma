import React from 'react';

import { ProfileFill as Icon16 } from '../Icon.assets.16/ProfileFill';
import { ProfileFill as Icon24 } from '../Icon.assets.24/ProfileFill';
import { ProfileFill as Icon36 } from '../Icon.assets.36/ProfileFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconProfileFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
