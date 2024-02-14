import React from 'react';

import { VerificationFill as Icon16 } from '../Icon.assets.16/VerificationFill';
import { VerificationFill as Icon24 } from '../Icon.assets.24/VerificationFill';
import { VerificationFill as Icon36 } from '../Icon.assets.36/VerificationFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconVerificationFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
