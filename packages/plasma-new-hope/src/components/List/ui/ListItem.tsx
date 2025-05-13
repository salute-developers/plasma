import React, { HTMLAttributes } from 'react';

import { classes } from '../List.tokens';

import { StyledListItem, CellItem } from './ListItem.styles';
import { ListItemProps } from './ListItem.types';

export const ListItem: React.FC<HTMLAttributes<HTMLLIElement> & ListItemProps> = ({
    children,
    contentRight,
    disabled,
    ...rest
}) => {
    return (
        <StyledListItem className={disabled ? classes.disabledListItem : ''} {...rest}>
            <CellItem contentRight={contentRight}>{children}</CellItem>
        </StyledListItem>
    );
};
