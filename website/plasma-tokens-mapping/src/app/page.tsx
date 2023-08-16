'use client';

import { styled } from '@linaria/react';
import Link from 'next/link';

import { useEffect, useState } from 'react';

// import { Checkbox, Headline1, Headline2, Link as PLink } from '@salutejs/plasma-web';

import { h1, h2 } from '@salutejs/plasma-typo';

const Headline1 = styled.h1`
    ${h1}
    margin: 1rem;
`;

const Headline2 = styled.h2`
    ${h2}
    margin: 1rem;
    margin-left: 1.5rem;
`;

// import styled from "styled-components";

// import { dark } from "@salutejs/plasma-tokens-b2b/themes";
// import { b2b } from '@salutejs/plasma-tokens-b2b/typo';

// // import { getModifiers } from './api';

// console.log(dark[":root"]);
// console.log(b2b[":root"]);

// const Theme = styled.div`
//     ${dark[":root"]};
//     ${b2b[":root"]};
// `;

// const Root = styled.div`
//     height: 100vh;
//     width: 100%;

//     padding: 2rem;
// `;

export default function Home() {
    const [components, setComponents] = useState<Array<string>>([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/api/components');
            const data = await res.json();

            if (data.components) {
                setComponents(data.components);
            }
        }
        fetchData();
    }, []);

    const btn = {
        name: 'Button',
        mods: [{ name: '_view' }, { name: '_size' }],
    };

    return (
        <>
            <Headline1>Map me baby</Headline1>
            <div>
                {components.map((component) => {
                    return <Component key={component} name={component} />;
                })}
            </div>
        </>
    );
}

// function Mod(props) {
//     const { name } = props;
//     return <h3> { name } </h3>
// }

interface ComponentProps {
    name: string;
    mods?: Record<string, string>;
}

function Component(props: ComponentProps) {
    const { name, mods } = props;

    return (
        <Headline2>
            <Link href={`/component/${name}`}>{name}</Link>
        </Headline2>
    );
}

// async function getData() {
//     const mm = await getModifiers();
//
//     console.log(mm);
// }
