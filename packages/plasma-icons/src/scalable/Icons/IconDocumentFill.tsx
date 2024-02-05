import React from 'react';

import { DocumentFill as Icon16 } from '../Icon.assets.16/DocumentFill';
import { DocumentFill as Icon24 } from '../Icon.assets.24/DocumentFill';
import { DocumentFill as Icon36 } from '../Icon.assets.36/DocumentFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDocumentFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
