import { IconEditOutline } from '@salutejs/plasma-icons';
import {
    buttonConfig,
    buttonGroupConfig,
    component,
    dropdownConfig,
    iconButtonConfig,
    lineSkeletonConfig,
    mergeConfig,
    paginationConfig,
    tableConfig,
} from '@salutejs/plasma-new-hope/styled-components';
import { useEffect, useRef, useState } from 'react';
import type { UIEvent } from 'react';

import type { WebStory } from './types';

const Table = component(mergeConfig(tableConfig as any, {}));

const fallbackComponents: Record<string, any> = {
    Dropdown: component(mergeConfig(dropdownConfig as any, {})),
    IconButton: component(mergeConfig(iconButtonConfig as any, {})),
    ButtonGroup: component(mergeConfig(buttonGroupConfig as any, {})),
    Button: component(mergeConfig(buttonConfig as any, {})),
    Pagination: component(mergeConfig(paginationConfig as any, {})),
    LineSkeleton: component(mergeConfig(lineSkeletonConfig as any, {})),
};

/** Связанный компонент дизайн-системы, а без него — компонент ядра без темы. */
const related = (relatedComponents: Record<string, any> | undefined, name: string) =>
    relatedComponents?.[name] ?? fallbackComponents[name];

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const borderVariantArg = {
    name: 'borderVariant',
    value: 'all',
    items: toItems(['rows', 'header', 'all']),
};

type DataRow = {
    id: string;
    country: string;
    capital: string;
    population: number;
    continent: string;
    currency: string;
    officialLanguage: string;
    area: number;
};

const rowsDefault: DataRow[] = [
    {
        id: '0',
        country: 'Канада',
        capital: 'Оттава',
        population: 38,
        continent: 'Северная Америка',
        currency: 'Канадский доллар',
        officialLanguage: 'Английский, Французский',
        area: 9984,
    },
    {
        id: '1',
        country: 'Бразилия',
        capital: 'Бразилиа',
        population: 213,
        continent: 'Южная Америка',
        currency: 'Бразильский реал',
        officialLanguage: 'Португальский',
        area: 8515,
    },
    {
        id: '2',
        country: 'Германия',
        capital: 'Берлин',
        population: 83,
        continent: 'Европа',
        currency: 'Евро',
        officialLanguage: 'Немецкий',
        area: 357,
    },
    {
        id: '3',
        country: 'Япония',
        capital: 'Токио',
        population: 126,
        continent: 'Азия',
        currency: 'Йена',
        officialLanguage: 'Японский',
        area: 377,
    },
    {
        id: '4',
        country: 'Австралия',
        capital: 'Канберра',
        population: 26,
        continent: 'Океания',
        currency: 'Австралийский доллар',
        officialLanguage: 'Английский',
        area: 7692,
    },
    {
        id: '5',
        country: 'Нигерия',
        capital: 'Абуджа',
        population: 206,
        continent: 'Африка',
        currency: 'Найра',
        officialLanguage: 'Английский',
        area: 923,
    },
    {
        id: '6',
        country: 'Индия',
        capital: 'Нью-Дели',
        population: 1400,
        continent: 'Азия',
        currency: 'Индийская рупия',
        officialLanguage: 'Хинди, Английский',
        area: 3287,
    },
    {
        id: '7',
        country: 'Франция',
        capital: 'Париж',
        population: 67,
        continent: 'Европа',
        currency: 'Евро',
        officialLanguage: 'Французский',
        area: 643,
    },
    {
        id: '8',
        country: 'Россия',
        capital: 'Москва',
        population: 143,
        continent: 'Европа/Азия',
        currency: 'Российский рубль',
        officialLanguage: 'Русский',
        area: 17098,
    },
    {
        id: '9',
        country: 'Южная Африка',
        capital: 'Претория',
        population: 59,
        continent: 'Африка',
        currency: 'Южноафриканский ранд',
        officialLanguage: 'Зулу, Коса, Африкаанс, Английский',
        area: 1221,
    },
];

const columnsDefault = [
    { id: 'country', label: 'Страна' },
    { id: 'capital', label: 'Столица' },
    { id: 'population', label: 'Население, млн' },
    { id: 'continent', label: 'Континент' },
    { id: 'currency', label: 'Валюта' },
    { id: 'officialLanguage', label: 'Язык' },
    { id: 'area', label: 'Площадь, тыс. км²' },
];

const columnsPagination = [
    { id: 'number', label: 'Номер' },
    { id: 'country', label: 'Страна' },
    { id: 'capital', label: 'Столица' },
    { id: 'population', label: 'Население, млн' },
];

const countries: [string, string, number][] = [
    ['Россия', 'Москва', 146],
    ['Франция', 'Париж', 67],
    ['Германия', 'Берлин', 83],
    ['Италия', 'Рим', 59],
    ['Испания', 'Мадрид', 47],
    ['Португалия', 'Лиссабон', 10],
    ['Польша', 'Варшава', 38],
    ['Чехия', 'Прага', 10.7],
    ['Словакия', 'Братислава', 5.4],
    ['Венгрия', 'Будапешт', 9.7],
    ['Австрия', 'Вена', 8.9],
    ['Швейцария', 'Берн', 8.6],
    ['Бельгия', 'Брюссель', 11.5],
    ['Нидерланды', 'Амстердам', 17.5],
    ['Дания', 'Копенгаген', 5.8],
    ['Швеция', 'Стокгольм', 10.3],
    ['Норвегия', 'Осло', 5.4],
    ['Финляндия', 'Хельсинки', 5.5],
    ['Исландия', 'Рейкьявик', 0.37],
    ['Ирландия', 'Дублин', 5],
    ['Великобритания', 'Лондон', 67],
    ['Канада', 'Оттава', 38],
    ['США', 'Вашингтон', 331],
    ['Мексика', 'Мехико', 128],
    ['Бразилия', 'Бразилиа', 213],
    ['Аргентина', 'Буэнос-Айрес', 45],
    ['Чили', 'Сантьяго', 19],
    ['Перу', 'Лима', 33],
    ['Колумбия', 'Богота', 51],
    ['Венесуэла', 'Каракас', 28],
    ['Китай', 'Пекин', 1410],
    ['Япония', 'Токио', 125],
    ['Южная Корея', 'Сеул', 52],
    ['Северная Корея', 'Пхеньян', 26],
    ['Индия', 'Нью-Дели', 1400],
    ['Пакистан', 'Исламабад', 230],
    ['Бангладеш', 'Дакка', 170],
    ['Шри-Ланка', 'Котте', 22],
    ['Непал', 'Катманду', 30],
    ['Таиланд', 'Бангкок', 70],
    ['Вьетнам', 'Ханой', 98],
    ['Малайзия', 'Куала-Лумпур', 33],
    ['Сингапур', 'Сингапур', 5.7],
    ['Индонезия', 'Джакарта', 275],
    ['Филиппины', 'Манила', 113],
    ['Австралия', 'Канберра', 26],
    ['Новая Зеландия', 'Веллингтон', 5],
    ['Египет', 'Каир', 110],
    ['Марокко', 'Рабат', 37],
    ['Алжир', 'Алжир', 45],
    ['ЮАР', 'Претория', 60],
    ['Нигерия', 'Абуджа', 227],
    ['Кения', 'Найроби', 55],
    ['Эфиопия', 'Аддис-Абеба', 126],
    ['Гана', 'Аккра', 34],
    ['Турция', 'Анкара', 85],
    ['Иран', 'Тегеран', 89],
    ['Ирак', 'Багдад', 43],
    ['Саудовская Аравия', 'Эр-Рияд', 36],
    ['ОАЭ', 'Абу-Даби', 10],
    ['Израиль', 'Иерусалим', 9.8],
    ['Иордания', 'Амман', 11],
    ['Греция', 'Афины', 10.3],
    ['Болгария', 'София', 6.8],
    ['Румыния', 'Бухарест', 19],
    ['Хорватия', 'Загреб', 4],
    ['Сербия', 'Белград', 6.7],
    ['Словения', 'Любляна', 2.1],
    ['Литва', 'Вильнюс', 2.8],
    ['Латвия', 'Рига', 1.9],
    ['Эстония', 'Таллин', 1.3],
    ['Беларусь', 'Минск', 9.2],
    ['Украина', 'Киев', 36],
    ['Молдова', 'Кишинёв', 2.6],
    ['Грузия', 'Тбилиси', 3.7],
    ['Армения', 'Ереван', 2.8],
    ['Азербайджан', 'Баку', 10.2],
    ['Казахстан', 'Астана', 20],
    ['Узбекистан', 'Ташкент', 36],
    ['Туркменистан', 'Ашхабад', 6],
    ['Кыргызстан', 'Бишкек', 7],
    ['Таджикистан', 'Душанбе', 10],
    ['Монголия', 'Улан-Батор', 3.4],
    ['Афганистан', 'Кабул', 41],
    ['Сирия', 'Дамаск', 22],
    ['Ливан', 'Бейрут', 5.5],
    ['Катар', 'Доха', 3],
    ['Кувейт', 'Эль-Кувейт', 4.5],
    ['Оман', 'Маскат', 4.6],
    ['Йемен', 'Сана', 34],
    ['Чили', 'Сантьяго', 19],
    ['Парагвай', 'Асунсьон', 7.5],
    ['Уругвай', 'Монтевидео', 3.5],
    ['Боливия', 'Сукре', 12],
    ['Эквадор', 'Кито', 18],
    ['Куба', 'Гавана', 11],
    ['Доминикана', 'Санто-Доминго', 11],
    ['Гаити', 'Порт-о-Пренс', 11.5],
    ['Ямайка', 'Кингстон', 3],
    ['Панама', 'Панама', 4.4],
];

const rowsPagination = countries.map(([country, capital, population], index) => ({
    id: String(index + 1),
    number: index + 1,
    country,
    capital,
    population,
}));

/** Пропсы таблицы из аргументов story: `maxHeight` пустой строкой — без ограничения. */
const toTableProps = ({ maxHeight, ...rest }: any) => ({ ...rest, maxHeight: maxHeight || undefined });

const TableDefault = {
    name: 'Default',
    args: [
        borderVariantArg,
        {
            name: 'hasTopContent',
            value: false,
        },
        {
            name: 'hasBottomContent',
            value: false,
        },
    ],
    render: function Story(args: any) {
        const { hasTopContent, hasBottomContent, ...rest } = args;

        return (
            <Table
                {...rest}
                data={rowsDefault}
                columns={columnsDefault}
                topContent={hasTopContent ? 'Ячейка topContent' : null}
                bottomContent={hasBottomContent ? 'Ячейка bottomContent' : null}
            />
        );
    },
};

type Filter = { id: string; value: string[] };
type Sort = { id: string; desc: boolean };

const populationFilters: Record<string, (population: number) => boolean> = {
    small: (population) => population < 50,
    big: (population) => population > 100,
};

const languageFilters: Record<string, string> = {
    en: 'английский',
    ru: 'русский',
    it: 'итальянский',
};

const filterHelper = (rows: DataRow[], filtered: Filter[]): DataRow[] =>
    filtered.reduce((acc, { id, value }) => {
        if (value.length === 0) return acc;

        switch (id) {
            case 'population':
                return acc.filter(({ population }) => value.some((val) => populationFilters[val]?.(population)));
            case 'officialLanguage':
                return acc.filter(({ officialLanguage }) =>
                    value.some(
                        (val) => languageFilters[val] && officialLanguage.toLowerCase().includes(languageFilters[val]),
                    ),
                );
            default:
                return acc;
        }
    }, rows);

const sortedHelper = (rows: DataRow[], sorted: Sort[]): DataRow[] => {
    if (sorted.length === 0) return rows;

    const { id, desc } = sorted[0];
    const value = (row: DataRow) => Number((row as Record<string, unknown>)[id]) || 0;

    return [...rows].sort((a, b) => (desc ? value(b) - value(a) : value(a) - value(b)));
};

/** Имитация бэкенда из sdds-serv: выбор, фильтры, сортировка и правка строк живут в состоянии story. */
const useBackendImitation = (rows: DataRow[]) => {
    const [data, setData] = useState(rows);
    const [selected, setSelected] = useState<Record<string, boolean>>({});
    const [filtered, setFiltered] = useState<Filter[]>([]);
    const [sorted, setSorted] = useState<Sort[]>([]);

    const onChange = (state: { selected: Record<string, boolean>; sorted: Sort[]; filtered: Filter[] }) => {
        setSelected(state.selected);
        setFiltered(state.filtered);
        setSorted(state.sorted);
    };

    const clearSelected = () => setSelected({});
    const clearFiltered = () => setFiltered([]);
    const clearSorted = () => setSorted([]);

    return {
        data: sortedHelper(filterHelper(data, filtered), sorted),
        selected,
        filtered,
        sorted,
        onChange,
        deleteItem: (rowId: string) => setData(data.filter(({ id }) => id !== rowId)),
        updateRow: (rowId: string, columnId: string, value: unknown) =>
            setData(data.map((item) => (item.id === rowId ? { ...item, [columnId]: value } : item))),
        clearSelected,
        clearFiltered,
        clearSorted,
        clearAll: () => {
            clearSelected();
            clearFiltered();
            clearSorted();
        },
        addRow: () =>
            setData([
                ...data,
                {
                    id: (Math.floor(Math.random() * (10000 - 100 + 1)) + 100).toString(),
                    country: '',
                    capital: '',
                    population: 0,
                    continent: '',
                    currency: '',
                    officialLanguage: '',
                    area: 0,
                },
            ]),
        selectRow: (rowId: string) => setSelected({ ...selected, [rowId]: true }),
    };
};

const TableComplex = {
    name: 'Complex',
    args: [
        borderVariantArg,
        {
            name: 'stickyHeader',
            value: true,
        },
        {
            name: 'maxHeight',
            value: '400px',
        },
        {
            name: 'enableSelection',
            value: true,
        },
    ],
    render: function Story({ relatedComponents, ...args }: any) {
        const Dropdown = related(relatedComponents, 'Dropdown');
        const IconButton = related(relatedComponents, 'IconButton');
        const ButtonGroup = related(relatedComponents, 'ButtonGroup');
        const Button = related(relatedComponents, 'Button');
        const {
            data,
            selected,
            filtered,
            sorted,
            onChange,
            deleteItem,
            updateRow,
            clearSelected,
            clearFiltered,
            clearSorted,
            clearAll,
            addRow,
            selectRow,
        } = useBackendImitation(rowsDefault);
        const ref = useRef(null);

        const columns = [
            { id: 'country', label: 'Страна', enableResizing: true, enableEditing: true },
            { id: 'capital', label: 'Столица', enableResizing: true, enableEditing: true },
            {
                id: 'population',
                label: 'Население, млн',
                enableSorting: true,
                enableResizing: true,
                filters: [
                    { value: 'small', label: '< 50' },
                    { value: 'big', label: '> 100' },
                ],
                enableEditing: true,
            },
            { id: 'continent', label: 'Континент', enableResizing: true, enableEditing: true },
            { id: 'currency', label: 'Валюта', enableResizing: true, enableEditing: true },
            {
                id: 'officialLanguage',
                label: 'Язык',
                enableResizing: true,
                filters: [
                    { value: 'en', label: 'Английский' },
                    { value: 'ru', label: 'Русский' },
                    { value: 'it', label: 'Итальянский' },
                ],
                enableEditing: true,
            },
            { id: 'area', label: 'Площадь, тыс. км²', enableSorting: true, enableResizing: true, enableEditing: true },
            {
                id: 'control',
                label: '',
                width: 0,
                renderCell: (_: unknown, row: DataRow) => (
                    <Dropdown
                        portal={ref}
                        items={[
                            { value: 'choose', label: 'Выбрать' },
                            { value: 'delete', label: 'Удалить' },
                        ]}
                        onItemSelect={({ value }: { value: string }) => {
                            if (value === 'choose') selectRow(row.id);
                            if (value === 'delete') deleteItem(row.id);
                        }}
                    >
                        <IconButton view="clear" size="xs">
                            <IconEditOutline />
                        </IconButton>
                    </Dropdown>
                ),
            },
        ];

        return (
            <div>
                <ButtonGroup size="xs" isCommonButtonStyles={false}>
                    <Button text="Очистить выбранные" onClick={clearSelected} />
                    <Button text="Убрать сортировку" onClick={clearSorted} />
                    <Button text="Очистить фильтры" onClick={clearFiltered} />
                    <Button text="Очистить все" onClick={clearAll} />
                    <Button text="Добавить строку" onClick={addRow} />
                </ButtonGroup>

                <br />
                <br />

                <Table
                    {...toTableProps(args)}
                    data={data}
                    columns={columns}
                    onChange={onChange}
                    selected={selected}
                    sorted={sorted}
                    filtered={filtered}
                    onCellUpdate={updateRow}
                    ref={ref}
                />
            </div>
        );
    },
};

const TablePagination = {
    name: 'Pagination',
    args: [
        borderVariantArg,
        {
            name: 'stickyHeader',
            value: true,
        },
        {
            name: 'maxHeight',
            value: '300px',
        },
    ],
    render: function Story({ relatedComponents, ...args }: any) {
        const Pagination = related(relatedComponents, 'Pagination');
        const [perPage, setPerPage] = useState(10);
        const [page, setPage] = useState(1);
        const [data, setData] = useState<typeof rowsPagination>([]);

        const handleChange = (newPage: number, newPerPage: number) => {
            setPage(newPerPage === perPage ? newPage : 1);
            setPerPage(newPerPage);
        };

        useEffect(() => {
            setData(rowsPagination.slice((page - 1) * perPage, page * perPage));
        }, [page, perPage]);

        return (
            <Table
                {...toTableProps(args)}
                data={data}
                columns={columnsPagination}
                bottomContent={
                    <div style={{ padding: '10px', width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <Pagination
                            value={page}
                            onChange={handleChange}
                            hasQuickJump={false}
                            count={rowsPagination.length}
                            perPage={perPage}
                            perPageList={[10, 20, 30]}
                            slots={7}
                        />
                    </div>
                }
            />
        );
    },
};

const itemsPerLoad = 10;

const TableInfiniteLoading = {
    name: 'InfiniteLoading',
    args: [
        borderVariantArg,
        {
            name: 'stickyHeader',
            value: true,
        },
        {
            name: 'maxHeight',
            value: '400px',
        },
    ],
    render: function Story({ relatedComponents, ...args }: any) {
        const LineSkeleton = related(relatedComponents, 'LineSkeleton');
        const [data, setData] = useState(() => rowsPagination.slice(0, itemsPerLoad));
        const [loading, setLoading] = useState(false);

        const handleScroll = (e: UIEvent<HTMLElement>) => {
            const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

            if (data.length < rowsPagination.length && !loading && scrollTop + clientHeight >= scrollHeight - 20) {
                setLoading(true);

                setTimeout(() => {
                    setData([...data, ...rowsPagination.slice(data.length, data.length + itemsPerLoad)]);
                    setLoading(false);
                }, 1000);
            }
        };

        return (
            <Table
                {...toTableProps(args)}
                data={data}
                columns={columnsPagination}
                loadingSlot={
                    loading ? (
                        <div style={{ padding: '10px' }}>
                            <LineSkeleton />
                        </div>
                    ) : null
                }
                onScroll={handleScroll}
            />
        );
    },
};

/**
 * Таблица шире сцены превью: сцена центрирует содержимое, и без рамки левый край уходит за её границу.
 * Рамка на всю ширину сцены прокручивается по горизонтали.
 */
const withScrollFrame = (story: WebStory): WebStory => ({
    ...story,
    render: function Story(props: any) {
        const Render = story.render;

        return (
            <div style={{ width: '100%', overflowX: 'auto' }}>
                <Render {...props} />
            </div>
        );
    },
});

export const TableStories = [TableDefault, TableComplex, TablePagination, TableInfiniteLoading].map(withScrollFrame);
