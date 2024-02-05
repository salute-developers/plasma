import React from 'react';

import { BankCardForwardOutline as Icon16 } from '../Icon.assets.16/BankCardForwardOutline';
import { BankCardForwardOutline as Icon24 } from '../Icon.assets.24/BankCardForwardOutline';
import { BankCardForwardOutline as Icon36 } from '../Icon.assets.36/BankCardForwardOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBankCardForwardOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
