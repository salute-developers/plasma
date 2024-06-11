import type { ReactNode } from 'react';

import type { DatePickerCalendarProps, DatePickerPopoverProps } from '../../SingleDate/DatePicker.types';

export type RangeDatePopoverProps = DatePickerCalendarProps &
    DatePickerPopoverProps & {
        /**
         * Обработчик изменения значения.
         */
        onChangeValue: (values: [Date, Date?]) => void;
        /**
         * Выбранное значение.
         */
        calendarValue: [Date?, Date?];
        /**
         * Отобразить двойной календарь
         */
        isDoubleCalendar?: boolean;
        /**
         * Компонент для отображения диапазона.
         */
        target?: ReactNode;
        /**
         * Обработчик для выбора стартового значения в диапазоне.
         */
        onChangeStartOfRange?: (value: Date) => void;
        /**
         * Размер контрола.
         */
        size?: string;
    };
