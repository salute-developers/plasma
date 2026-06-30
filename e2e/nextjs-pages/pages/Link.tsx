import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { Link } from '@salutejs/sdds-serv/styled-components';

export const getServerSideProps: GetServerSideProps = async () => ({ props: {} });

const LinkPage: NextPage = () => (
    <main style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h1>Link — SSR check</h1>
        <p>
            Скачайте{' '}
            <Link href="https://plasma.sberdevices.ru" target="_blank">
                документацию
            </Link>
            .
        </p>
        <p>
            <Link href="/">Вторичная ссылка</Link>
        </p>
    </main>
);

export default LinkPage;
