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
            options: ['s'],
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
            options: ['default'],
            control: {
                type: 'select',
            },
        },
        slots: {
            control: {
                type: 'range',
                min: 1,
                max: 15,
            },
        },
        viewCurrentPage: {
            options: ['default'],
            control: {
                type: 'select',
            },
        },
        ...disableProps(['contentLeft', 'contentRight', 'size', 'view', 'viewCurrentPage']),
    },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
    args: {
        count: 2000,
        slots: 9,
        type: 'default',
        view: 'default',
        viewCurrentPage: 'default',
        size: 's',
        hasQuickJump: true,
        disabledPages: ['2'],
        hasPerPage: true,
        pilled: false,
        square: true,
    },
    render: (args) => <Pagination {...args} />,
};

const PaginationContent = (args) => {
    const [pageValue, setPageValue] = useState(1);
    const [perPageValue, setPerPageValue] = useState(20);

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
        slots: 9,
        type: 'default',
        view: 'default',
        viewCurrentPage: 'default',
        size: 's',
        hasQuickJump: true,
        hasPerPage: true,
        pilled: false,
        square: true,
    },
    render: (args) => <PaginationContent {...args} />,
};
