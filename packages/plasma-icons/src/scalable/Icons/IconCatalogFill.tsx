import React from 'react';

import { CatalogFill as Icon16 } from '../Icon.assets.16/CatalogFill';
import { CatalogFill as Icon24 } from '../Icon.assets.24/CatalogFill';
import { CatalogFill as Icon36 } from '../Icon.assets.36/CatalogFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCatalogFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
