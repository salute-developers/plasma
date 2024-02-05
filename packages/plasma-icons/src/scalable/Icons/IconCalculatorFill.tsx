import React from 'react';

import { CalculatorFill as Icon16 } from '../Icon.assets.16/CalculatorFill';
import { CalculatorFill as Icon24 } from '../Icon.assets.24/CalculatorFill';
import { CalculatorFill as Icon36 } from '../Icon.assets.36/CalculatorFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCalculatorFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
