import { disableProps } from '@salutejs/plasma-sb-utils';
import type { StoryObj, Meta } from '@storybook/react';
import React, { useState, useCallback } from 'react';
import { action } from '@storybook/addon-actions';

import { WithTheme } from '../../_helpers';
import { Button } from '../Button/Button';

import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
    title: 'Navigation/Pagination',
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

const PaginationDefault = (args) => {
    const [pageValue, setPageValue] = useState(1);
    const [perPageValue, setPerPageValue] = useState(20);

    const handleChangePage = (page: number) => {
        setPageValue(page);
        action('onChangePageValue')(page);
    };

    const handleChangePerPage = (perPage: number) => {
        setPerPageValue(perPage);
        action('onChangePerPageValue')(perPage);
    };

    return (
        <>
            <Pagination
                {...args}
                value={pageValue}
                perPage={perPageValue}
                onChangePageValue={handleChangePage}
                onChangePerPageValue={handleChangePerPage}
            />
        </>
    );
};

export const Default: Story = {
    args: {
        count: 2000,
        slots: 9,
        type: 'default',
        view: 'clear',
        viewCurrentPage: 'secondary',
        size: 'xs',
        hasQuickJump: true,
        hasPerPage: true,
        pilled: false,
        square: true,
        listWidth: '5rem',
        helperText: 'HelperText',
        singleLine: false,
    },
    render: (args) => <PaginationDefault {...args} />,
};

const PaginationContent = (args) => {
    const [pageValue, setPageValue] = useState(args.value);
    const [perPageValue, setPerPageValue] = useState(args.perPage);

    const handleChangePage = useCallback(
        (page: number, perPage) => {
            setPageValue(page);
            setPerPageValue(perPage);
            action('onChangePageValue')(page, perPage);
        },
        [pageValue, perPageValue, setPageValue, setPerPageValue],
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
                onChange={handleChangePage}
            />
        </>
    );
};

export const Content: Story = {
    args: {
        count: 2000,
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
