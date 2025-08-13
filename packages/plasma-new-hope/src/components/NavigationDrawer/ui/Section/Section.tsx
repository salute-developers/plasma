import React, { useState } from 'react';
import cls from 'classnames';

import { MenuItem } from '../MenuItem/MenuItem';
import { classes } from '../../NavigationDrawer.tokens';

import { SectionProps } from './Section.types';
import { StyledSection, SectionHeader, SectionDivider, SectionIcon, ArrowIcon } from './Section.styles';

export const Section = <T extends boolean = false>({
    items,
    label,
    withContentLeft,
    isOpened,
    className,
    ...rest
}: SectionProps<T>) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const icon = (
        <SectionIcon>
            <ArrowIcon className={cls(isCollapsed && classes.navigationDrawerArrowInverse)} color="inherit" />
        </SectionIcon>
    );

    return (
        <StyledSection className={className} {...rest}>
            {label ? (
                <SectionHeader onClick={() => setIsCollapsed(!isCollapsed)}>
                    {withContentLeft && label && icon}
                    {isOpened && label}
                    {!withContentLeft && icon}
                </SectionHeader>
            ) : (
                <SectionDivider />
            )}

            {!isCollapsed &&
                items.map((item, index) => (
                    <MenuItem {...item} key={index} withContentLeft={withContentLeft} isOpened={isOpened} />
                ))}
        </StyledSection>
    );
};
