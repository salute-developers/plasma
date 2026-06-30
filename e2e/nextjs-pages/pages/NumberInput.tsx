import React, { useState } from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { NumberInput } from '@salutejs/sdds-serv/styled-components';

export const getServerSideProps: GetServerSideProps = async () => ({ props: {} });

const NumberInputPage: NextPage = () => {
    const [value, setValue] = useState<number | string | undefined>(5);

    return (
        <main style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h1>NumberInput — SSR check</h1>
            <NumberInput
                value={value}
                onChange={(_: any, newValue: number | string | undefined) => setValue(newValue)}
                onDecrement={() => {}}
                onIncrement={() => {}}
            />
        </main>
    );
};

export default NumberInputPage;
