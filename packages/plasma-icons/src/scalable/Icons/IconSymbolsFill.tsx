import React from 'react';

import { SymbolsFill as Icon16 } from '../Icon.assets.16/SymbolsFill';
import { SymbolsFill as Icon24 } from '../Icon.assets.24/SymbolsFill';
import { SymbolsFill as Icon36 } from '../Icon.assets.36/SymbolsFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSymbolsFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
