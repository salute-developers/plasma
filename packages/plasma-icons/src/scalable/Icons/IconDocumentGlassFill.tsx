import React from 'react';

import { DocumentGlassFill as Icon16 } from '../Icon.assets.16/DocumentGlassFill';
import { DocumentGlassFill as Icon24 } from '../Icon.assets.24/DocumentGlassFill';
import { DocumentGlassFill as Icon36 } from '../Icon.assets.36/DocumentGlassFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDocumentGlassFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
