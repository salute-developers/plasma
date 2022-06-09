export interface DateObject {
    day: number;
    monthIndex: number;
    year: number;
}

export enum CalendarState {
    Days = 'Days',
    Months = 'Months',
    Years = 'Years',
}

export type CalendarStateType = keyof typeof CalendarState;

export interface ItemProps {
    isCurrent: boolean;
    isSelected: boolean;
}

export interface DateItem extends ItemProps {
    isDayInCurrentMonth: boolean;
    date: DateObject;
    events?: EventDay[];
    disabled?: boolean;
}

export interface DayProps extends Partial<ItemProps> {
    isDayInCurrentMonth?: boolean;
    disabled?: boolean;
    dayOfWeek?: boolean;
}

export interface MonthsProps extends ItemProps {}

export interface YearsProps extends ItemProps {}

export interface EventDay {
    date: Date;
    color?: string;
}

export interface DisabledDay {
    date: Date;
}
