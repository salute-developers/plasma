import React, { useState } from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { DatePicker } from '@salutejs/sdds-serv/styled-components';
import { IconCalendar } from '@salutejs/plasma-icons';

export const getServerSideProps: GetServerSideProps = async () => ({ props: {} });

const DatePickerPage: NextPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <main style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h1>DatePicker — SSR check</h1>
            <DatePicker
                opened={isOpen}
                contentLeft={<IconCalendar size="s" color="inherit" />}
                onToggle={(is: boolean) => setIsOpen(is)}
                onChangeValue={() => {}}
                onCommitDate={() => {}}
                onBlur={() => {}}
                onFocus={() => {}}
                autoComplete="off"
            />
        </main>
    );
};

export default DatePickerPage;
