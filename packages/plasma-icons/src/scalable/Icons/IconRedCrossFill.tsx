import React from 'react';

import { RedCrossFill as Icon16 } from '../Icon.assets.16/RedCrossFill';
import { RedCrossFill as Icon24 } from '../Icon.assets.24/RedCrossFill';
import { RedCrossFill as Icon36 } from '../Icon.assets.36/RedCrossFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconRedCrossFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
