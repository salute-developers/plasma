import { DocsPageLayout } from '../DocsPageLayout';
import { SiteLink } from '../shared';

export default function DocDataDisplayCardPage() {
    return (
        <DocsPageLayout>
            <nav className="crumbs">
                <SiteLink href="/docs">Документация</SiteLink>
                <i>/</i>
                <SiteLink href="/docs">Компоненты</SiteLink>
                <i>/</i>
                Data Display
                <i>/</i>
                <span>Card</span>
            </nav>

            <div className="article-meta">
                <span className="post-kind">Data Display</span>

                <span>Спецификация компонента</span>
                <span>·</span>
                <span>версия 1.5.0</span>
                <span>·</span>
                <SiteLink href="https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=16938-14178">
                    Открыть в Figma
                </SiteLink>
            </div>

            <h1>Card</h1>

            <p className="article-lead">
                Card — контейнер для группировки связанного контента и действий. Визуально отделяет блок информации от
                окружающего контента.
            </p>

            <h2 id="p-1-key-principles-of-use">1. Key Principles of Use</h2>

            <h3 id="when-to-use">When to use</h3>

            <p>
                <b>Use</b>
                {' — для отображения объектов с атрибутами и действиями: товары, профили, статьи, задачи.'}
            </p>

            <h2 id="p-2-anatomy">2. Anatomy</h2>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Слот</th>
                            <th>Обязательность</th>
                            <th>Описание</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>media</code>
                            </td>
                            <td>optional</td>
                            <td>Изображение или медиа-контент</td>
                        </tr>
                        <tr>
                            <td>
                                <code>header</code>
                            </td>
                            <td>optional</td>
                            <td>Заголовок и подзаголовок</td>
                        </tr>
                        <tr>
                            <td>
                                <code>body</code>
                            </td>
                            <td>required</td>
                            <td>Основной контент</td>
                        </tr>
                        <tr>
                            <td>
                                <code>footer</code>
                                {' / '}
                                <code>actions</code>
                            </td>
                            <td>optional</td>
                            <td>Кнопки и действия</td>
                        </tr>
                        <tr>
                            <td>
                                <code>badge</code>
                            </td>
                            <td>optional</td>
                            <td>Статусная метка</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="p-5-states">5. States</h2>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Состояние</th>
                            <th>Описание</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>default</code>
                            </td>
                            <td>Базовый вид</td>
                        </tr>
                        <tr>
                            <td>
                                <code>hover</code>
                            </td>
                            <td>Для кликабельных карточек</td>
                        </tr>
                        <tr>
                            <td>
                                <code>selected</code>
                            </td>
                            <td>Выбранная карточка</td>
                        </tr>
                        <tr>
                            <td>
                                <code>disabled</code>
                            </td>
                            <td>Недоступна</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="article-foot">
                <span>Нашли расхождение документации и библиотеки — напишите команде.</span>

                <SiteLink className="side-cta" href="/contacts">
                    Сообщить о расхождении
                </SiteLink>
            </div>
        </DocsPageLayout>
    );
}
