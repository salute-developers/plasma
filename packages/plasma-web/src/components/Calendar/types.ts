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
}

export interface DayProps extends Partial<ItemProps> {
    isDayInCurrentMonth?: boolean;
    dayOfWeek?: boolean;
}

export interface MonthsProps extends ItemProps {}

export interface YearsProps extends ItemProps {}
