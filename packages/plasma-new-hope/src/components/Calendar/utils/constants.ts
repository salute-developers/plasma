import type { QuarterPartialDate, Locales } from '../Calendar.types';

const LOCALES = {
    ru: 'ru-RU',
    en: 'en-US',
};

type LocalMap = Record<Locales, string[]>;

export const MONTHS = Array.from({ length: 12 }, (_, i) => i + 1);
const WEEKS = Array.from({ length: 7 }, (_, i) => i + 1);

const callbackDayFormatter = (locale: Locales, options: Intl.DateTimeFormatOptions) => {
    const dateFormatter = new Intl.DateTimeFormat(LOCALES[locale], options);

    return (index: number) => {
        // INFO: Start for monday
        const day = new Date(Date.UTC(2024, 0, index));

        const [first, ...rest] = dateFormatter.format(day);

        return first.toUpperCase() + rest.join('');
    };
};

const callbackMonthFormatter = (locale: Locales, options: Intl.DateTimeFormatOptions) => {
    const dateFormatter = new Intl.DateTimeFormat(LOCALES[locale], options);

    return (month: number) => {
        const data = new Date(Date.UTC(2024, month - 1));
        const [first, ...rest] = dateFormatter.format(data);

        return first.toUpperCase() + rest.join('').replace('.', '');
    };
};

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

export const SHORT_DAY_NAMES: LocalMap = {
    ru: WEEKS.map(callbackDayFormatter('ru', { weekday: 'short' })),
    en: WEEKS.map(callbackDayFormatter('en', { weekday: 'short' })),
};

export const FULL_DAY_NAMES: Record<'ru' | 'en', Record<string, string>> = {
    ru: {
        Пн: 'Понедельник',
        Вт: 'Вторник',
        Ср: 'Среда',
        Чт: 'Четверг',
        Пт: 'Пятница',
        Сб: 'Суббота',
        Вс: 'Воскресенье',
    },
    en: {
        Mon: 'Monday',
        Tue: 'Tuesday',
        Wed: 'Wednesday',
        Thu: 'Thursday',
        Fri: 'Friday',
        Sat: 'Saturday',
        Sun: 'Sunday',
    },
};

export const SHORT_MONTH_NAME: LocalMap = {
    ru: MONTHS.map(callbackMonthFormatter('ru', { month: 'short' })),
    en: MONTHS.map(callbackMonthFormatter('en', { month: 'short' })),
};

export const MONTH_NAMES: LocalMap = {
    ru: MONTHS.map(callbackMonthFormatter('ru', { month: 'long' })),
    en: MONTHS.map(callbackMonthFormatter('en', { month: 'long' })),
};

export const I18N = {
    next: {
        ru: 'Следующий',
        en: 'Next',
    },
    previous: {
        ru: 'Предыдущий',
        en: 'Previous',
    },
    selectDate: {
        ru: 'Выбор даты',
        en: 'Date selection',
    },
    navigationByShift: {
        ru: 'Для навигации только по доступным датам удерживайте клавишу Shift.',
        en: 'To navigate exclusively among the available dates, hold down the Shift key.',
    },
    year: {
        ru: 'год',
        en: 'year',
    },
    period: {
        ru: 'период',
        en: 'period',
    },
    month: {
        ru: 'месяц',
        en: 'month',
    },
};
