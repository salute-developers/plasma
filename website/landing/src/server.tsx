import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import App from './App';

export function render(url) {
    return renderToString(
        <StaticRouter basename={import.meta.env.BASE_URL} location={url}>
            <App />
        </StaticRouter>,
    );
}
