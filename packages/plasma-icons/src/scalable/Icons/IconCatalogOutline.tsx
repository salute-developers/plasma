import React from 'react';

import { CatalogOutline as Icon16 } from '../Icon.assets.16/CatalogOutline';
import { CatalogOutline as Icon24 } from '../Icon.assets.24/CatalogOutline';
import { CatalogOutline as Icon36 } from '../Icon.assets.36/CatalogOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCatalogOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
