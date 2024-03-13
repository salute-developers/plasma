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
            options: ['clear', 'primary', 'secondary'],
            control: {
                type: 'select',
            },
        },
        viewCurrentPage: {
            options: ['clear', 'primary', 'secondary'],
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
        pages: 20,
        value: 1,
        slots: 9,
        type: 'default',
        view: 'clear',
        viewCurrentPage: 'secondary',
        size: 'xs',
        isQuickJump: true,
        isPerPage: true,
        pilled: false,
        stretching: true,
    },
};

const PaginationContent = (agrs) => {
    const [pageValue, setPageValue] = useState(agrs.value);
    const [perPageValue, setPerPageValue] = useState(agrs.perPage);

    const handleChange = useCallback(
        (page: number, perPage: number) => {
            setPerPageValue(perPage);
            setPageValue(page);
        },
        [pageValue, perPageValue, setPageValue, setPerPageValue],
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
                onChangeValue={handleChange}
            />
        </>
    );
};

export const Content: Story = {
    args: {
        pages: 20,
        value: 1,
        slots: 9,
        type: 'default',
        view: 'clear',
        viewCurrentPage: 'secondary',
        size: 'xs',
        isQuickJump: true,
        isPerPage: true,
        pilled: false,
        stretching: true,
    },
    render: (args) => <PaginationContent {...args} />,
};
