import React, { useState } from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { Popover, Button } from '@salutejs/sdds-serv/styled-components';

export const getServerSideProps: GetServerSideProps = async () => ({ props: {} });

const contentStyle: React.CSSProperties = {
    background: 'var(--surface-solid-tertiary)',
    padding: '1rem',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const PopoverPage: NextPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <main style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h1>Popover — SSR check</h1>
            <Popover
                opened={isOpen}
                onToggle={(is: boolean) => setIsOpen(is)}
                usePortal={false}
                role="presentation"
                id="popover"
                target={<Button onClick={() => setIsOpen(true)}>Открыть</Button>}
                offset={[0, 6]}
                style={{ borderRadius: '20px' }}
            >
                <div style={contentStyle}>
                    <p>Содержимое</p>
                    <Button onClick={() => setIsOpen(false)}>Закрыть</Button>
                </div>
            </Popover>
        </main>
    );
};

export default PopoverPage;
