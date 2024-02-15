import React from 'react';

import { BankCardDoneOutline as Icon16 } from '../Icon.assets.16/BankCardDoneOutline';
import { BankCardDoneOutline as Icon24 } from '../Icon.assets.24/BankCardDoneOutline';
import { BankCardDoneOutline as Icon36 } from '../Icon.assets.36/BankCardDoneOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBankCardDoneOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
