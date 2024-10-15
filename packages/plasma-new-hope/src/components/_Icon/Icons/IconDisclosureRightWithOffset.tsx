import React from 'react';

import { DisclosureRightWithOffset } from '../Icon.assets/DisclosureRightWithOffset';
import { IconRoot, IconProps } from '../IconRoot';

export const IconDisclosureRightWithOffset: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={DisclosureRightWithOffset} />;
};
