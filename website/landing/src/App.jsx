import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { routeManifest } from './routeManifest';
import { PageEffects } from './effects';

const pages = import.meta.glob('./pages/*.jsx', { eager: true });

function CurrentPage({ entry }) {
    const Component = pages[`./pages/${entry.name}.jsx`].default;
    useEffect(() => {
        document.title = entry.title;
        const description = document.querySelector('meta[name="description"]');
        if (description) description.content = entry.description;
    }, [entry]);
    return (
        <>
            <Component />
            <PageEffects page={entry.name} />
        </>
    );
}

function ScrollOnNavigation() {
    const { pathname, hash } = useLocation();
    useEffect(() => {
        if (hash) window.requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
        else window.scrollTo(0, 0);
    }, [pathname, hash]);
    return null;
}

export default function App() {
    return (
        <>
            <ScrollOnNavigation />
            <Routes>
                {routeManifest.map((entry) => (
                    <Route key={entry.route} path={entry.route} element={<CurrentPage entry={entry} />} />
                ))}
                <Route
                    path="*"
                    element={
                        <main className="section screen page-top">
                            <div className="shell">
                                <h1>Страница не найдена</h1>
                                <a href="/">На главную</a>
                            </div>
                        </main>
                    }
                />
            </Routes>
        </>
    );
}
