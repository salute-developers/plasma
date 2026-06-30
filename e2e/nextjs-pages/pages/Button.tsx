import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { Button, Counter } from '@salutejs/sdds-serv/styled-components';
import { IconMic } from '@salutejs/plasma-icons';

export const getServerSideProps: GetServerSideProps = async () => ({ props: {} });

const ButtonPage: NextPage = () => (
    <main style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h1>Button — SSR check</h1>
        <Button text="Кнопка" onClick={() => {}} />
        <Button text="С иконкой слева" contentLeft={<IconMic size="s" color="inherit" />} onClick={() => {}} />
        <Button
            text="С счётчиком"
            additionalContent={<Counter view="accent" size="xs" count={5} />}
            onClick={() => {}}
        />
    </main>
);

export default ButtonPage;
