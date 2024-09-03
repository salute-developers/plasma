import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import { GlobalStyle } from './GlobalStyle';

const rootElement = document.querySelector('#root');

if (!rootElement) {
    throw new Error('App root container was not found');
}

const root = createRoot(rootElement);

root.render(
    <GlobalStyle>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        {/* <RouterProvider router={router} /> */}
    </GlobalStyle>,
);
