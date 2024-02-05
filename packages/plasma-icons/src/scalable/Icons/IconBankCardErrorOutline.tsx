import React from 'react';

import { BankCardErrorOutline as Icon16 } from '../Icon.assets.16/BankCardErrorOutline';
import { BankCardErrorOutline as Icon24 } from '../Icon.assets.24/BankCardErrorOutline';
import { BankCardErrorOutline as Icon36 } from '../Icon.assets.36/BankCardErrorOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBankCardErrorOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
