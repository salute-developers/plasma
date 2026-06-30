import React, { useState } from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { Combobox } from '@salutejs/sdds-serv/styled-components';
import { IconDone } from '@salutejs/plasma-icons';

export const getServerSideProps: GetServerSideProps = async () => ({ props: {} });

const items = [
    { value: 'paris', label: 'Париж' },
    { value: 'london', label: 'Лондон' },
    { value: 'berlin', label: 'Берлин' },
    { value: 'moscow', label: 'Москва' },
];

const ComboboxPage: NextPage = () => {
    const [single, setSingle] = useState('');
    const [multiple, setMultiple] = useState<string[]>([]);

    return (
        <main style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h1>Combobox — SSR check</h1>
            <div style={{ width: '400px' }}>
                <Combobox
                    items={items}
                    value={single}
                    onChange={setSingle}
                    label="Одиночный"
                    contentLeft={<IconDone size="s" />}
                />
            </div>
            <div style={{ width: '400px' }}>
                <Combobox multiple items={items} value={multiple} onChange={setMultiple} label="Множественный" />
            </div>
        </main>
    );
};

export default ComboboxPage;
