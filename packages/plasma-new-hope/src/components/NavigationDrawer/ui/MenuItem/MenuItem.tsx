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
import { Link } from 'src/examples/components/Link/Link';

export const MenuItem: React.FC<MenuItemProps> = (props) => {
    const {
        onClick,
        href,
        target,
        disabled,
        selected,
        icon,
        contentLeft,
        withContentLeft,
        label,
        isOpen,
        hasIndicator,
        counter,
    } = props;

    const onMenuClick = typeof onClick === 'function' && !disabled ? onClick : undefined;

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
            {isOpen && <Label>{label}</Label>}
        </>
    ) : (
        <>
            <Label>{label}</Label>
            <RightContentWrapper>{indicators}</RightContentWrapper>
        </>
    );

    return typeof onClick === 'function' ? (
        <div className={menuClasses} onClick={onMenuClick}>
            {menuItemContent}
        </div>
    ) : (
        <Link
            className={cls(classes.navigationDrawerMenuLink, menuClasses)}
            href={href}
            rel="noopener noreferrer"
            target={target}
        >
            {menuItemContent}
        </Link>
    );
};
