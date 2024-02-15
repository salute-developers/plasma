import React from 'react';

import { MinusCircleFill as Icon16 } from '../Icon.assets.16/MinusCircleFill';
import { MinusCircleFill as Icon24 } from '../Icon.assets.24/MinusCircleFill';
import { MinusCircleFill as Icon36 } from '../Icon.assets.36/MinusCircleFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMinusCircleFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
