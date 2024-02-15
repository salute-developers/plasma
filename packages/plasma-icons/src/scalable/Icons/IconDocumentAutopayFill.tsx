import React from 'react';

import { DocumentAutopayFill as Icon16 } from '../Icon.assets.16/DocumentAutopayFill';
import { DocumentAutopayFill as Icon24 } from '../Icon.assets.24/DocumentAutopayFill';
import { DocumentAutopayFill as Icon36 } from '../Icon.assets.36/DocumentAutopayFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDocumentAutopayFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
