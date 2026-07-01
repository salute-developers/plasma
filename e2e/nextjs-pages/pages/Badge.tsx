import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { Badge } from '@salutejs/sdds-serv/styled-components';

export const getServerSideProps: GetServerSideProps = async () => ({ props: {} });

const BellIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" {...props}>
        <path
            d="M11.501 21.28c1.088 0 1.978-.889 1.978-1.977H9.524c0 1.088.88 1.978 1.977 1.978zm5.933-5.932v-4.944c0-3.035-1.622-5.576-4.45-6.248v-.673c0-.82-.662-1.483-1.483-1.483-.82 0-1.483.662-1.483 1.483v.672c-2.838.673-4.45 3.204-4.45 6.25v4.943l-1.275 1.276c-.623.623-.188 1.69.692 1.69h13.022c.88 0 1.325-1.067.702-1.69l-1.275-1.276z"
            fill="currentColor"
        />
    </svg>
);

const BadgePage: NextPage = () => (
    <main style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h1>Badge — SSR check</h1>
        <Badge text="Метка" />
        <Badge text="С иконкой" contentLeft={<BellIcon width="16" height="16" />} />
        <Badge contentLeft={<BellIcon width="16" height="16" />} />
    </main>
);

export default BadgePage;
