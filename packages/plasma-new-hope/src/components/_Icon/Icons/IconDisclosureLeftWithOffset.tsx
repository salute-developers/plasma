import React from 'react';

import { DisclosureLeftWithOffset } from '../Icon.assets/DisclosureLeftWithOffset';
import { IconRoot, IconProps } from '../IconRoot';

export const IconDisclosureLeftWithOffset: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={DisclosureLeftWithOffset} />;
};
