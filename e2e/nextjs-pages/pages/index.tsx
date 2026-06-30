import React, { useState } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { H1, H3, TextM, TextField, Chip } from '@salutejs/sdds-serv/styled-components';

type ComponentEntry = { name: string; category: string };

const components: ComponentEntry[] = [
    { name: 'Attach', category: 'Data Entry' },
    { name: 'Button', category: 'Data Entry' },
    { name: 'Calendar', category: 'Data Entry' },
    { name: 'Combobox', category: 'Data Entry' },
    { name: 'DatePicker', category: 'Data Entry' },
    { name: 'Dropdown', category: 'Data Entry' },
    { name: 'NumberInput', category: 'Data Entry' },
    { name: 'Range', category: 'Data Entry' },
    { name: 'Segment', category: 'Data Entry' },
    { name: 'Select', category: 'Data Entry' },
    { name: 'Slider', category: 'Data Entry' },
    { name: 'TextArea', category: 'Data Entry' },
    { name: 'TextField', category: 'Data Entry' },
    { name: 'Badge', category: 'Data Display' },
    { name: 'Chip', category: 'Data Display' },
    { name: 'Progress', category: 'Data Display' },
    { name: 'Skeleton', category: 'Data Display' },
    { name: 'Link', category: 'Navigation' },
    { name: 'Pagination', category: 'Navigation' },
    { name: 'Steps', category: 'Navigation' },
    { name: 'Popover', category: 'Overlay' },
];

const categoryOrder = ['Data Entry', 'Data Display', 'Navigation', 'Overlay'];

const Home: NextPage = () => {
    const [query, setQuery] = useState('');

    const filtered = query ? components.filter((c) => c.name.toLowerCase().includes(query.toLowerCase())) : components;

    const grouped = categoryOrder.reduce<Record<string, ComponentEntry[]>>((acc, cat) => {
        const items = filtered.filter((c) => c.category === cat);
        if (items.length) acc[cat] = items;
        return acc;
    }, {});

    return (
        <main style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <H1>DS Next.js SSR check</H1>

            <TextField
                placeholder="Поиск компонента..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                    width: '50%',
                    maxWidth: '400px',
                }}
            />

            {Object.entries(grouped).map(([category, items]) => (
                <section key={category}>
                    <H3 style={{ marginBottom: '0.75rem' }}>{category}</H3>
                    <ul
                        style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '1rem',
                        }}
                    >
                        {items.map(({ name }) => (
                            <li key={name}>
                                <Link href={`/${name}`} style={{ textDecoration: 'none' }}>
                                    <Chip view="secondary" hasClear={false}>
                                        {name}
                                    </Chip>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}

            {Object.keys(grouped).length === 0 && <TextM>Ничего не найдено</TextM>}
        </main>
    );
};

export default Home;
