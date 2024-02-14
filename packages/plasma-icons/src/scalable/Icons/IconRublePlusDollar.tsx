import React from 'react';

import { RublePlusDollar as Icon16 } from '../Icon.assets.16/RublePlusDollar';
import { RublePlusDollar as Icon24 } from '../Icon.assets.24/RublePlusDollar';
import { RublePlusDollar as Icon36 } from '../Icon.assets.36/RublePlusDollar';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconRublePlusDollar: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
