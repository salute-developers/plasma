import React from 'react';

import { IconDisclosureLeft, IconDisclosureRight } from '../../../components/_Icon';
import { IconButton } from '../../components/IconButton/IconButton';
import { Pagination } from '../../components/Pagination/Pagination';

import { pageSize } from './constants';

export function TablePagination({
    label,
    page,
    count,
    onChange,
}: {
    label: string;
    page: number;
    count: number;
    onChange: (page: number) => void;
}) {
    const pages = Math.ceil(count / pageSize);

    return (
        <div className="pager">
            <Pagination
                role="navigation"
                aria-label={label}
                size="xs"
                type="compact"
                count={count}
                value={page + 1}
                perPage={pageSize}
                slots={7}
                hasPerPage={false}
                hasQuickJump={count > 0}
                textQuickJump="На страницу"
                placeholderQuickJump="№"
                leftContent={
                    <IconButton
                        size="xs"
                        view="clear"
                        aria-label="Предыдущая страница"
                        disabled={page <= 0}
                        onClick={() => onChange(page - 1)}
                    >
                        <IconDisclosureLeft size="xs" color="inherit" />
                    </IconButton>
                }
                rightContent={
                    <IconButton
                        size="xs"
                        view="clear"
                        aria-label="Следующая страница"
                        disabled={page >= pages - 1}
                        onClick={() => onChange(page + 1)}
                    >
                        <IconDisclosureRight size="xs" color="inherit" />
                    </IconButton>
                }
                helperText={`${count ? page * pageSize + 1 : 0}–${Math.min((page + 1) * pageSize, count)} из ${count}`}
                onChange={(value) => {
                    if (value !== undefined && count > 0) onChange(value - 1);
                }}
            />
        </div>
    );
}
