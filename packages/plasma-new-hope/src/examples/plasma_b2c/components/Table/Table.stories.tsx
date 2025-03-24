import * as React from 'react';
import { ComponentProps, useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { WithTheme } from '../../../_helpers';

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
    },
    args: {
        size: 'm',
        variant: 'border-all-bg',
        stickyHeader: false,
    },
};

export default meta;

const mockData = [
    {
        id: 1,
        firstName: 'hank',
        lastName: 'shrader',
        age: 40,
    },
    {
        id: 2,
        firstName: 'saul',
        lastName: 'goodman',
        age: 24,
    },
    {
        id: 3,
        firstName: 'mike',
        lastName: 'ehrmantraut',
        age: 45,
    },
    {
        id: 4,
        firstName: 'gustavo',
        lastName: 'fring',
        age: 39,
    },
    {
        id: 5,
        firstName: 'walter',
        lastName: 'white',
        age: 150,
    },
    {
        id: 6,
        firstName: 'lalo',
        lastName: 'salamanca',
        age: 20,
    },
];

const columns = [
    {
        id: 'firstName',
        label: 'First Name',
        filters: [
            { value: 'an', label: 'an' },
            { value: 'oe', label: 'oe' },
        ],
        filterFn: (filterValue, cellValue) => cellValue.includes(filterValue),
        enableResizing: true,
        enableEditing: true,
    },
    {
        id: 'lastName',
        label: 'Last Name',
        // enableColumnFilter: true,
    },
    {
        id: 'age',
        label: 'Age',
        enableSorting: true,
    },
];

const StoryDefault = (args: StoryTreeProps) => {
    const [data, setData] = useState(mockData);

    const [selected, setSelected] = React.useState<Record<string, boolean>>({});
    const [filtered, setFiltered] = React.useState([]);
    const [sorted, setSorted] = useState([]);

    const handleChange = ({ selected, sorted, filtered }) => {
        console.log('handleChange', selected, sorted, filtered);

        setSelected(selected);
        setSorted(sorted);
        setFiltered(filtered);
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
        <div style={{ display: 'flex', gap: '30px' }}>
            <div>
                <Table {...args} data={mockData} columns={columns} maxHeight="300px" />
            </div>

            <div>
                <button type="button" onClick={() => setSelected({})}>
                    clear selection
                </button>

                <button type="button" onClick={() => setSorted([])}>
                    clear sorting
                </button>

                <button type="button" onClick={() => setFiltered([])}>
                    clear filters
                </button>

                <Table
                    {...args}
                    data={data}
                    columns={columns}
                    onChange={handleChange}
                    selected={selected}
                    sorted={sorted}
                    filtered={filtered}
                    onCellUpdate={handleCellUpdate}
                />
            </div>
        </div>
    );
};

export const Default: StoryObj<StoryTreeProps> = {
    render: (args) => <StoryDefault {...args} />,
};
