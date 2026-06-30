import React, { useState } from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { Slider } from '@salutejs/sdds-serv/styled-components';
import { IconMic } from '@salutejs/plasma-icons';

export const getServerSideProps: GetServerSideProps = async () => ({ props: {} });

const SliderPage: NextPage = () => {
    const [value, setValue] = useState(30);
    const [rangeValue, setRangeValue] = useState([10, 80]);

    return (
        <main style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h1>Slider — SSR check</h1>
            <div style={{ width: '25rem' }}>
                <Slider
                    value={value}
                    min={0}
                    max={100}
                    step={1}
                    labelContent={<IconMic size="s" />}
                    onChange={(v: any) => setValue(v)}
                    onChangeCommitted={(v: any) => setValue(v)}
                />
            </div>
            <div style={{ width: '25rem' }}>
                <Slider
                    value={rangeValue}
                    min={0}
                    max={100}
                    onChange={(v: any) => setRangeValue(v)}
                    onChangeCommitted={(v: any) => setRangeValue(v)}
                />
            </div>
        </main>
    );
};

export default SliderPage;
