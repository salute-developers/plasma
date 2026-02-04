import type {
    Dispatch,
    FC,
    PropsWithChildren,
    ReactNode,
    SetStateAction,
    MouseEventHandler,
    CSSProperties,
} from 'react';

import type { DatePickerPopoverProps } from '../../SingleDate/SingleDate.types';
import type { DateInfo, DateType } from '../../../Calendar/Calendar.types';
import type { DatePickerCalendarProps } from '../../DatePickerBase.types';
import type { DateShortcutItem } from '../RangeDate.types';

export type RootWrapperProps = FC<
    PropsWithChildren &
        React.RefAttributes<HTMLDivElement> & {
            className?: string;
            onClick?: MouseEventHandler<HTMLDivElement> | undefined;
        }
>;

export type RangeDatePopoverProps = DatePickerCalendarProps &
    Omit<DatePickerPopoverProps, 'dateShortcuts'> & {
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
        dateShortcuts?: DateShortcutItem[];
        dateShortcutsWidth?: CSSProperties['width'];
        dateShortcutsPlacement?: 'right' | 'left';
        onShortcutDateSelect?: (shortcutDate: [Date?, Date?]) => void;
    };
