import React from 'react';
import type { NextPage } from 'next';
import { Button, TextField, Checkbox, Badge } from '@salutejs/sdds-serv/styled-components';

const Home: NextPage = () => {
    return (
        <main style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h1>sdds-serv Next.js compatibility check</h1>

            <Button view="default" size="m" text="Кнопка" />

            <TextField size="m" label="Поле ввода" placeholder="Введите текст" />

            <Checkbox size="m" label="Чекбокс" />

            <Badge size="m" text="Badge" view="default" />
        </main>
    );
};

export default Home;
