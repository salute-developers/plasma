import React from 'react';

import { NotebookFill as Icon16 } from '../Icon.assets.16/NotebookFill';
import { NotebookFill as Icon24 } from '../Icon.assets.24/NotebookFill';
import { NotebookFill as Icon36 } from '../Icon.assets.36/NotebookFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconNotebookFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
