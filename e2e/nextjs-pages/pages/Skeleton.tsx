import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { LineSkeleton, TextSkeleton, RectSkeleton } from '@salutejs/sdds-serv/styled-components';

export const getServerSideProps: GetServerSideProps = async () => ({ props: {} });

const SkeletonPage: NextPage = () => (
    <main style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h1>Skeleton — SSR check</h1>
        <LineSkeleton size="bodyM" roundness={16} animationType="shimmer" />
        <TextSkeleton size="bodyM" lines={3} roundness={16} animationType="shimmer" />
        <RectSkeleton width="4rem" height="4rem" roundness={16} animationType="shimmer" />
        <LineSkeleton size="bodyM" roundness={8} animationType="pulse" />
    </main>
);

export default SkeletonPage;
