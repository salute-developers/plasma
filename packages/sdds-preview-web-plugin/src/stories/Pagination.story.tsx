import { component, mergeConfig, paginationConfig } from '@salutejs/plasma-new-hope/styled-components';
import { useState } from 'react';

const Pagination = component(mergeConfig(paginationConfig as any, {}));

const PaginationDefault = {
    name: 'Default',
    args: [
        {
            name: 'count',
            value: 2000,
        },
        {
            name: 'slots',
            value: 9,
        },
        {
            name: 'perPage',
            value: 20,
        },
        {
            name: 'hasQuickJump',
            value: true,
        },
        {
            name: 'hasPerPage',
            value: true,
        },
        {
            name: 'isPilled',
            value: false,
        },
        {
            name: 'isSquare',
            value: true,
        },
        {
            name: 'listWidth',
            value: '5rem',
        },
        {
            name: 'helperText',
            value: 'Подсказка',
        },
        {
            name: 'textQuickJump',
            value: 'Перейти к странице',
        },
        {
            name: 'placeholderQuickJump',
            value: '№',
        },
        {
            name: 'singleLine',
            value: false,
        },
    ],
    render: function Story(args: any) {
        const { count, slots, perPage, isPilled, isSquare, ...rest } = args;
        const [page, setPage] = useState(1);
        const [perPageValue, setPerPageValue] = useState(Number(perPage) || 20);

        return (
            <div
                style={{
                    width: '100%',
                    minWidth: 0,
                    height: '100%',
                    overflowX: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div style={{ width: 'max-content', minWidth: '100%', flex: 'none' }}>
                    <Pagination
                        {...rest}
                        count={Number(count) || 0}
                        slots={Number(slots) || 5}
                        pilled={isPilled}
                        square={isSquare}
                        value={page}
                        perPage={perPageValue}
                        onChange={(nextPage: number, nextPerPage: number) => {
                            setPage(nextPage);
                            setPerPageValue(nextPerPage);
                        }}
                    />
                </div>
            </div>
        );
    },
};

export const PaginationStories = [PaginationDefault];
