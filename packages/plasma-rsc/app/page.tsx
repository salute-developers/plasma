import React from 'react';

import { Button, Checkbox } from '../es';

import styles from './page.module.css';

export default function Home() {
    return (
        <main className={styles.main}>
            <Button>Button</Button>
            <Checkbox name="item.name" value="item.value" label="Label" description="Description" />
        </main>
    );
}
