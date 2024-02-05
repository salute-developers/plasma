import React from 'react';

import { CalculatorOutline as Icon16 } from '../Icon.assets.16/CalculatorOutline';
import { CalculatorOutline as Icon24 } from '../Icon.assets.24/CalculatorOutline';
import { CalculatorOutline as Icon36 } from '../Icon.assets.36/CalculatorOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCalculatorOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
