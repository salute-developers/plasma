import type { FC, PropsWithChildren, ReactNode } from 'react';

import type { DatePickerPopoverProps } from '../../SingleDate/SingleDate.types';
import type { DateInfo, DateType } from '../../../Calendar/Calendar.types';
import type { DatePickerCalendarProps } from '../../DatePickerBase.types';

export type RangeDatePopoverProps = DatePickerCalendarProps &
    DatePickerPopoverProps & {
        rootWrapper: FC<PropsWithChildren>;
        /**
         * Обработчик изменения значения.
         */
        onChangeValue: (values: [DateType, DateType], dateInfo?: DateInfo) => void;
        /**
         * Выбранное значение.
         */
        calendarValue: [DateType, DateType];
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
