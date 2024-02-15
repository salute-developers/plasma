import React from 'react';

import { VerificationOutline as Icon16 } from '../Icon.assets.16/VerificationOutline';
import { VerificationOutline as Icon24 } from '../Icon.assets.24/VerificationOutline';
import { VerificationOutline as Icon36 } from '../Icon.assets.36/VerificationOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconVerificationOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
