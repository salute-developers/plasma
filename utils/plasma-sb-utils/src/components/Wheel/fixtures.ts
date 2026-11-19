export const alignments = ['left', 'center', 'right', 'mixed'];
export const separators = ['none', 'dots', 'divider'];
export const visibleItemsCounts = [3, 5];

const createItems = (count: number) =>
    Array.from({ length: count }, (_, value) => ({
        value,
        label: String(value).padStart(2, '0'),
    }));

export const hourItems = createItems(24);
export const minuteItems = createItems(60);
export const initialTime = { hours: 12, minutes: 30, seconds: 15 };

export const countries = [
    { value: 'ru', label: 'Россия' },
    { value: 'by', label: 'Беларусь' },
    { value: 'kz', label: 'Казахстан' },
    { value: 'am', label: 'Армения' },
    { value: 'ge', label: 'Грузия' },
    { value: 'tr', label: 'Турция' },
    { value: 'de', label: 'Германия' },
    { value: 'jp', label: 'Япония' },
];

export const cities = {
    ru: [
        { value: 'msk', label: 'Москва' },
        { value: 'spb', label: 'Петербург' },
        { value: 'novosibirsk', label: 'Новосибирск' },
        { value: 'yekaterinburg', label: 'Екатеринбург' },
        { value: 'kazan', label: 'Казань' },
        { value: 'nizhny-novgorod', label: 'Нижний Новгород' },
    ],
    by: [
        { value: 'minsk', label: 'Минск' },
        { value: 'brest', label: 'Брест' },
        { value: 'grodno', label: 'Гродно' },
        { value: 'gomel', label: 'Гомель' },
        { value: 'vitebsk', label: 'Витебск' },
        { value: 'mogilev', label: 'Могилёв' },
    ],
    kz: [
        { value: 'astana', label: 'Астана' },
        { value: 'almaty', label: 'Алматы' },
        { value: 'shymkent', label: 'Шымкент' },
        { value: 'karaganda', label: 'Караганда' },
        { value: 'aktobe', label: 'Актобе' },
        { value: 'pavlodar', label: 'Павлодар' },
    ],
    am: [
        { value: 'yerevan', label: 'Ереван' },
        { value: 'gyumri', label: 'Гюмри' },
        { value: 'vanadzor', label: 'Ванадзор' },
        { value: 'dilijan', label: 'Дилижан' },
        { value: 'sevan', label: 'Севан' },
        { value: 'abovyan', label: 'Абовян' },
    ],
    ge: [
        { value: 'tbilisi', label: 'Тбилиси' },
        { value: 'batumi', label: 'Батуми' },
        { value: 'kutaisi', label: 'Кутаиси' },
        { value: 'rustavi', label: 'Рустави' },
        { value: 'gori', label: 'Гори' },
        { value: 'poti', label: 'Поти' },
    ],
    tr: [
        { value: 'istanbul', label: 'Стамбул' },
        { value: 'ankara', label: 'Анкара' },
        { value: 'izmir', label: 'Измир' },
        { value: 'antalya', label: 'Анталья' },
        { value: 'bursa', label: 'Бурса' },
        { value: 'konya', label: 'Конья' },
    ],
    de: [
        { value: 'berlin', label: 'Берлин' },
        { value: 'munich', label: 'Мюнхен' },
        { value: 'hamburg', label: 'Гамбург' },
        { value: 'cologne', label: 'Кёльн' },
        { value: 'frankfurt', label: 'Франкфурт-на-Майне' },
        { value: 'stuttgart', label: 'Штутгарт' },
    ],
    jp: [
        { value: 'tokyo', label: 'Токио' },
        { value: 'osaka', label: 'Осака' },
        { value: 'kyoto', label: 'Киото' },
        { value: 'nagoya', label: 'Нагоя' },
        { value: 'yokohama', label: 'Иокогама' },
        { value: 'sapporo', label: 'Саппоро' },
    ],
};

export const initialLocation: { country: keyof typeof cities; city: string } = { country: 'ru', city: 'msk' };
