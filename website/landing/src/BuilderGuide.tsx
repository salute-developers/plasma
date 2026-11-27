import type { ReactNode } from 'react';

import { DocsPageLayout } from './DocsPageLayout';
import { builderGuides } from './builderGuides';
import { SiteLink } from './shared';


type BuilderGuideRoute = (typeof builderGuides)[number]['route'];

type BuilderGuideProps = {
    route: BuilderGuideRoute;
    title: string;
    lead: ReactNode;
    children: ReactNode;
};

/** Страница инструкции: хлебные крошки, заголовок, текст и переход к соседним инструкциям. */
export function BuilderGuide({ route, title, lead, children }: BuilderGuideProps) {
    const index = builderGuides.findIndex((guide) => guide.route === route);
    const previous = builderGuides[index - 1];
    const next = builderGuides[index + 1];

    return (
        <DocsPageLayout>
            <nav className="crumbs">
                <SiteLink href="/docs">Документация</SiteLink>
                <i>/</i>
                <SiteLink href="/builder">DS Builder</SiteLink>
                <i>/</i>
                <span>{builderGuides[index].short}</span>
            </nav>
            <div className="article-meta">
                <span className="post-kind">Инструкция</span>
                <span>
                    DS Builder · шаг {index + 1} из {builderGuides.length}
                </span>
            </div>
            <h1>{title}</h1>
            <p className="article-lead">{lead}</p>
            {children}
            <div className="article-foot guide-foot">
                {previous ? <SiteLink href={previous.route}>← {previous.short}</SiteLink> : <span />}
                {next ? <SiteLink href={next.route}>{next.short} →</SiteLink> : <span />}
            </div>
        </DocsPageLayout>
    );
}

/** Нумерованные шаги: заголовок шага и пояснение под ним. */
export function Steps({ children }: { children: ReactNode }) {
    return <ol className="article-list doc-step-list guide-steps">{children}</ol>;
}

export function Step({ title, children }: { title: ReactNode; children?: ReactNode }) {
    return (
        <li>
            <b>{title}</b>
            {children}
        </li>
    );
}
