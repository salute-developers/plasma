import { disableProps } from '@salutejs/plasma-sb-utils';
import type { StoryObj, Meta } from '@storybook/react';
import React, { useState, useCallback } from 'react';

import { WithTheme } from '../../../_helpers';
import { Button } from '../Button/Button';

import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
    title: 'plasma_b2c/Pagination',
    component: Pagination,
    decorators: [WithTheme],
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

export const Default: Story = {
    args: {
        count: 2000,
        value: 1,
        slots: 9,
        type: 'default',
        view: 'clear',
        viewCurrentPage: 'secondary',
        size: 'xs',
        hasQuickJump: true,
        hasPerPage: true,
        pilled: false,
        square: true,
    },
};

const PaginationContent = (agrs) => {
    const [pageValue, setPageValue] = useState(agrs.value);
    const [perPageValue, setPerPageValue] = useState(agrs.perPage);

    const handleChangePage = useCallback(
        (page: number) => {
            setPageValue(page);
        },
        [pageValue, setPageValue],
    );

    const handleChangePerpage = useCallback(
        (perPage: number) => {
            setPerPageValue(perPage);
        },
        [perPageValue, setPerPageValue],
    );

    return (
        <>
            <Pagination
                {...agrs}
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
