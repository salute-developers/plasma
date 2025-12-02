import React, { useRef, ComponentProps, useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { InSpacingDecorator, getConfigVariations } from '@salutejs/plasma-sb-utils';
import { IconEditOutline } from '@salutejs/plasma-icons';

import { ButtonGroup } from '../ButtonGroup';
import { Button } from '../Button';
import { IconButton } from '../IconButton';
import { Dropdown } from '../Dropdown';

import { config } from './Table.config';
import { Table } from './Table';

type StoryTableProps = ComponentProps<typeof Table>;

const { views, sizes } = getConfigVariations(config);
const borderVariant = ['rows', 'header', 'all'];

const meta: Meta<StoryTableProps> = {
    title: 'Data Display/Table',
    decorators: [InSpacingDecorator],
    component: Table,
    argTypes: {
        view: {
            control: 'select',
            options: views,
        },
        size: {
            control: 'select',
            options: sizes,
        },
        borderVariant: {
            control: 'select',
            options: borderVariant,
        },
        stickyHeader: {
            control: 'boolean',
        },
        maxHeight: {
            control: 'text',
        },
        enableSelection: {
            control: 'boolean',
        },
    },
    args: {
        view: 'default',
        size: 'm',
        borderVariant: 'all',
        stickyHeader: false,
    },
    parameters: {
        controls: {
            include: ['view', 'size', 'borderVariant', 'stickyHeader', 'maxHeight', 'enableSelection'],
        },
    },
};

export default meta;

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

const rows: DataRow[] = [
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

const columnsBasic = [
    {
        id: 'country',
        label: 'Страна',
    },
    {
        id: 'capital',
        label: 'Столица',
    },
    {
        id: 'population',
        label: 'Население, млн',
    },
    {
        id: 'continent',
        label: 'Континент',
    },
    {
        id: 'currency',
        label: 'Валюта',
    },
    {
        id: 'officialLanguage',
        label: 'Язык',
    },
    {
        id: 'area',
        label: 'Площадь, тыс. км²',
    },
];

const StoryBasic = (args: StoryTableProps) => {
    return <Table {...args} data={rows} columns={columnsBasic} />;
};

export const Basic: StoryObj<StoryTableProps> = {
    render: (args) => <StoryBasic {...args} />,
    parameters: {
        controls: {
            exclude: ['stickyHeader', 'maxHeight', 'enableSelection'],
        },
    },
};

const filterHelper: (rows: DataRow[], filtered: { id: string; value: string[] }[]) => DataRow[] = (rows, filtered) => {
    let newData = [...rows];

    filtered.forEach(({ id, value }) => {
        if (value.length === 0) return;

        switch (id) {
            case 'population': {
                newData = newData.filter(({ population }) => {
                    for (const val of value) {
                        switch (val) {
                            case 'small': {
                                if (population < 50) return true;
                                break;
                            }

                            case 'big': {
                                if (population > 100) return true;
                                break;
                            }

                            default: {
                                return false;
                            }
                        }
                    }

                    return false;
                });

                break;
            }

            case 'officialLanguage': {
                newData = newData.filter(({ officialLanguage }) => {
                    for (const val of value) {
                        switch (val) {
                            case 'en': {
                                if (officialLanguage.toLowerCase().includes('английский')) return true;
                                break;
                            }

                            case 'ru': {
                                if (officialLanguage.toLowerCase().includes('русский')) return true;
                                break;
                            }

                            case 'it': {
                                if (officialLanguage.toLowerCase().includes('итальянский')) return true;
                                break;
                            }

                            default: {
                                return false;
                            }
                        }
                    }

                    return false;
                });

                break;
            }

            default: {
                break;
            }
        }
    });

    return newData;
};

const sortedHelper: (rows: DataRow[], sorted: { id: string; desc: boolean }[]) => DataRow[] = (rows, sorted) => {
    const newData = [...rows];

    if (sorted.length === 0) return newData;

    const sortColumn = sorted[0].id;
    const descOrder = sorted[0].desc;

    newData.sort((a, b) => {
        if (descOrder) {
            return b[sortColumn] - a[sortColumn];
        }

        return a[sortColumn] - b[sortColumn];
    });

    return newData;
};

const useBackendImitation: (
    rows: DataRow[],
) => {
    data: DataRow[];
    selected: Record<string, boolean>;
    filtered: any[];
    sorted: any[];
    onChange: ({ selected, sorted, filtered }) => void;
    deleteItem: (rowId: string) => void;
    updateRow: (rowId, columnId, value) => void;
    clearSelected: () => void;
    clearFiltered: () => void;
    clearSorted: () => void;
    clearAll: () => void;
    addRow: () => void;
    selectRow: (rowId: string) => void;
} = () => {
    const [data, setData] = useState(rows);

    const [selected, setSelected] = useState<Record<string, boolean>>({});
    const [filtered, setFiltered] = useState([]);
    const [sorted, setSorted] = useState([]);

    console.log(selected);

    const onChange = ({ selected, sorted, filtered }) => {
        setSelected(selected);
        setFiltered(filtered);
        setSorted(sorted);
    };

    const deleteItem = (rowId: string) => {
        setData(data.filter(({ id }) => id !== rowId));
    };

    const updateRow = (rowId, columnId, value) => {
        setData(
            data.map((item) => {
                if (item.id === rowId) {
                    return {
                        ...item,
                        [columnId]: value,
                    };
                }
                return item;
            }),
        );
    };

    const clearSelected = () => setSelected({});
    const clearFiltered = () => setFiltered([]);
    const clearSorted = () => setSorted([]);
    const clearAll = () => {
        clearSelected();
        clearFiltered();
        clearSorted();
    };

    const addRow = () => {
        setData([
            ...data,
            {
                id: (Math.floor(Math.random() * (10000 - 100 + 1)) + 100).toString(),
                country: '',
                capital: '',
                population: null,
                continent: '',
                currency: '',
                officialLanguage: '',
                area: null,
            },
        ]);
    };

    const selectRow = (rowId: string) => {
        setSelected({ ...selected, [rowId]: true });
    };

    return {
        data: sortedHelper(filterHelper(data, filtered), sorted),
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
    };
};

const StoryComplex = (args: StoryTableProps) => {
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
    } = useBackendImitation(rows);

    const ref = useRef(null);

    const columns = [
        {
            id: 'country',
            label: 'Страна',
            enableResizing: true,
            enableEditing: true,
        },
        {
            id: 'capital',
            label: 'Столица',
            enableResizing: true,
            enableEditing: true,
        },
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
        {
            id: 'continent',
            label: 'Континент',
            enableResizing: true,
            enableEditing: true,
        },
        {
            id: 'currency',
            label: 'Валюта',
            enableResizing: true,
            enableEditing: true,
        },
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
        {
            id: 'area',
            label: 'Площадь, тыс. км²',
            enableSorting: true,
            enableResizing: true,
            enableEditing: true,
        },
        {
            id: 'control',
            label: '',
            width: 0,
            renderCell: (_, row) => (
                <Dropdown
                    portal={ref}
                    items={[
                        { value: 'choose', label: 'Выбрать' },
                        { value: 'delete', label: 'Удалить' },
                    ]}
                    onItemSelect={({ value }) => {
                        switch (value) {
                            case 'choose': {
                                selectRow(row.id);
                                break;
                            }

                            case 'delete': {
                                deleteItem(row.id);
                                break;
                            }

                            default: {
                                break;
                            }
                        }
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
            <ButtonGroup size="s" isCommonButtonStyles={false}>
                <Button text="Очистить выбранные" view="secondary" onClick={clearSelected} />
                <Button text="Убрать сортировку" view="secondary" onClick={clearSorted} />
                <Button text="Очистить фильтры" view="secondary" onClick={clearFiltered} />
                <Button text="Очистить все" view="accent" onClick={clearAll} />
                <Button text="Добавить строку" view="accent" onClick={addRow} />
            </ButtonGroup>

            <br />
            <br />

            <Table
                {...args}
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
};

export const Complex: StoryObj<StoryTableProps> = {
    render: (args) => <StoryComplex {...args} />,
    args: {
        maxHeight: '400px',
        stickyHeader: true,
        enableSelection: true,
    },
};
