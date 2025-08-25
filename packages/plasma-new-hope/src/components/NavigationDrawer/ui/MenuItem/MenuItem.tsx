import React from 'react';
import { MenuItemProps } from 'src/components/NavigationDrawer/ui/MenuItem/MenuItem.types';
import cls from 'classnames';
import {
    ExtraCounter,
    IconWrapper,
    Icon,
    StyledIndicator,
    RightContentWrapper,
    ContentLeftWrapper,
    Label,
} from 'src/components/NavigationDrawer/ui/MenuItem/MenuItem.styles';
import { classes } from 'src/components/NavigationDrawer/NavigationDrawer.tokens';

export const MenuItem: React.FC<MenuItemProps> = (props) => {
    const {
        action,
        disabled,
        selected,
        icon,
        contentLeft,
        withContentLeft,
        label,
        isOpened,
        hasIndicator,
        counter,
    } = props;

    const onClick = action && typeof action === 'function' && !disabled ? action : undefined;

    const hasCustomContentLeft = contentLeft && withContentLeft;

    const menuClasses = cls(
        classes.navigationDrawerMenuItem,
        selected && classes.navigationDrawerMenuItemSelected,
        disabled && classes.navigationDrawerMenuItemDisabled,
        hasCustomContentLeft && classes.navigationDrawerMenuItemContentLeft,
        !withContentLeft && classes.navigationDrawerMenuItemWithoutContentLeft,
    );

    const indicators = (
        <>
            {hasIndicator && (
                <StyledIndicator className={cls(withContentLeft && classes.navigationDrawerMenuIndicator)} />
            )}
            {counter !== undefined && (
                <ExtraCounter className={cls(withContentLeft && classes.navigationDrawerMenuCounter)} count={counter} />
            )}
        </>
    );

    const contentLeftItem = contentLeft ? (
        <ContentLeftWrapper>
            {contentLeft}
            {indicators}
        </ContentLeftWrapper>
    ) : null;

    const iconItem = icon ? (
        <IconWrapper>
            <Icon>{icon}</Icon>
            {indicators}
        </IconWrapper>
    ) : null;

    const menuItemContent = withContentLeft ? (
        <>
            {contentLeft && contentLeftItem}
            {icon && iconItem}
            {isOpened && <Label>{label}</Label>}
        </>
    ) : (
        <>
            <Label>{label}</Label>
            <RightContentWrapper>{indicators}</RightContentWrapper>
        </>
    );

    return typeof action === 'function' ? (
        <div className={menuClasses} onClick={onClick}>
            {menuItemContent}
        </div>
    ) : (
        <a className={cls(classes.navigationDrawerMenuLink, menuClasses)} href={action} rel="noopener noreferrer">
            {menuItemContent}
        </a>
    );
};
