import React from 'react';

import { EraserFill as Icon16 } from '../Icon.assets.16/EraserFill';
import { EraserFill as Icon24 } from '../Icon.assets.24/EraserFill';
import { EraserFill as Icon36 } from '../Icon.assets.36/EraserFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconEraserFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
