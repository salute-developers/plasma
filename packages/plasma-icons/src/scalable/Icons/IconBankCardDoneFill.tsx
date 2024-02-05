import React from 'react';

import { BankCardDoneFill as Icon16 } from '../Icon.assets.16/BankCardDoneFill';
import { BankCardDoneFill as Icon24 } from '../Icon.assets.24/BankCardDoneFill';
import { BankCardDoneFill as Icon36 } from '../Icon.assets.36/BankCardDoneFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBankCardDoneFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
