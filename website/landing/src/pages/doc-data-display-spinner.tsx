import { DocsPageLayout } from '../DocsPageLayout';
import { SiteLink } from '../shared';

export default function DocDataDisplaySpinnerPage() {
    return (
        <DocsPageLayout>
            <nav className="crumbs">
                <SiteLink href="/docs">Документация</SiteLink>
                <i>/</i>
                <SiteLink href="/docs">Компоненты</SiteLink>
                <i>/</i>
                Data Display
                <i>/</i>
                <span>Spinner</span>
            </nav>

            <div className="article-meta">
                <span className="post-kind">Data Display</span>

                <span>Спецификация компонента</span>
                <span>·</span>
                <span>версия 1.5.0</span>
                <span>·</span>
                <SiteLink href="https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=15228-1221242">
                    Открыть в Figma
                </SiteLink>
            </div>

            <h1>Spinner</h1>

            <p className="article-lead">
                Spinner — индикатор неопределённой загрузки. Используется, когда операция выполняется, но время её
                завершения неизвестно.
            </p>

            <h2 id="p-1-key-principles-of-use">1. Key Principles of Use</h2>

            <h3 id="when-to-use">When to use</h3>

            <p>
                <b>Use</b>
                {' — для отображения ожидания: загрузка данных, отправка формы, инициализация.'}
            </p>

            <p>
                <b>Don&apos;t use</b>
                {' — когда прогресс известен (используйте '}
                <b>ProgressBar</b>
                {' или '}
                <b>Loader</b>
                ).
            </p>

            <h2 id="p-5-states">5. States</h2>

            <p>Spinner не имеет состояний — он отображается только когда активен.</p>

            <div className="article-foot">
                <span>Нашли расхождение документации и библиотеки — напишите команде.</span>

                <SiteLink className="side-cta" href="/contacts">
                    Сообщить о расхождении
                </SiteLink>
            </div>
        </DocsPageLayout>
    );
}
