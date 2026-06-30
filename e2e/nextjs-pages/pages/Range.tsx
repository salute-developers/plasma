import React, { ChangeEvent, useState } from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { Range } from '@salutejs/sdds-serv/styled-components';
import { IconPlasma, IconArrowRight } from '@salutejs/plasma-icons';

export const getServerSideProps: GetServerSideProps = async () => ({ props: {} });

const RangePage: NextPage = () => {
    const [firstValue, setFirstValue] = useState('');
    const [secondValue, setSecondValue] = useState('');

    return (
        <main style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h1>Range — SSR check</h1>
            <Range
                firstValue={firstValue}
                secondValue={secondValue}
                firstTextfieldTextBefore="С"
                secondTextfieldTextBefore="ПО"
                dividerVariant="none"
                onChangeFirstValue={(e: ChangeEvent<HTMLInputElement>) => setFirstValue(e.target.value)}
                onChangeSecondValue={(e: ChangeEvent<HTMLInputElement>) => setSecondValue(e.target.value)}
                onSearchFirstValue={() => {}}
                onSearchSecondValue={() => {}}
            />
            <Range
                firstValue={firstValue}
                secondValue={secondValue}
                dividerVariant="icon"
                dividerIcon={<IconArrowRight color="inherit" size="s" />}
                firstTextfieldContentLeft={<IconPlasma color="inherit" size="s" />}
                secondTextfieldContentLeft={<IconPlasma color="inherit" size="s" />}
                onChangeFirstValue={(e: ChangeEvent<HTMLInputElement>) => setFirstValue(e.target.value)}
                onChangeSecondValue={(e: ChangeEvent<HTMLInputElement>) => setSecondValue(e.target.value)}
                onSearchFirstValue={() => {}}
                onSearchSecondValue={() => {}}
            />
        </main>
    );
};

export default RangePage;
