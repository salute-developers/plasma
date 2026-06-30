import React, { useState } from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { Pagination, IconButton } from '@salutejs/sdds-serv/styled-components';
import {
    IconDoubleDisclosureLeft,
    IconDisclosureLeftOutline,
    IconDisclosureRightOutline,
    IconDoubleDisclosureRight,
} from '@salutejs/plasma-icons';

export const getServerSideProps: GetServerSideProps = async () => ({ props: {} });

const PaginationPage: NextPage = () => {
    const count = 100;
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const lastPage = Math.ceil(count / perPage);

    const handleChange = (newPage?: number, newPerPage?: number) => {
        if (newPage !== undefined) setPage(newPage);
        if (newPerPage !== undefined) setPerPage(newPerPage);
    };

    return (
        <main style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h1>Pagination — SSR check</h1>
            <Pagination
                size="m"
                count={count}
                value={page}
                perPage={perPage}
                onChange={handleChange}
                leftContent={
                    <>
                        <IconButton view="clear" size="m" onClick={() => setPage(1)}>
                            <IconDoubleDisclosureLeft color="inherit" size="s" />
                        </IconButton>
                        <IconButton view="clear" size="m" onClick={() => setPage((p) => Math.max(1, p - 1))}>
                            <IconDisclosureLeftOutline color="inherit" size="s" />
                        </IconButton>
                    </>
                }
                rightContent={
                    <>
                        <IconButton view="clear" size="m" onClick={() => setPage((p) => Math.min(lastPage, p + 1))}>
                            <IconDisclosureRightOutline color="inherit" size="s" />
                        </IconButton>
                        <IconButton view="clear" size="m" onClick={() => setPage(lastPage)}>
                            <IconDoubleDisclosureRight color="inherit" size="s" />
                        </IconButton>
                    </>
                }
            />
        </main>
    );
};

export default PaginationPage;
