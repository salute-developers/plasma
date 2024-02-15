import React from 'react';

import { SberbomMiniErrorFill as Icon16 } from '../Icon.assets.16/SberbomMiniErrorFill';
import { SberbomMiniErrorFill as Icon24 } from '../Icon.assets.24/SberbomMiniErrorFill';
import { SberbomMiniErrorFill as Icon36 } from '../Icon.assets.36/SberbomMiniErrorFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSberbomMiniErrorFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
