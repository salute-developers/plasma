import type { PickerProps } from '../Picker';

type DateRange = {
    value: number | string;
    date: Date;
};

export interface SimpleTimePickerProps extends Omit<PickerProps, 'items'> {
    type: 'hours' | 'minutes' | 'seconds';
    range: DateRange[];
    dateStructureGetter: (date: Date) => number;
}
