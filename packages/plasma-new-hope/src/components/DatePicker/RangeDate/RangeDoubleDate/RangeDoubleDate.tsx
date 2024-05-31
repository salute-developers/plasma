import React, { useEffect } from 'react';

import { getPlacements } from '../../../../utils';
import { StyledPopover } from '../DatePicker.styles';

import type { RangeDoubleDateProps } from './RangeDoubleDate.types';
import { StyledCalendar } from './RangeDoubleDate.styles';

export const RangeDoubleDate = ({
    target,

    isOpen,

    calendarValue,
    min,
    max,
    includeEdgeDates,
    eventList,
    disabledList,
    placement = ['top', 'bottom'],
    closeOnOverlayClick = true,
    offset,

    onChangeValue,
    onChangeStartOfRange,

    onToggle,
}: RangeDoubleDateProps) => {
    return (
        <StyledPopover
            isOpen={isOpen}
            usePortal={false}
            onToggle={onToggle}
            offset={offset}
            placement={getPlacements(placement)}
            trigger="click"
            closeOnOverlayClick={closeOnOverlayClick}
            isFocusTrapped={false}
            target={target}
            preventOverflow={false}
        >
            <StyledCalendar
                value={calendarValue}
                eventList={eventList}
                disabledList={disabledList}
                min={min}
                max={max}
                includeEdgeDates={includeEdgeDates}
                onChangeValue={onChangeValue}
                onChangeStartOfRange={onChangeStartOfRange}
            />
        </StyledPopover>
    );
};
