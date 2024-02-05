import React from 'react';

import { DocumentForwardFill as Icon16 } from '../Icon.assets.16/DocumentForwardFill';
import { DocumentForwardFill as Icon24 } from '../Icon.assets.24/DocumentForwardFill';
import { DocumentForwardFill as Icon36 } from '../Icon.assets.36/DocumentForwardFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDocumentForwardFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
