import React, { useCallback, useState } from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { CalendarBase, CalendarDouble } from '@salutejs/sdds-serv/styled-components';

export const getServerSideProps: GetServerSideProps = async () => ({ props: {} });

const CalendarPage: NextPage = () => {
    const [value, setValue] = useState(new Date(2023, 6, 7));

    const handleOnChange = useCallback((newValue: Date) => setValue(newValue), []);

    return (
        <main style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h1>Calendar — SSR check</h1>
            <CalendarBase
                value={value}
                onChangeValue={handleOnChange}
                min={new Date(2020, 0, 1)}
                max={new Date(2030, 11, 31)}
            />
            <CalendarDouble value={value} onChangeValue={handleOnChange} />
        </main>
    );
};

export default CalendarPage;
