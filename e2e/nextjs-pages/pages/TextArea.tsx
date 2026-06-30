import React, { ChangeEvent, useState } from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { TextArea } from '@salutejs/sdds-serv/styled-components';
import { IconBellFill } from '@salutejs/plasma-icons';

export const getServerSideProps: GetServerSideProps = async () => ({ props: {} });

const TextAreaPage: NextPage = () => {
    const [text, setText] = useState('Значение поля');

    return (
        <main style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h1>TextArea — SSR check</h1>
            <TextArea
                label="Контролируемое"
                value={text}
                contentRight={<IconBellFill size="s" color="inherit" />}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
                onFocus={() => {}}
                onBlur={() => {}}
            />
        </main>
    );
};

export default TextAreaPage;
