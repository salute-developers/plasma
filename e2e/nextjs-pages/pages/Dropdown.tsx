import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { Dropdown, Button } from '@salutejs/sdds-serv/styled-components';

export const getServerSideProps: GetServerSideProps = async () => ({ props: {} });

const items = [
    { value: 'paris', label: 'Париж' },
    { value: 'london', label: 'Лондон' },
    { value: 'berlin', label: 'Берлин' },
    { value: 'moscow', label: 'Москва' },
];

const DropdownPage: NextPage = () => (
    <main style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h1>Dropdown — SSR check</h1>
        <Dropdown items={items} onToggle={() => {}} onHover={() => {}} onItemSelect={() => {}}>
            <Button text="Список стран" />
        </Dropdown>
    </main>
);

export default DropdownPage;
