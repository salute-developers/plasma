import React from 'react';

import { DocumentGlassOutline as Icon16 } from '../Icon.assets.16/DocumentGlassOutline';
import { DocumentGlassOutline as Icon24 } from '../Icon.assets.24/DocumentGlassOutline';
import { DocumentGlassOutline as Icon36 } from '../Icon.assets.36/DocumentGlassOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDocumentGlassOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
