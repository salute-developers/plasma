import React, { forwardRef } from 'react';
import cls from 'classnames';

import { classes } from '../tokens';

import { StyledSelection } from './TabsSelection.styles';

type TabsSelectionProps = {
    orientation: 'horizontal' | 'vertical';
    dividerAlign?: 'left' | 'right';
};

export const TabsSelection = forwardRef<HTMLSpanElement, TabsSelectionProps>(({ orientation, dividerAlign }, ref) => (
    <StyledSelection
        ref={ref}
        aria-hidden
        className={cls(classes.tabsSelection, {
            [classes.tabsSelectionHorizontal]: orientation === 'horizontal',
            [classes.tabsSelectionVertical]: orientation === 'vertical',
            [classes.dividerAlignRight]: dividerAlign === 'right',
        })}
    />
));
