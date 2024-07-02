import React from 'react';

import { DisclosureDownCentered } from '../Icon.assets/DisclosureDownCentered';
import { IconRoot, IconProps } from '../IconRoot';

export const IconDisclosureDownCentered: React.FC<IconProps> = ({ size = 'xs', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={DisclosureDownCentered} />;
};
