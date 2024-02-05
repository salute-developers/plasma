import React from 'react';

import { PreviousFill as Icon16 } from '../Icon.assets.16/PreviousFill';
import { PreviousFill as Icon24 } from '../Icon.assets.24/PreviousFill';
import { PreviousFill as Icon36 } from '../Icon.assets.36/PreviousFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPreviousFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
