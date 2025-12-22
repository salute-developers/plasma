import React from 'react';
import Layout from '@theme/Layout';
import { IconTrash } from '@salutejs/plasma-icons/css';
import { Button } from '@salutejs/plasma-web/css';
import Head from '@docusaurus/Head';

export default function AiSearchPage() {
    const handleClearHistory = () => {
        const dbName = 'plasma_docs-all';

        indexedDB.databases().then((databases) => {
            const targetDB = databases.find((db) => db.name === dbName);

            if (targetDB) {
                indexedDB.deleteDatabase(dbName);
            }

            window.location.reload();
        });
    };

    return (
        <Layout>
            <Head>
                <title>AI-поиск | Plasma Web</title>
            </Head>

            <main className="container margin-vert--lg">
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
                    <Button
                        onClick={handleClearHistory}
                        text="Очистить историю поиска"
                        size="xs"
                        view="clear"
                        contentRight={<IconTrash />}
                    />
                </div>

                <iframe title="AI search" src="/service/help-page/plasma-docs" width="100%" height="700px" />
            </main>
        </Layout>
    );
}
