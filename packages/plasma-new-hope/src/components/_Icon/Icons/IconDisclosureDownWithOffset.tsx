import React from 'react';

import { DisclosureDownWithOffset } from '../Icon.assets/DisclosureDownWithOffset';
import { IconRoot, IconProps } from '../IconRoot';

export const IconDisclosureDownWithOffset: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={DisclosureDownWithOffset} />;
};
