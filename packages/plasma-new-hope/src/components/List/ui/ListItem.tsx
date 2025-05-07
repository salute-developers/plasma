import React, { HTMLAttributes } from 'react';

import { StyledListItem, StyledListItemText, StyledListItemRightContent } from './ListItem.styles';
import { ListItemProps } from './ListItem.types';

export const ListItem: React.FC<HTMLAttributes<HTMLLIElement> & ListItemProps> = ({
    children,
    contentRight,
    disabled,
    ...rest
}) => {
    return (
        <StyledListItem disabled={disabled} {...rest}>
            <StyledListItemText>{children}</StyledListItemText>
            {contentRight && <StyledListItemRightContent>{contentRight}</StyledListItemRightContent>}
        </StyledListItem>
    );
};
