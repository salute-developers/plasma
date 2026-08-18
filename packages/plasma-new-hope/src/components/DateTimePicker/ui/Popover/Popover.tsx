import React, { forwardRef } from 'react';
import type { PropsWithChildren, ReactNode } from 'react';
import { getPlacements } from 'src/utils';

import { getCalendarContainerSize, hasCustomCalendarContainerSize } from '../../../DatePicker/utils';
import type { PopoverProps } from '../../DateTimePicker.types';

import { StyledPopover } from './Popover.styles';

type PopoverUIProps = {
    target: ReactNode;
    stretched?: boolean;
} & PopoverProps &
    PropsWithChildren;

export const Popover = forwardRef<HTMLDivElement, PopoverUIProps>(
    ({ children, placement, calendarContainerWidth, calendarContainerHeight, stretched, ...rest }, ref) => {
        const calendarContainerWidthValue = getCalendarContainerSize(calendarContainerWidth, stretched);
        const calendarContainerHeightValue = getCalendarContainerSize(calendarContainerHeight, stretched);
        const stretchWidth = Boolean(stretched && !hasCustomCalendarContainerSize(calendarContainerWidth));
        const stretchHeight = Boolean(stretched && !hasCustomCalendarContainerSize(calendarContainerHeight));

        return (
            <StyledPopover
                ref={ref}
                {...rest}
                $stretchWidth={stretchWidth}
                stretchHeight={stretchHeight}
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
