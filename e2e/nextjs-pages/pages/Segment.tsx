import React, { useState } from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { SegmentProvider, SegmentGroup, SegmentItem } from '@salutejs/sdds-serv/styled-components';

export const getServerSideProps: GetServerSideProps = async () => ({ props: {} });

const segmentItems = ['Первый', 'Второй', 'Третий', 'Четвёртый'];

const SegmentContent = () => (
    <SegmentGroup clip={false}>
        {segmentItems.map((label, i) => (
            <SegmentItem key={`label_${i}`} label={label} value={`label_${i}`}>
                {label}
            </SegmentItem>
        ))}
    </SegmentGroup>
);

const SegmentPage: NextPage = () => {
    const [selected, setSelected] = useState<string[]>(['label_0']);

    return (
        <main style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h1>Segment — SSR check</h1>
            <SegmentProvider
                singleSelectedRequired
                selected={selected}
                onChangeSelected={(item: string) => setSelected([item])}
            >
                <SegmentContent />
            </SegmentProvider>
        </main>
    );
};

export default SegmentPage;
