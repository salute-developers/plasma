import React from 'react';

import { CertificateOutline as Icon16 } from '../Icon.assets.16/CertificateOutline';
import { CertificateOutline as Icon24 } from '../Icon.assets.24/CertificateOutline';
import { CertificateOutline as Icon36 } from '../Icon.assets.36/CertificateOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCertificateOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
