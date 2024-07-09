export const ROW_STEP = 6;
export const ROW_MONTH_STEP = 3;
export const ROW_YEAR_STEP = 3;

export const YEAR_RENDER_COUNT = 12;

export const SHORT_DAY_NAMES = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'] as const;

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
