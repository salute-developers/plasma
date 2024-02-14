import React from 'react';

import { DocumentBackwardFill as Icon16 } from '../Icon.assets.16/DocumentBackwardFill';
import { DocumentBackwardFill as Icon24 } from '../Icon.assets.24/DocumentBackwardFill';
import { DocumentBackwardFill as Icon36 } from '../Icon.assets.36/DocumentBackwardFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDocumentBackwardFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
