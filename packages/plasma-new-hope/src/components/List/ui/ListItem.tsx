import React, { forwardRef, useContext } from 'react';

import { classes } from '../List.tokens';
import { ListContext } from '../List.context';

import { StyledListItem, CellItem } from './ListItem.styles';
import { ListItemProps } from './ListItem.types';

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
    ({ children, contentRight, disabled, onClick, ...rest }, outerRef) => {
        const listContext = useContext(ListContext);
        const isDisabled = disabled || listContext.disabled;

        const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
            if (isDisabled || !onClick) {
                return;
            }

            onClick(event);
        };

        return (
            <StyledListItem
                ref={outerRef}
                className={isDisabled ? classes.disabledListItem : ''}
                onClick={handleClick}
                tabIndex={isDisabled ? -1 : 0}
                {...rest}
            >
                <CellItem contentRight={contentRight}>{children}</CellItem>
            </StyledListItem>
        );
    },
);
