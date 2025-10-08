import React, { forwardRef } from 'react';
import type { PropsWithChildren, ReactNode } from 'react';
import { getPlacements, getSizeValueFromProp } from 'src/utils';

import type { PopoverProps } from '../../DateTimePicker.types';

import { StyledPopover } from './Popover.styles';

type PopoverUIProps = {
    target: ReactNode;
} & PopoverProps &
    PropsWithChildren;

export const Popover = forwardRef<HTMLDivElement, PopoverUIProps>(
    ({ children, placement, calendarContainerWidth, calendarContainerHeight, ...rest }, ref) => {
        const calendarContainerWidthValue = calendarContainerWidth
            ? getSizeValueFromProp(calendarContainerWidth, 'rem')
            : undefined;
        const calendarContainerHeightValue = calendarContainerHeight
            ? getSizeValueFromProp(calendarContainerHeight, 'rem')
            : undefined;

        return (
            <StyledPopover
                ref={ref}
                {...rest}
                innerWidth={calendarContainerWidthValue}
                innerHeight={calendarContainerHeightValue}
                placement={getPlacements(placement, false)}
                trigger="click"
                isFocusTrapped={false}
                preventOverflow={false}
            >
                {children}
            </StyledPopover>
        );
    },
);
