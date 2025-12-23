import React, { useState, useRef, useEffect } from 'react';
import { IconEditOutline } from '@salutejs/plasma-icons';

import { rowsDefault, columnsDefault, DataRow, rowsPagination, columnsPagination } from './fixtures';
import { CreateStoriesProps } from './Table';

export const createDefaultComponent = (Table: any) => {
    return (args: any) => {
        return (
            <Table
                {...args}
                data={rowsDefault}
                columns={columnsDefault}
                topContent={args.hasTopContent ? 'Ячейка topContent' : null}
                bottomContent={args.hasBottomContent ? 'Ячейка bottomContent' : null}
            />
        );
    };
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
} = (rows) => {
    const [data, setData] = useState(rows);

    const [selected, setSelected] = useState<Record<string, boolean>>({});
    const [filtered, setFiltered] = useState([]);
    const [sorted, setSorted] = useState([]);

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
                population: 0,
                continent: '',
                currency: '',
                officialLanguage: '',
                area: 0,
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

export const createComplexComponent = (Table: any, components: CreateStoriesProps['additionalComponents']) => {
    const { Dropdown, IconButton, ButtonGroup, Button } = components;

    return (args: any) => {
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
};

export const createPaginationComponent = (Table: any, components: CreateStoriesProps['additionalComponents']) => {
    const { Pagination } = components;

    return (args: any) => {
        const [perPage, setPerPage] = useState(10);
        const [page, setPage] = useState(1);
        const [data, setData] = useState<any[]>([]);

        const handleChange = (newPage: number, newPerPage: number) => {
            setPage(newPerPage === perPage ? newPage : 1);
            setPerPage(newPerPage);
        };

        useEffect(() => {
            setData(rowsPagination.slice((page - 1) * perPage, page * perPage));
        }, [page, perPage]);

        return (
            <Table
                {...args}
                data={data}
                columns={columnsPagination}
                bottomContent={
                    <div style={{ padding: '10px', width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <Pagination
                            size="s"
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
    };
};

export const createInfiniteLoadingComponent = (Table: any, components: CreateStoriesProps['additionalComponents']) => {
    const { LineSkeleton } = components;

    return (args: any) => {
        const [data, setData] = useState([...rowsPagination.slice(0, 10)]);
        const [loading, setLoading] = useState(false);

        const itemsPerLoad = 10;

        const handleScroll = (e: React.UIEvent<HTMLElement>) => {
            const element = e.currentTarget;
            const { scrollTop } = element;
            const { clientHeight } = element;
            const { scrollHeight } = element;

            if (data.length < 100 && loading === false && scrollTop + clientHeight >= scrollHeight - 20) {
                setLoading(true);

                setTimeout(() => {
                    setData([...data, ...rowsPagination.slice(data.length, data.length + itemsPerLoad)]);
                    setLoading(false);
                }, 1000);
            }
        };

        return (
            <Table
                {...args}
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
    };
};
