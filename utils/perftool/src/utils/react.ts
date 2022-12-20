import { version } from 'react';
import ReactDOM from 'react-dom';
import type * as ReactDOMClientType from 'react-dom/client';

export const IS_REACT_18_AND_NEWER = Number(version.split('.')[0]) >= 18;

// Import (React 18 specific) react-dom/client conditionally to avoid build-time errors when using older versions
let ReactDOMClient: typeof ReactDOMClientType = {} as any;
if (IS_REACT_18_AND_NEWER && process.env.PERFTOOL_CLIENT_RUNTIME) {
    ReactDOMClient = require.context('react-dom', true, /client.js$/)('./client.js');
}

export async function render(element: React.ReactElement, container: HTMLElement): Promise<void> {
    return new Promise((resolve) => {
        if (!IS_REACT_18_AND_NEWER) {
            ReactDOM.render(element, container, resolve);
            return;
        }

        const { createRoot } = ReactDOMClient;
        const root = createRoot(container);
        root.render(element);

        resolve();
    });
}

export async function hydrate(element: React.ReactElement, container: HTMLElement): Promise<void> {
    return new Promise((resolve) => {
        if (!IS_REACT_18_AND_NEWER) {
            ReactDOM.hydrate(element, container, resolve);
            return;
        }

        const { hydrateRoot } = ReactDOMClient;
        hydrateRoot(container, element);

        resolve();
    });
}
