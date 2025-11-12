import React from 'react';
import type { TimePickerGridProps } from 'src/components/TimePickerGrid';
import { getSizeValueFromProp } from 'src/utils';

import { StyledTimeGrid } from './TimeGrid.styles';

type TimeGridProps = {
    columns: number;
    calendarContainerWidth?: number | string;
    calendarContainerHeight?: number | string;
} & TimePickerGridProps;

export const TimeGrid = ({ columns, calendarContainerWidth, calendarContainerHeight, ...rest }: TimeGridProps) => {
    const calendarContainerWidthValue = calendarContainerWidth
        ? getSizeValueFromProp(calendarContainerWidth, 'rem')
        : undefined;

    const calendarContainerHeightValue = calendarContainerHeight
        ? getSizeValueFromProp(calendarContainerHeight, 'rem')
        : undefined;

    return (
        <StyledTimeGrid
            columns={columns}
            innerWidth={calendarContainerWidthValue}
            innerHeight={calendarContainerHeightValue}
            {...rest}
        />
    );
};
