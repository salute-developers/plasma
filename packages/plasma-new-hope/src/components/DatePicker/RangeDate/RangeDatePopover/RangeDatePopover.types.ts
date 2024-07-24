import type { ReactNode } from 'react';

import type { DatePickerPopoverProps } from '../../SingleDate/SingleDate.types';
import type { DateInfo } from '../../../Calendar/Calendar.types';
import type { DatePickerCalendarProps } from '../../DatePickerBase.types';

export type RangeDatePopoverProps = DatePickerCalendarProps &
    DatePickerPopoverProps & {
        /**
         * Обработчик изменения значения.
         */
        onChangeValue: (values: [Date, Date?], dateInfo?: DateInfo) => void;
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
        onChangeStartOfRange?: (value: Date, dateInfo?: DateInfo) => void;
        /**
         * Размер контрола.
         */
        size?: string;
    };
