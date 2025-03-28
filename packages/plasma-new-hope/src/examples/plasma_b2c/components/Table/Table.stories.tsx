import * as React from 'react';
import { ComponentProps, useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { WithTheme } from '../../../_helpers';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { Button } from '../Button/Button';

import { Table } from './Table';

type StoryTreeProps = ComponentProps<typeof Table>;

const size = ['s', 'm', 'l'];
const variant = ['no-border', 'border-rows', 'border-header', 'border-all', 'border-all-bg'];

const meta: Meta<StoryTreeProps> = {
    title: 'b2c/Data Display/Table',
    decorators: [WithTheme],
    component: Table,
    argTypes: {
        size: {
            control: 'select',
            options: size,
        },
        variant: {
            control: 'select',
            options: variant,
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
        size: 'm',
        variant: 'border-all-bg',
        stickyHeader: false,
    },
};

export default meta;

type DataRow = {
    id: number;
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
        id: 0,
        country: 'Канада',
        capital: 'Оттава',
        population: 38,
        continent: 'Северная Америка',
        currency: 'Канадский доллар',
        officialLanguage: 'Английский, Французский',
        area: 9984,
    },
    {
        id: 1,
        country: 'Бразилия',
        capital: 'Бразилиа',
        population: 213,
        continent: 'Южная Америка',
        currency: 'Бразильский реал',
        officialLanguage: 'Португальский',
        area: 8515,
    },
    {
        id: 2,
        country: 'Германия',
        capital: 'Берлин',
        population: 83,
        continent: 'Европа',
        currency: 'Евро',
        officialLanguage: 'Немецкий',
        area: 357,
    },
    {
        id: 3,
        country: 'Япония',
        capital: 'Токио',
        population: 126,
        continent: 'Азия',
        currency: 'Йена',
        officialLanguage: 'Японский',
        area: 377,
    },
    {
        id: 4,
        country: 'Австралия',
        capital: 'Канберра',
        population: 26,
        continent: 'Океания',
        currency: 'Австралийский доллар',
        officialLanguage: 'Английский',
        area: 7692,
    },
    {
        id: 5,
        country: 'Нигерия',
        capital: 'Абуджа',
        population: 206,
        continent: 'Африка',
        currency: 'Найра',
        officialLanguage: 'Английский',
        area: 923,
    },
    {
        id: 6,
        country: 'Индия',
        capital: 'Нью-Дели',
        population: 1400,
        continent: 'Азия',
        currency: 'Индийская рупия',
        officialLanguage: 'Хинди, Английский',
        area: 3287,
    },
    {
        id: 7,
        country: 'Франция',
        capital: 'Париж',
        population: 67,
        continent: 'Европа',
        currency: 'Евро',
        officialLanguage: 'Французский',
        area: 643,
    },
    {
        id: 8,
        country: 'Россия',
        capital: 'Москва',
        population: 143,
        continent: 'Европа/Азия',
        currency: 'Российский рубль',
        officialLanguage: 'Русский',
        area: 17098,
    },
    {
        id: 9,
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

const columnsAllInOne = [
    {
        id: 'country',
        label: 'Страна',
        enableResizing: true,
    },
    {
        id: 'capital',
        label: 'Столица',
        enableResizing: true,
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
    },
    {
        id: 'continent',
        label: 'Континент',
        enableResizing: true,
    },
    {
        id: 'currency',
        label: 'Валюта',
        enableResizing: true,
    },
    {
        id: 'officialLanguage',
        label: 'Язык',
        enableResizing: true,
        filters: [
            { value: 'eng', label: 'Английский' },
            { value: 'rus', label: 'Русский' },
        ],
    },
    {
        id: 'area',
        label: 'Площадь, тыс. км²',
        enableSorting: true,
        enableResizing: true,
    },
];

const StoryBasic = (args: StoryTreeProps) => {
    return <Table {...args} data={rows} columns={columnsBasic} />;
};

export const Basic: StoryObj<StoryTreeProps> = {
    render: (args) => <StoryBasic {...args} />,
    parameters: {
        controls: {
            exclude: ['stickyHeader', 'maxHeight', 'enableSelection'],
        },
    },
};

const filterHelper: (filtered: { id: string; value: string[] }[]) => DataRow[] = (filtered) => {
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
                            case 'eng': {
                                if (officialLanguage.toLowerCase().includes('английский')) return true;
                                break;
                            }

                            case 'rus': {
                                if (officialLanguage.toLowerCase().includes('русский')) return true;
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

const sortedHelper: (data: DataRow[], sorted: { id: string; desc: boolean }[]) => DataRow[] = (data, sorted) => {
    const newData = [...data];

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

const StoryAllInOne = (args: StoryTreeProps) => {
    const [data, setData] = useState(rows);

    const [selected, setSelected] = React.useState<Record<string, boolean>>({});
    const [filtered, setFiltered] = React.useState([]);
    const [sorted, setSorted] = useState([]);

    const handleChange = ({ selected, sorted, filtered }) => {
        setSelected(selected);
        setSorted(sorted);
        setFiltered(filtered);

        const filteredData = filterHelper(filtered);
        const sortedData = sortedHelper(filteredData, sorted);

        setData(sortedData);
    };

    const handleCellUpdate = (rowId, columnId, value) => {
        const newData = data.map((item) => {
            if (item.id === rowId) {
                return {
                    ...item,
                    [columnId]: value,
                };
            }
            return item;
        });

        setData(newData);
    };

    return (
        <div>
            <ButtonGroup size="xs" view="positive">
                <Button text="Очистить выбранные" view="default" size="xs" onClick={() => setSelected({})} />
                <Button
                    text="Убрать сортировку"
                    view="negative"
                    onClick={() => {
                        handleChange({
                            selected,
                            sorted: [],
                            filtered,
                        });
                    }}
                />
                <Button
                    text="Очистить фильтры"
                    view="positive"
                    onClick={() => {
                        handleChange({
                            selected,
                            sorted,
                            filtered: [],
                        });
                    }}
                />
            </ButtonGroup>

            <br />
            <br />

            <Table
                {...args}
                data={data}
                columns={columnsAllInOne}
                onChange={handleChange}
                selected={selected}
                sorted={sorted}
                filtered={filtered}
                onCellUpdate={handleCellUpdate}
            />
        </div>
    );
};

export const AllInOne: StoryObj<StoryTreeProps> = {
    render: (args) => <StoryAllInOne {...args} />,
    args: {
        maxHeight: '400px',
        stickyHeader: true,
        enableSelection: true,
    },
};
