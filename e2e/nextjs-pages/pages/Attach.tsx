import React, { useState } from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { Attach } from '@salutejs/sdds-serv/styled-components';
import { IconPlasma } from '@salutejs/plasma-icons';

export const getServerSideProps: GetServerSideProps = async () => ({ props: {} });

const AttachPage: NextPage = () => {
    const [files, setFiles] = useState<File[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files;
        if (!fileList) return;
        setFiles(Array.from(fileList));
    };

    const handleClear = ({ file }: { file: File }) => {
        setFiles((prev) => prev.filter((f) => f !== file));
    };

    return (
        <main style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h1>Attach — SSR check</h1>
            <Attach
                buttonType="button"
                text="Прикрепить файл"
                files={files}
                onChange={handleChange}
                onClear={handleClear}
            />
            <Attach
                buttonType="button"
                text="С иконкой"
                contentLeft={<IconPlasma size="s" color="inherit" />}
                files={files}
                onChange={handleChange}
                onClear={handleClear}
            />
        </main>
    );
};

export default AttachPage;
