import React from 'react';

import { CrownFill as Icon16 } from '../Icon.assets.16/CrownFill';
import { CrownFill as Icon24 } from '../Icon.assets.24/CrownFill';
import { CrownFill as Icon36 } from '../Icon.assets.36/CrownFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCrownFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
