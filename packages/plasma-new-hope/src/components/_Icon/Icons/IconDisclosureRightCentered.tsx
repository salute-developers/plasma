import React from 'react';

import { DisclosureRightCentered } from '../Icon.assets/DisclosureRightCentered';
import { IconRoot, IconProps } from '../IconRoot';

export const IconDisclosureRightCentered: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={DisclosureRightCentered} />;
};
