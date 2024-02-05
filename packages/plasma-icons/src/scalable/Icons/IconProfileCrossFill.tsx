import React from 'react';

import { ProfileCrossFill as Icon16 } from '../Icon.assets.16/ProfileCrossFill';
import { ProfileCrossFill as Icon24 } from '../Icon.assets.24/ProfileCrossFill';
import { ProfileCrossFill as Icon36 } from '../Icon.assets.36/ProfileCrossFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconProfileCrossFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
