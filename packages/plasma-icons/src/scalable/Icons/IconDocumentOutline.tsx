import React from 'react';

import { DocumentOutline as Icon16 } from '../Icon.assets.16/DocumentOutline';
import { DocumentOutline as Icon24 } from '../Icon.assets.24/DocumentOutline';
import { DocumentOutline as Icon36 } from '../Icon.assets.36/DocumentOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDocumentOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
