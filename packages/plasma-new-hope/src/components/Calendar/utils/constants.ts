import type { QuarterPartialDate } from '../Calendar.types';

export const ROW_STEP = 6;
export const ROW_MONTH_STEP = 4;
export const ROW_YEAR_STEP = 4;
export const ROW_QUARTER_STEP = 2;

export const YEAR_RENDER_COUNT = 12;

export const offsetMap = {
    Days: ROW_STEP,
    Months: ROW_MONTH_STEP,
    Years: ROW_YEAR_STEP,
    Quarters: ROW_QUARTER_STEP,
};

export const QUARTER_NAMES = ['Q1', 'Q2', 'Q3', 'Q4'];

export const quarterDates: Record<typeof QUARTER_NAMES[number], QuarterPartialDate> = {
    Q1: {
        monthIndex: 0,
        day: 1,
    },
    Q2: {
        monthIndex: 3,
        day: 1,
    },
    Q3: {
        monthIndex: 6,
        day: 1,
    },
    Q4: {
        monthIndex: 9,
        day: 1,
    },
};

export const SHORT_DAY_NAMES = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

export const FULL_DAY_NAMES: Record<typeof SHORT_DAY_NAMES[number], string> = {
    Пн: 'Понедельник',
    Вт: 'Вторник',
    Ср: 'Среда',
    Чт: 'Четверг',
    Пт: 'Пятница',
    Сб: 'Суббота',
    Вс: 'Воскресенье',
};

export const SHORT_MONTH_NAME = ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

export const MONTH_NAMES = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
];
