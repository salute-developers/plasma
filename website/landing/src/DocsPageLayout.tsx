import type { ReactNode } from 'react';

import { DocsSidebar } from './DocsSidebar';
import { Header, SiteFooter } from './shared';

type DocsPageLayoutProps = {
    children: ReactNode;
};

export function DocsPageLayout({ children }: DocsPageLayoutProps) {
    return (
        <>
            <Header />
            <section className="section screen page-top">
                <div className="shell doc-shell">
                    <div className="doc-layout">
                        <DocsSidebar />
                        <article className="article doc-body">{children}</article>
                    </div>
                </div>
            </section>
            <SiteFooter />
        </>
    );
}
