import { DocsPageLayout } from '../DocsPageLayout';
import { SiteLink } from '../shared';

export default function DocDataDisplayAvatarPage() {
    return (
        <DocsPageLayout>
            <nav className="crumbs">
                <SiteLink href="/docs">Документация</SiteLink>
                <i>/</i>
                <SiteLink href="/docs">Компоненты</SiteLink>
                <i>/</i>
                Data Display
                <i>/</i>
                <span>Avatar</span>
            </nav>

            <div className="article-meta">
                <span className="post-kind">Data Display</span>

                <span>Спецификация компонента</span>
                <span>·</span>
                <span>версия 1.5.0</span>
                <span>·</span>
                <SiteLink href="https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=10404-127654">
                    Открыть в Figma
                </SiteLink>
            </div>

            <h1>Avatar</h1>

            <p className="article-lead">
                Avatar — визуальное представление пользователя или сущности. Отображает фото или инициалы на цветном
                фоне.
            </p>

            <h2 id="p-1-key-principles-of-use">1. Key Principles of Use</h2>

            <h3 id="when-to-use">When to use</h3>

            <p>
                <b>Use</b>
                {' — для идентификации пользователя в профиле, списке, чате, карточке.'}
            </p>

            <h2 id="p-2-anatomy">2. Anatomy</h2>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Слот</th>
                            <th>Описание</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>image</code>
                            </td>
                            <td>
                                {'Фото (при '}
                                <code>View=Image</code>)
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>initials</code>
                            </td>
                            <td>
                                {'Инициалы (при '}
                                <code>View=Initials</code>)
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>statusIndicator</code>
                            </td>
                            <td>
                                {'Индикатор статуса (при '}
                                <code>Status≠Default</code>)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="p-3-variants">3. Variants</h2>

            <h3 id="figma-component-sets">Figma Component Sets</h3>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Имя в Figma</th>
                            <th>Примечание</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>Avatar24S</code>
                            </td>
                            <td>S — с числом, нестандартно</td>
                        </tr>
                        <tr>
                            <td>
                                <code>AvatarM</code>
                            </td>
                            <td>M — без числа</td>
                        </tr>
                        <tr>
                            <td>
                                <code>AvatarL</code>
                            </td>
                            <td>L — без числа</td>
                        </tr>
                        <tr>
                            <td>
                                <code>AvatarXL</code>
                            </td>
                            <td>XL — без числа</td>
                        </tr>
                        <tr>
                            <td>
                                <code>AvatarXXL</code>
                            </td>
                            <td>XXL — без числа</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="callout">
                <p>
                    {'Нестандартное именование: '}
                    <code>Avatar24S</code>
                    {' содержит число, остальные — нет.'}
                </p>
            </div>

            <h3 id="view">View</h3>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>View</th>
                            <th>Описание</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>Image</code>
                            </td>
                            <td>Фотография пользователя</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Initials</code>
                            </td>
                            <td>Инициалы на цветном фоне</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="status">Status</h3>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Описание</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>Default</code>
                            </td>
                            <td>Без индикатора</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Active</code>
                            </td>
                            <td>Зелёный индикатор (онлайн)</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Inactive</code>
                            </td>
                            <td>Серый индикатор (оффлайн)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="iscirculed">isCirculed</h3>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Значение</th>
                            <th>Описание</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>true</code>
                            </td>
                            <td>Круглая форма</td>
                        </tr>
                        <tr>
                            <td>
                                <code>false</code>
                            </td>
                            <td>Скруглённый квадрат</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="p-4-sizes">4. Sizes</h2>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>T-shirt</th>
                            <th>Контекст</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>S</code>
                                {' (24px)'}
                            </td>
                            <td>Встроенный в Chip, строки таблиц</td>
                        </tr>
                        <tr>
                            <td>
                                <code>M</code>
                            </td>
                            <td>Комментарии, списки</td>
                        </tr>
                        <tr>
                            <td>
                                <code>L</code>
                            </td>
                            <td>Карточки пользователя</td>
                        </tr>
                        <tr>
                            <td>
                                <code>XL</code>
                            </td>
                            <td>Профиль, заголовок страницы</td>
                        </tr>
                        <tr>
                            <td>
                                <code>XXL</code>
                            </td>
                            <td>Крупный профиль</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="p-7-accessibility">7. Accessibility</h2>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Атрибут</th>
                            <th>Значение</th>
                            <th>Когда</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>alt</code>
                            </td>
                            <td>Имя пользователя</td>
                            <td>
                                <code>View=Image</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>aria-label</code>
                            </td>
                            <td>Имя + статус</td>
                            <td>При наличии статусного индикатора</td>
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
