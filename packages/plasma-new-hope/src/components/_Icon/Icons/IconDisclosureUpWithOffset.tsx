import React from 'react';

import { DisclosureUpWithOffset } from '../Icon.assets/DisclosureUpWithOffset';
import { IconRoot, IconProps } from '../IconRoot';

export const IconDisclosureUpWithOffset: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={DisclosureUpWithOffset} />;
};
