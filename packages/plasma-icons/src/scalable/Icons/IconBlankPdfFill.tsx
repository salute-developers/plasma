import React from 'react';

import { BlankPdfFill as Icon16 } from '../Icon.assets.16/BlankPdfFill';
import { BlankPdfFill as Icon24 } from '../Icon.assets.24/BlankPdfFill';
import { BlankPdfFill as Icon36 } from '../Icon.assets.36/BlankPdfFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBlankPdfFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
