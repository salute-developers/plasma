import React from 'react';

import { ProfilePlusFill as Icon16 } from '../Icon.assets.16/ProfilePlusFill';
import { ProfilePlusFill as Icon24 } from '../Icon.assets.24/ProfilePlusFill';
import { ProfilePlusFill as Icon36 } from '../Icon.assets.36/ProfilePlusFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconProfilePlusFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
