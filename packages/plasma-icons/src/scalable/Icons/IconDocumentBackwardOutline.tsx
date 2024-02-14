import React from 'react';

import { DocumentBackwardOutline as Icon16 } from '../Icon.assets.16/DocumentBackwardOutline';
import { DocumentBackwardOutline as Icon24 } from '../Icon.assets.24/DocumentBackwardOutline';
import { DocumentBackwardOutline as Icon36 } from '../Icon.assets.36/DocumentBackwardOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDocumentBackwardOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
