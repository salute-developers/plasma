import React, { HTMLAttributes } from 'react';

import { StyledListItem, CellItem } from './ListItem.styles';
import { ListItemProps } from './ListItem.types';

export const ListItem: React.FC<HTMLAttributes<HTMLLIElement> & ListItemProps> = ({
    children,
    contentRight,
    disabled,
    ...rest
}) => {
    return (
        <StyledListItem disabled={disabled} {...rest}>
            <CellItem contentRight={contentRight}>{children}</CellItem>
        </StyledListItem>
    );
};
