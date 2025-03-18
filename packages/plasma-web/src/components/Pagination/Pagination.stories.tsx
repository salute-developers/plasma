import React, { useState, useCallback } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { disableProps, InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import { action } from '@storybook/addon-actions';

import { Button } from '../Button';

import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
    title: 'Navigation/Pagination',
    decorators: [InSpacingDecorator],
    argTypes: {
        size: {
            options: ['xs', 's', 'm', 'l'],
            control: {
                type: 'select',
            },
        },
        type: {
            options: ['default', 'compact'],
            control: {
                type: 'select',
            },
        },
        view: {
            options: ['clear', 'default', 'secondary'],
            control: {
                type: 'select',
            },
        },
        slots: {
            control: {
                type: 'range',
                min: 7,
                max: 15,
            },
        },
        viewCurrentPage: {
            options: ['clear', 'default', 'secondary'],
            control: {
                type: 'select',
            },
        },
        ...disableProps(['contentLeft', 'contentRight']),
    },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

const PaginationDefault = (args) => {
    const [pageValue, setPageValue] = useState(args.value);
    const [perPageValue, setPerPageValue] = useState(args.perPage);

    const handleChangePage = useCallback(
        (page: number) => {
            setPageValue(page);
            action('onChangePageValue')(page);
        },
        [pageValue, setPageValue],
    );

    const handleChangePerpage = useCallback(
        (perPage: number) => {
            setPerPageValue(perPage);
            action('onChangePerPageValue')(perPage);
        },
        [perPageValue, setPerPageValue],
    );

    return (
        <>
            <Pagination
                {...args}
                value={pageValue}
                perPage={perPageValue}
                onChangePageValue={handleChangePage}
                onChangePerPageValue={handleChangePerpage}
            />
        </>
    );
};

export const Default: Story = {
    args: {
        count: 2000,
        value: 1,
        slots: 9,
        perPage: 20,
        type: 'default',
        view: 'clear',
        viewCurrentPage: 'secondary',
        size: 'xs',
        hasQuickJump: true,
        hasPerPage: true,
        pilled: false,
        square: true,
        listWidth: '5rem',
    },
    render: (args) => <PaginationDefault {...args} />,
};

const PaginationContent = (args) => {
    const [pageValue, setPageValue] = useState(args.value);
    const [perPageValue, setPerPageValue] = useState(args.perPage);

    const handleChangePage = useCallback(
        (page: number) => {
            setPageValue(page);
            action('onChangePageValue')(page);
        },
        [pageValue, setPageValue],
    );

    const handleChangePerpage = useCallback(
        (perPage: number) => {
            setPerPageValue(perPage);
            action('onChangePerPageValue')(perPage);
        },
        [perPageValue, setPerPageValue],
    );

    return (
        <>
            <Pagination
                {...args}
                value={pageValue}
                perPage={perPageValue}
                leftContent={
                    <Button
                        onClick={() => {
                            setPageValue(pageValue - 1);
                        }}
                    >
                        Prev
                    </Button>
                }
                rightContent={
                    <Button
                        onClick={() => {
                            setPageValue(pageValue + 1);
                        }}
                    >
                        Next
                    </Button>
                }
                onChangePageValue={handleChangePage}
                onChangePerPageValue={handleChangePerpage}
            />
        </>
    );
};

export const Content: Story = {
    args: {
        count: 2000,
        value: 1,
        slots: 9,
        perPage: 20,
        type: 'default',
        view: 'clear',
        viewCurrentPage: 'secondary',
        size: 'xs',
        hasQuickJump: true,
        hasPerPage: true,
        pilled: false,
        square: true,
    },
    render: (args) => <PaginationContent {...args} />,
};
