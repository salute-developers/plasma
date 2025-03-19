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
    },
    args: {
        size: 'm',
        variant: 'border-all-bg',
    },
};

export default meta;

const data = [
    {
        id: 1,
        firstName: 'tanner',
        lastName: 'linsley',
        age: 40,
    },
    {
        id: 2,
        firstName: 'tandy',
        lastName: 'miller',
        age: 24,
    },
    {
        id: 3,
        firstName: 'joe',
        lastName: 'dirte',
        age: 45,
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
    const [filtered, setFiltered] = React.useState([]);
    const [sorted, setSorted] = useState([]);

    // console.log(filtered, sorted);

    const handleChange = ({ sorted, filtered }) => {
        setSorted(sorted);
        setFiltered(filtered);
    };

    return (
        <div style={{ display: 'flex', gap: '30px' }}>
            <div>
                <Table {...args} data={data} columns={columns} />
            </div>

            <div>
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
                    sorted={sorted}
                    filtered={filtered}
                />
            </div>
        </div>
    );
};

export const Default: StoryObj<StoryTreeProps> = {
    render: (args) => <StoryDefault {...args} />,
};
