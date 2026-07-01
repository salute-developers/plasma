import React, { useState } from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { Select } from '@salutejs/sdds-serv/styled-components';
import { IconPlasma } from '@salutejs/plasma-icons';

export const getServerSideProps: GetServerSideProps = async () => ({ props: {} });

const items = [
    { value: 'paris', label: 'Париж' },
    { value: 'london', label: 'Лондон' },
    { value: 'berlin', label: 'Берлин' },
    { value: 'moscow', label: 'Москва' },
];

const SelectPage: NextPage = () => {
    const [single, setSingle] = useState('');
    const [multiple, setMultiple] = useState<string[]>([]);

    return (
        <main style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h1>Select — SSR check</h1>
            <div style={{ width: '300px' }}>
                <Select
                    items={items}
                    value={single}
                    onChange={setSingle}
                    label="Одиночный выбор"
                    contentLeft={<IconPlasma size="s" color="inherit" />}
                />
            </div>
            <div style={{ width: '300px' }}>
                <Select multiselect items={items} value={multiple} onChange={setMultiple} label="Множественный выбор" />
            </div>
        </main>
    );
};

export default SelectPage;
