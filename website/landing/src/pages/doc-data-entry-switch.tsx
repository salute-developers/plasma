import { DocsPageLayout } from '../DocsPageLayout';
import { SiteLink } from '../shared';

export default function DocDataEntrySwitchPage() {
    return (
        <DocsPageLayout>
            <nav className="crumbs">
                <SiteLink href="/docs">Документация</SiteLink>
                <i>/</i>
                <SiteLink href="/docs">Компоненты</SiteLink>
                <i>/</i>
                Data Entry
                <i>/</i>
                <span>Switch</span>
            </nav>

            <div className="article-meta">
                <span className="post-kind">Data Entry</span>

                <span>Спецификация компонента</span>
                <span>·</span>
                <span>версия 1.5.0</span>
                <span>·</span>
                <SiteLink href="https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=9892-120083">
                    Открыть в Figma
                </SiteLink>
            </div>

            <h1>Switch</h1>

            <p className="article-lead">
                Switch — переключатель бинарного состояния. Мгновенно применяет настройку без подтверждения.
            </p>

            <h2 id="p-1-key-principles-of-use">1. Key Principles of Use</h2>

            <h3 id="when-to-use">When to use</h3>

            <p>
                <b>Use</b>
                {' — для мгновенного включения/выключения настроек: тёмная тема, уведомления, доступ.'}
            </p>

            <p>
                <b>Don&apos;t use</b>
                {' — если изменение требует подтверждения или отложенного применения (используйте '}
                <b>CheckBox</b>
                {' + Submit).'}
            </p>

            <h2 id="p-2-anatomy">2. Anatomy</h2>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Слот</th>
                            <th>Проп</th>
                            <th>Описание</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>toggle</code>
                            </td>
                            <td>—</td>
                            <td>Ползунок переключателя</td>
                        </tr>
                        <tr>
                            <td>
                                <code>label</code>
                            </td>
                            <td>
                                <code>hasLabel=on</code>
                            </td>
                            <td>Текстовая метка</td>
                        </tr>
                        <tr>
                            <td>
                                <code>toggleTrack</code>
                            </td>
                            <td>—</td>
                            <td>Дорожка переключателя</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="togglesize">ToggleSize</h3>

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
                                <code>28 L</code>
                            </td>
                            <td>Крупный ползунок</td>
                        </tr>
                        <tr>
                            <td>
                                <code>20 S</code>
                            </td>
                            <td>Маленький ползунок</td>
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
                            <th>Имя</th>
                            <th>Размер</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>SwitchS</code>
                            </td>
                            <td>S</td>
                        </tr>
                        <tr>
                            <td>
                                <code>SwitchM</code>
                            </td>
                            <td>M</td>
                        </tr>
                        <tr>
                            <td>
                                <code>SwitchL</code>
                            </td>
                            <td>L</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="turn-on">Turn On</h3>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Значение</th>
                            <th>Состояние</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>off</code>
                            </td>
                            <td>Выключен</td>
                        </tr>
                        <tr>
                            <td>
                                <code>on</code>
                            </td>
                            <td>Включён</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="callout">
                <p>
                    <b>Примечание:</b>
                    {' Проп называется '}
                    <code>Turn On</code>
                    {' (с пробелом) — нестандартное именование.'}
                </p>
            </div>

            <div className="callout">
                <p>
                    <b>Примечание:</b>
                    {' Для '}
                    <code>hasLabel</code>
                    {' используется '}
                    <code>on/off</code>
                    {' вместо '}
                    <code>True/False</code>.
                </p>
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
                            </td>
                            <td>Компактные списки настроек</td>
                        </tr>
                        <tr>
                            <td>
                                <code>M</code>
                            </td>
                            <td>
                                {'Стандартные настройки — '}
                                <b>дефолт</b>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>L</code>
                            </td>
                            <td>Touch-first</td>
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
                            <th>Figma-проп</th>
                            <th>Описание</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>off</code>
                            </td>
                            <td>
                                <code>Turn On=off</code>
                            </td>
                            <td>Выключен</td>
                        </tr>
                        <tr>
                            <td>
                                <code>on</code>
                            </td>
                            <td>
                                <code>Turn On=on</code>
                            </td>
                            <td>Включён</td>
                        </tr>
                        <tr>
                            <td>
                                <code>hover</code>
                            </td>
                            <td>—</td>
                            <td>Курсор над переключателем</td>
                        </tr>
                        <tr>
                            <td>
                                <code>focus</code>
                            </td>
                            <td>—</td>
                            <td>Фокус клавиатуры</td>
                        </tr>
                        <tr>
                            <td>
                                <code>disabled</code>
                            </td>
                            <td>
                                <code>Disabled=true</code>
                            </td>
                            <td>Недоступен</td>
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
                                <code>role=&quot;switch&quot;</code>
                            </td>
                            <td>—</td>
                            <td>Всегда</td>
                        </tr>
                        <tr>
                            <td>
                                <code>aria-checked</code>
                            </td>
                            <td>
                                <code>&quot;true&quot;</code>
                                {' / '}
                                <code>&quot;false&quot;</code>
                            </td>
                            <td>
                                <code>Turn On=on/off</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>{'<label>'}</code>
                            </td>
                            <td>—</td>
                            <td>
                                <code>hasLabel=on</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>disabled</code>
                            </td>
                            <td>—</td>
                            <td>
                                <code>Disabled=true</code>
                            </td>
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
