import React from 'react';

import { EarErrorFill as Icon16 } from '../Icon.assets.16/EarErrorFill';
import { EarErrorFill as Icon24 } from '../Icon.assets.24/EarErrorFill';
import { EarErrorFill as Icon36 } from '../Icon.assets.36/EarErrorFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconEarErrorFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
