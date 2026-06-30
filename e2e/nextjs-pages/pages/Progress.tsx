import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { Progress } from '@salutejs/sdds-serv/styled-components';
import { IconPlasma } from '@salutejs/plasma-icons';

export const getServerSideProps: GetServerSideProps = async () => ({ props: {} });

const ProgressPage: NextPage = () => (
    <main style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h1>Progress — SSR check</h1>
        <Progress value={60} />
        <Progress value={30} label="Загрузка" labelPlacement="top" valuePlacement="top" hasValue />
        <Progress
            value={80}
            label="С иконкой"
            labelPlacement="top"
            valuePlacement="top"
            labelIcon={<IconPlasma size="s" />}
            hasValue
        />
    </main>
);

export default ProgressPage;
