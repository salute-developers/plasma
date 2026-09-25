import { useEffect } from 'react';
import { initHome } from './legacy-effects/home';
import { initInternal } from './legacy-effects/internal';
import { initIcons } from './legacy-effects/icons';
import { initReveal } from './legacy-effects/reveal';

export function PageEffects({ page }) {
    useEffect(() => {
        const cleanup = [];
        if (page === 'index') cleanup.push(initHome());
        else cleanup.push(initInternal());
        if (page === 'doc-icons') cleanup.push(initIcons());
        cleanup.push(initReveal());

        // The interactive sandbox is an existing, self-contained React bundle.
        // It mounts into the sandbox container only on its documentation page.
        let sandboxScript;
        let sandboxStyle;
        if (page === 'doc-actions-button') {
            sandboxStyle = document.querySelector('link[data-sandbox-style]');
            if (!sandboxStyle) {
                sandboxStyle = document.createElement('link');
                sandboxStyle.rel = 'stylesheet';
                sandboxStyle.href = '/sandbox.css';
                sandboxStyle.dataset.sandboxStyle = '';
                document.head.append(sandboxStyle);
            }
            sandboxScript = document.createElement('script');
            sandboxScript.src = '/sandbox.js';
            document.body.append(sandboxScript);
        }
        return () => {
            cleanup.reverse().forEach((dispose) => dispose?.());
            sandboxScript?.remove();
            sandboxStyle?.remove();
        };
    }, [page]);
    return null;
}
