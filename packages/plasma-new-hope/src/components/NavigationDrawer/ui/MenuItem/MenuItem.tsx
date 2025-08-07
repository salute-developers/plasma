import React from 'react';
import { MenuItemProps } from 'src/components/NavigationDrawer/ui/MenuItem/MenuItem.types';
import { cx } from 'src/utils';
import {
    disabledStyles,
    linkStyles,
    menuItemStyles,
    selectedStyles,
} from 'src/components/NavigationDrawer/ui/MenuItem/MenuItem.styles';
import { component, mergeConfig } from 'src/engines';
import { indicatorConfig } from 'src/components/Indicator/Indicator';
import { styled } from '@linaria/react';
import { indicatorTokens } from 'src/components/Indicator';
import { counterConfig } from 'src/components/Counter';

import { tokens } from '../../NavigationDrawer.tokens';

const indicatorMergedConfig = mergeConfig(indicatorConfig);

const Indicator: React.FunctionComponent<React.HTMLAttributes<HTMLDivElement>> = component(
    indicatorMergedConfig,
) as never;

const counterMergedConfig = mergeConfig(counterConfig);

const Counter: React.FunctionComponent<React.HTMLAttributes<HTMLDivElement>> = component(counterMergedConfig) as never;

const IconWrapper = styled.div`
    position: relative;
    width: var(${tokens.menuItemIconSize});
    height: var(${tokens.menuItemIconSize});
    display: flex;
`;

const Icon = styled.div`
    margin: auto;
`;

const StyledIndicator = styled(Indicator)`
    position: absolute;
    top: -4px;
    right: -4px;
    ${indicatorTokens.size}: var(${tokens.menuItemIndicatorSize});
    ${indicatorTokens.color}: var(${tokens.menuItemIndicatorColor});
`;

export const MenuItem: React.FC<MenuItemProps> = (props) => {
    const { action, disabled, selected, icon, withContentLeft, label, isOpened, hasIndicator, counter } = props;

    const onClick = action && typeof action !== 'string' && disabled ? action : undefined;

    const menuClasses = cx(menuItemStyles, selected && selectedStyles, disabled && disabledStyles);

    const menuItemContent = (
        <>
            {icon && withContentLeft && (
                <IconWrapper>
                    <Icon>{icon}</Icon>
                    {hasIndicator && <StyledIndicator />}
                    {counter !== undefined && <Counter>{counter}</Counter>}
                </IconWrapper>
            )}
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
