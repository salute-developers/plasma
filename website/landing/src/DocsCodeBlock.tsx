import { useState } from 'react';

export function DocsCodeBlock({ children }: { children: string }) {
    const [status, setStatus] = useState('Скопировать');

    async function copy() {
        try {
            await navigator.clipboard.writeText(children);
            setStatus('Скопировано');
        } catch {
            setStatus('Выделите и скопируйте код вручную');
        }
    }

    return (
        <div className="doc-code-block">
            <div className="doc-code-actions">
                <button type="button" onClick={copy} aria-label="Скопировать код">
                    Скопировать
                </button>
                <span role="status">{status === 'Скопировать' ? '' : status}</span>
            </div>
            <pre className="doc-code">
                <code>{children}</code>
            </pre>
        </div>
    );
}
