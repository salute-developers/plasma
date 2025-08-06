import React from 'react';
import { MenuItemProps } from 'src/components/NavigationDrawer/ui/MenuItem/MenuItem.types';
import { cx } from 'src/utils';
import { classes } from 'src/components/NavigationDrawer/NavigationDrawer.tokens';
import {
    disabledStyles,
    linkStyles,
    menuItemStyles,
    selectedStyles,
} from 'src/components/NavigationDrawer/ui/MenuItem/MenuItem.styles';

export const MenuItem: React.FC<MenuItemProps> = (props) => {
    const { action, disabled, selected, icon, withContentLeft, label, isOpened } = props;

    const onClick = action && typeof action !== 'string' && disabled ? action : undefined;

    const menuClasses = cx(menuItemStyles, selected && selectedStyles, disabled && disabledStyles);

    const menuItemContent = (
        <>
            {icon && withContentLeft && <div className={classes.navigationDrawerMenuItemIcon}>{icon}</div>}
            {isOpened && label}
        </>
    );

    return typeof action === 'string' ? (
        <a className={cx(linkStyles, menuClasses)} href={action} rel="noopener noreferrer">
            {menuItemContent}
        </a>
    ) : (
        <div className={menuClasses} onClick={onClick}>
            {menuItemContent}
        </div>
    );
};
