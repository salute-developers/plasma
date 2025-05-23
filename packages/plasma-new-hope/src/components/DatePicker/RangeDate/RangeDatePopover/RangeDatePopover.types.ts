import type { Dispatch, FC, PropsWithChildren, ReactNode, SetStateAction, MouseEventHandler } from 'react';

import type { DatePickerPopoverProps } from '../../SingleDate/SingleDate.types';
import type { DateInfo, DateType } from '../../../Calendar/Calendar.types';
import type { DatePickerCalendarProps } from '../../DatePickerBase.types';

export type RootWrapperProps = FC<
    PropsWithChildren &
        React.RefAttributes<HTMLDivElement> & {
            className?: string;
            onClick?: MouseEventHandler<HTMLDivElement> | undefined;
        }
>;

export type RangeDatePopoverProps = DatePickerCalendarProps &
    DatePickerPopoverProps & {
        rootWrapper: RootWrapperProps;
        onChangeValue: (values: [DateType, DateType], dateInfo?: DateInfo) => void;
        setIsInnerOpen: Dispatch<SetStateAction<boolean>>;
        calendarValue: [DateType, DateType];
        isDoubleCalendar?: boolean;
        target?: ReactNode;
        onChangeStartOfRange?: (value: Date, dateInfo?: DateInfo) => void;
        size?: string;
        calendarContainerWidth?: number | string;
        calendarContainerHeight?: number | string;
        stretched?: boolean;
        readOnly?: boolean;
        disabled?: boolean;
    };
