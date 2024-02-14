import React from 'react';

import { CarTaxFill as Icon16 } from '../Icon.assets.16/CarTaxFill';
import { CarTaxFill as Icon24 } from '../Icon.assets.24/CarTaxFill';
import { CarTaxFill as Icon36 } from '../Icon.assets.36/CarTaxFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCarTaxFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
