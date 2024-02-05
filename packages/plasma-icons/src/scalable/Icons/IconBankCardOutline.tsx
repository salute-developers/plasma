import React from 'react';

import { BankCardOutline as Icon16 } from '../Icon.assets.16/BankCardOutline';
import { BankCardOutline as Icon24 } from '../Icon.assets.24/BankCardOutline';
import { BankCardOutline as Icon36 } from '../Icon.assets.36/BankCardOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBankCardOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
