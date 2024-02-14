import React from 'react';

import { SberbomMiniCastFill as Icon16 } from '../Icon.assets.16/SberbomMiniCastFill';
import { SberbomMiniCastFill as Icon24 } from '../Icon.assets.24/SberbomMiniCastFill';
import { SberbomMiniCastFill as Icon36 } from '../Icon.assets.36/SberbomMiniCastFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSberbomMiniCastFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
