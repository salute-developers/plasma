import React from 'react';

import { RulerFill as Icon16 } from '../Icon.assets.16/RulerFill';
import { RulerFill as Icon24 } from '../Icon.assets.24/RulerFill';
import { RulerFill as Icon36 } from '../Icon.assets.36/RulerFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconRulerFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
