import React from 'react';

import { MessageGoToOutline as Icon16 } from '../Icon.assets.16/MessageGoToOutline';
import { MessageGoToOutline as Icon24 } from '../Icon.assets.24/MessageGoToOutline';
import { MessageGoToOutline as Icon36 } from '../Icon.assets.36/MessageGoToOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMessageGoToOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
