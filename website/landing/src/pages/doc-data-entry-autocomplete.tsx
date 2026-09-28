import { DocsPageLayout } from '../DocsPageLayout';
import { SiteLink } from '../shared';

export default function DocDataEntryAutocompletePage() {
    return (
        <DocsPageLayout>
            <nav className="crumbs">
                <SiteLink href="/docs">Документация</SiteLink>
                <i>/</i>
                <SiteLink href="/docs">Компоненты</SiteLink>
                <i>/</i>
                Data Entry
                <i>/</i>
                <span>Autocomplete</span>
            </nav>

            <div className="article-meta">
                <span className="post-kind">Data Entry</span>

                <span>Спецификация компонента</span>
                <span>·</span>
                <span>версия 1.5.0</span>
            </div>

            <h1>Autocomplete</h1>

            <p className="article-lead">
                Autocomplete — поле ввода с живым автодополнением из списка. Пользователь вводит текст, система
                фильтрует варианты.
            </p>

            <h2 id="p-1-key-principles-of-use">1. Key Principles of Use</h2>

            <p>
                <b>Use</b>
                {' — для длинных списков с поиском: выбор города, организации, пользователя.'}
            </p>

            <p>
                <b>Don&apos;t use</b>
                {' — когда список фиксированный и небольшой (используйте '}
                <b>Select</b>
                ).
            </p>

            <h2 id="p-3-variants">3. Variants</h2>

            <p>
                {'Пропы наследуются от TextField + '}
                <code>Opened=True/False</code>.
            </p>

            <div className="article-foot">
                <span>Нашли расхождение документации и библиотеки — напишите команде.</span>

                <SiteLink className="side-cta" href="/contacts">
                    Сообщить о расхождении
                </SiteLink>
            </div>
        </DocsPageLayout>
    );
}
