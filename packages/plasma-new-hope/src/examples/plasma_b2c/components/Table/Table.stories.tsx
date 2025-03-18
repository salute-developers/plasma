import * as React from 'react';
import type { ComponentProps } from 'react';
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
        key: 1,
        firstName: 'tanner',
        lastName: 'linsley',
        age: 24,
    },
    {
        key: 2,
        firstName: 'tandy',
        lastName: 'miller',
        age: 40,
    },
    {
        key: 3,
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
            { value: 'joe', label: 'Joe' },
            { value: 'tandy', label: 'Tandy' },
        ],
    },
    {
        id: 'lastName',
        label: 'Last Name',
        enableColumnFilter: true,
    },
    {
        id: 'age',
        label: 'Age',
        enableSorting: true,
    },
];

const StoryDefault = (args: StoryTreeProps) => {
    const [filtered, setFiltered] = React.useState({});

    console.log('filtered', filtered);

    const handleChange = (filters) => {
        setFiltered(filters);
    };

    return (
        <>
            <button onClick={() => setFiltered({})}>clear filters</button>

            <Table
                data={data}
                columns={columns}
                {...args}
                rowSelection={{}}
                filtered={filtered}
                onChange={handleChange}
            />
        </>
    );
};

export const Default: StoryObj<StoryTreeProps> = {
    render: (args) => <StoryDefault {...args} />,
};
