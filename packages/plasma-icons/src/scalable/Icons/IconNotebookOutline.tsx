import React from 'react';

import { NotebookOutline as Icon16 } from '../Icon.assets.16/NotebookOutline';
import { NotebookOutline as Icon24 } from '../Icon.assets.24/NotebookOutline';
import { NotebookOutline as Icon36 } from '../Icon.assets.36/NotebookOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconNotebookOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
