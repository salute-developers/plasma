import React from 'react';

import { Download } from '../Icon.assets/Download';
import { IconRoot, IconProps } from '../IconRoot';

export const IconDownload: React.FC<IconProps> = ({ size = 's', color, className, sizeCustomProperty, ...rest }) => {
    return (
        <IconRoot
            className={className}
            size={size}
            color={color}
            sizeCustomProperty={sizeCustomProperty}
            icon={Download}
            {...rest}
        />
    );
};
