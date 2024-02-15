import React from 'react';

import { DocumentAutopayOutline as Icon16 } from '../Icon.assets.16/DocumentAutopayOutline';
import { DocumentAutopayOutline as Icon24 } from '../Icon.assets.24/DocumentAutopayOutline';
import { DocumentAutopayOutline as Icon36 } from '../Icon.assets.36/DocumentAutopayOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDocumentAutopayOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
