import React, { useState } from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { Steps } from '@salutejs/sdds-serv/styled-components';
import type { StepItemProps } from '@salutejs/sdds-serv/styled-components';

export const getServerSideProps: GetServerSideProps = async () => ({ props: {} });

const initialItems: StepItemProps[] = [
    { title: 'Шаг 1', content: 'Описание шага 1', indicator: 1, status: 'active' },
    { title: 'Шаг 2', content: 'Описание шага 2', indicator: 2, status: 'inactive' },
    { title: 'Шаг 3', content: 'Описание шага 3', indicator: 3, status: 'inactive' },
    { title: 'Шаг 4', content: 'Описание шага 4', indicator: 4, status: 'inactive' },
];

const StepsPage: NextPage = () => {
    const [items, setItems] = useState<StepItemProps[]>(initialItems);

    const getStatus = (i: number, index: number): StepItemProps['status'] => {
        if (i === index) return 'active';
        if (i < index) return 'completed';
        return 'inactive';
    };

    const handleChange = (_item: StepItemProps, index: number) => {
        setItems((cur) => cur.map((item, i) => ({ ...item, status: getStatus(i, index) })));
    };

    return (
        <main style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h1>Steps — SSR check</h1>
            <div style={{ maxWidth: '600px' }}>
                <Steps size="m" items={items} onChange={handleChange} hasContent="all" />
            </div>
            <div style={{ maxWidth: '600px' }}>
                <Steps size="m" items={initialItems} onChange={() => {}} hasContent="active" />
            </div>
        </main>
    );
};

export default StepsPage;
