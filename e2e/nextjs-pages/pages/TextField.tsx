import React, { ChangeEvent, useState } from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { TextField } from '@salutejs/sdds-serv/styled-components';
import { IconBellFill } from '@salutejs/plasma-icons';

export const getServerSideProps: GetServerSideProps = async () => ({ props: {} });

const TextFieldPage: NextPage = () => {
    const [text, setText] = useState('Значение поля');

    return (
        <main style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', width: '70%' }}>
            <h1>TextField — SSR check</h1>
            <TextField
                label="Контролируемое"
                value={text}
                contentLeft={<IconBellFill size="s" color="inherit" />}
                contentRight={<IconBellFill size="s" color="inherit" />}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                onFocus={() => {}}
                onBlur={() => {}}
            />
            <TextField label="Неконтролируемое" defaultValue="Дефолтное значение" />
        </main>
    );
};

export default TextFieldPage;
