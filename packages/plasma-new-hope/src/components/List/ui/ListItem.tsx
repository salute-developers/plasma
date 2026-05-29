import React, { forwardRef, useContext } from 'react';
import cls from 'classnames';

import { classes } from '../List.tokens';
import { ListContext } from '../List.context';

import { StyledListItem, CellItem } from './ListItem.styles';
import { ListItemProps } from './ListItem.types';

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
    ({ children, contentLeft, contentRight, disabled, onClick, className, ...rest }, outerRef) => {
        const { disabled: contextDisabled, hasItemBackground, hasDivider } = useContext(ListContext);
        const isDisabled = disabled || contextDisabled;

        const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
            if (isDisabled || !onClick) {
                return;
            }

            onClick(event);
        };

        return (
            <StyledListItem
                ref={outerRef}
                className={cls(
                    className,
                    isDisabled && classes.disabledListItem,
                    hasItemBackground && classes.hasItemBackground,
                    hasDivider && classes.hasItemDivider,
                )}
                onClick={handleClick}
                tabIndex={isDisabled ? -1 : 0}
                {...rest}
            >
                <CellItem contentLeft={contentLeft} contentRight={contentRight}>
                    {children}
                </CellItem>
            </StyledListItem>
        );
    },
);
