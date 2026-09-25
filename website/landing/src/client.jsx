import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '../fonts.css';
import '../styles.css';

const root = document.getElementById('root');
const app = (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <App />
    </BrowserRouter>
);
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
