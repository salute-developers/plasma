import React, { HTMLAttributes } from 'react';

import { classes } from '../List.tokens';

import { StyledListItem, CellItem } from './ListItem.styles';
import { ListItemProps } from './ListItem.types';

export const ListItem: React.FC<HTMLAttributes<HTMLLIElement> & ListItemProps> = ({
    children,
    contentRight,
    disabled,
    onClick,
    ...rest
}) => {
    const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
        if (disabled || !onClick) {
            return;
        }

        onClick(event);
    };

    return (
        <StyledListItem className={disabled ? classes.disabledListItem : ''} onClick={handleClick} {...rest}>
            <CellItem contentRight={contentRight}>{children}</CellItem>
        </StyledListItem>
    );
};
