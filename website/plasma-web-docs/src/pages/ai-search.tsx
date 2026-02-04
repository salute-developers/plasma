import React, { useEffect, useRef, useState } from 'react';
import Layout from '@theme/Layout';
import { IconTrash } from '@salutejs/plasma-icons/css';
import { Button } from '@salutejs/plasma-web/css';
import Head from '@docusaurus/Head';

const name = 'plasma-web';

export default function AiSearchPage() {
    const [show, setShow] = useState(false);

    const iframeRef = useRef<HTMLIFrameElement | null>(null);

    const handleClearHistory = () => {
        const dbName = `plasma_docs-${name}`;

        indexedDB.databases().then((databases) => {
            const targetDB = databases.find((db) => db.name === dbName);

            if (targetDB) {
                indexedDB.deleteDatabase(dbName);
            }

            window.location.reload();
        });
    };

    const config = {
        configKey: 'plasma_docs',
        docIds: [name],
        prompt:
            'Ты специалист по поддержке пользователей, и можешь совершенно точно ответить на любой вопрос о компонентах UI-библиотеки Plasma-web. Никогда не придумывай данные для ответа. Используй ТОЛЬКО данные, которые есть в CONTEXT. {context}',
        title: 'Задайте вопрос по работе с Plasma Web',
        questions: {
            1: 'Как подключить тему',
            2: 'Расскажи о типографике',
            3: 'Работа с NextJS',
        },
        modelParameters: {
            qdrantConfig: {
                collectionName: 'plasma-docs',
            },
            phoenixConfig: {
                metadata: {
                    service: 'plasma-docs',
                    product: name,
                },
            },
        },
    };

    const handleMessage = (event: MessageEvent) => {
        if (event.origin !== window.origin || !event.data || !iframeRef?.current?.contentWindow) return;

        const message = typeof event.data === 'string' && JSON.parse(event.data);

        switch (message.method) {
            case 'READY':
                iframeRef.current.contentWindow.postMessage(
                    {
                        type: 'SETUP_CONFIG',
                        data: { ...config, messagesSuffix: name },
                    },
                    '*',
                );
                break;

            default:
        }
    };

    useEffect(() => {
        window.addEventListener('message', handleMessage);

        setTimeout(() => {
            setShow(true);
        }, 100);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);

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

                {show && (
                    <iframe
                        ref={iframeRef}
                        title="AI search"
                        src="/service/help-page/plasma-docs"
                        width="100%"
                        height="700px"
                    />
                )}
            </main>
        </Layout>
    );
}
