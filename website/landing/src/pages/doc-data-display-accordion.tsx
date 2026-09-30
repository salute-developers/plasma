import { DocsPageLayout } from '../DocsPageLayout';
import { SiteLink } from '../shared';

export default function DocDataDisplayAccordionPage() {
    return (
        <DocsPageLayout>
            <nav className="crumbs">
                <SiteLink href="/docs">Документация</SiteLink>
                <i>/</i>
                <SiteLink href="/docs">Компоненты</SiteLink>
                <i>/</i>
                Data Display
                <i>/</i>
                <span>Accordion</span>
            </nav>

            <div className="article-meta">
                <span className="post-kind">Data Display</span>

                <span>Спецификация компонента</span>
                <span>·</span>
                <span>версия 1.5.0</span>
                <span>·</span>
                <SiteLink href="https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=14329-69">
                    Открыть в Figma
                </SiteLink>
            </div>

            <h1>Accordion</h1>

            <p className="article-lead">
                Accordion — сворачиваемые секции контента. Позволяет скрыть вторичный контент и раскрыть его по запросу
                пользователя.
            </p>

            <h2 id="p-1-key-principles-of-use">1. Key Principles of Use</h2>

            <h3 id="when-to-use">When to use</h3>

            <p>
                <b>Use</b>
                {' — FAQ, настройки с многочисленными разделами, длинные формы с необязательными полями.'}
            </p>

            <p>
                <b>Don&apos;t use</b>
                {' — если контент важен и пользователь должен видеть его сразу.'}
            </p>

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
                                <code>collapsed</code>
                            </td>
                            <td>Секция свёрнута</td>
                        </tr>
                        <tr>
                            <td>
                                <code>expanded</code>
                            </td>
                            <td>Секция раскрыта</td>
                        </tr>
                        <tr>
                            <td>
                                <code>hover</code>
                            </td>
                            <td>Курсор над заголовком</td>
                        </tr>
                        <tr>
                            <td>
                                <code>focus</code>
                            </td>
                            <td>Фокус клавиатуры</td>
                        </tr>
                        <tr>
                            <td>
                                <code>disabled</code>
                            </td>
                            <td>Секция недоступна</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="p-6-behavior">6. Behavior</h2>

            <h3 id="keyboard-interaction">Keyboard interaction</h3>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Клавиша</th>
                            <th>Действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>Tab</code>
                                {' / '}
                                <code>Shift+Tab</code>
                            </td>
                            <td>Переход между заголовками</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Enter</code>
                                {' / '}
                                <code>Space</code>
                            </td>
                            <td>Раскрыть / свернуть секцию</td>
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
