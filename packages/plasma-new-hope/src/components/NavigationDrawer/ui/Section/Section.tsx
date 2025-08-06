import React from 'react';

import { cx } from '../../../../utils';
import { IconDisclosureDownCentered } from '../../../_Icon';
import { classes } from '../../NavigationDrawer.tokens';
import { MenuItem } from '../MenuItem/MenuItem';

import { SectionProps } from './Section.types';
import { sectionDividerStyles, sectionHeaderStyles, sectionStyles } from './Section.styles';

export const Section = <T extends boolean = false>({
    items,
    label,
    withContentLeft,
    isOpened,
    className,
    ...rest
}: SectionProps<T>) => {
    return (
        <div className={cx(sectionStyles, className)} {...rest}>
            {label ? (
                <div className={sectionHeaderStyles}>
                    {withContentLeft && label && (
                        <div className={classes.navigationDrawerMenuItemIcon}>
                            <IconDisclosureDownCentered />
                        </div>
                    )}
                    {isOpened && label}
                    {!withContentLeft && (
                        <div className={classes.navigationDrawerMenuItemIcon}>
                            <IconDisclosureDownCentered />
                        </div>
                    )}
                </div>
            ) : (
                <div className={sectionDividerStyles} />
            )}

            {items.map((item, index) => (
                <MenuItem
                    {...item}
                    key={String(item.label) + index}
                    withContentLeft={withContentLeft}
                    isOpened={isOpened}
                />
            ))}
        </div>
    );
};
