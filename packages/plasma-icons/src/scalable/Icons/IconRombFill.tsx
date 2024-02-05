import React from 'react';

import { RombFill as Icon16 } from '../Icon.assets.16/RombFill';
import { RombFill as Icon24 } from '../Icon.assets.24/RombFill';
import { RombFill as Icon36 } from '../Icon.assets.36/RombFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconRombFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
