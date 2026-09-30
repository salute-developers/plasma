import { DocsPageLayout } from '../DocsPageLayout';
import { SiteLink } from '../shared';

export default function DocActionsIconButtonPage() {
    return (
        <DocsPageLayout>
            <nav className="crumbs">
                <SiteLink href="/docs">Документация</SiteLink>
                <i>/</i>
                <SiteLink href="/docs">Компоненты</SiteLink>
                <i>/</i>
                Actions
                <i>/</i>
                <span>IconButton</span>
            </nav>

            <div className="article-meta">
                <span className="post-kind">Actions</span>

                <span>Спецификация компонента</span>
                <span>·</span>
                <span>версия 1.5.0</span>
                <span>·</span>
                <SiteLink href="https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=8923-75680">
                    Открыть в Figma
                </SiteLink>
            </div>

            <h1>IconButton</h1>

            <p className="article-lead">
                IconButton — кнопка без текстовой метки, только с иконкой. Используется в тулбарах, карточках, строках
                таблиц — где пространство ограничено или иконка однозначно передаёт смысл.
            </p>

            <h2 id="p-1-key-principles-of-use">1. Key Principles of Use</h2>

            <h3 id="when-to-use">When to use</h3>

            <p>
                <b>Use</b>
                {
                    ' — для действий, смысл которых однозначно передаётся иконкой: закрыть, удалить, редактировать, поделиться, развернуть.'
                }
            </p>

            <p>
                <b>Don&apos;t use:</b>
            </p>

            <ul className="article-list plain">
                <li>Если иконка не самоочевидна — добавьте Tooltip или используйте BasicButton</li>
                <li>Для основного CTA на экране — используйте BasicButton с лейблом</li>
            </ul>

            <h3 id="core-principles">Core principles</h3>

            <ul className="article-list plain">
                <li>
                    <b>Всегда с aria-label</b>
                    {' — иконка-only требует программного описания'}
                </li>
                <li>
                    <b>Всегда с Tooltip</b>
                    {' — визуальная подсказка для не-очевидных иконок'}
                </li>
                <li>
                    <b>Квадратные пропорции</b>
                    {' — ширина равна высоте'}
                </li>
            </ul>

            <h2 id="p-2-anatomy">2. Anatomy</h2>

            <pre className="doc-code">
                <code>{'┌──────┐\n│ icon │\n└──────┘'}</code>
            </pre>

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
                                <code>icon</code>
                            </td>
                            <td>required</td>
                            <td>Иконка действия</td>
                        </tr>
                        <tr>
                            <td>
                                <code>spinner</code>
                            </td>
                            <td>conditional</td>
                            <td>
                                {'При '}
                                <code>Loading=True</code>
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
                            <th>px</th>
                            <th>T-shirt</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>IconButton 24 XXS</code>
                            </td>
                            <td>24</td>
                            <td>XXS</td>
                        </tr>
                        <tr>
                            <td>
                                <code>{' IconButton 32 XS'}</code>
                            </td>
                            <td>32</td>
                            <td>XS</td>
                        </tr>
                        <tr>
                            <td>
                                <code>{' IconButton 40 S'}</code>
                            </td>
                            <td>40</td>
                            <td>S</td>
                        </tr>
                        <tr>
                            <td>
                                <code>{' IconButton 48 M'}</code>
                            </td>
                            <td>48</td>
                            <td>M</td>
                        </tr>
                        <tr>
                            <td>
                                <code>{' IconButton 56 L'}</code>
                            </td>
                            <td>56</td>
                            <td>L</td>
                        </tr>
                        <tr>
                            <td>
                                <code>IconButton 64 XL</code>
                            </td>
                            <td>64</td>
                            <td>XL</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="view">View</h3>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>View</th>
                            <th>Назначение</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>Default</code>
                            </td>
                            <td>Нейтральный</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Accent</code>
                            </td>
                            <td>Акцентный</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Secondary</code>
                            </td>
                            <td>Вторичный</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Clear</code>
                            </td>
                            <td>Прозрачный фон</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Positive</code>
                            </td>
                            <td>Позитивный</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Warning</code>
                            </td>
                            <td>Предупреждение</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Negative</code>
                            </td>
                            <td>Деструктивный</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Checked</code>
                            </td>
                            <td>Отмеченное/активное состояние</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Dark</code>
                                {' / '}
                                <code>Black</code>
                                {' / '}
                                <code>White</code>
                            </td>
                            <td>Монохромные варианты</td>
                        </tr>
                        <tr>
                            <td>
                                <code>AccentTransparent</code>
                            </td>
                            <td>Только в XXS</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="shape">Shape</h3>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Shape</th>
                            <th>Описание</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>Default</code>
                            </td>
                            <td>Стандартное скругление согласно размеру</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Pilled</code>
                            </td>
                            <td>Полностью скруглённый (circle)</td>
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
                            <th>px</th>
                            <th>Контекст</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>XXS</code>
                            </td>
                            <td>24</td>
                            <td>Встроенные в поля, чипы</td>
                        </tr>
                        <tr>
                            <td>
                                <code>XS</code>
                            </td>
                            <td>32</td>
                            <td>Тулбары, таблицы</td>
                        </tr>
                        <tr>
                            <td>
                                <code>S</code>
                            </td>
                            <td>40</td>
                            <td>Карточки, панели</td>
                        </tr>
                        <tr>
                            <td>
                                <code>M</code>
                            </td>
                            <td>48</td>
                            <td>
                                {'Стандартный — '}
                                <b>дефолт</b>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>L</code>
                            </td>
                            <td>56</td>
                            <td>Акцентные действия</td>
                        </tr>
                        <tr>
                            <td>
                                <code>XL</code>
                            </td>
                            <td>64</td>
                            <td>Touch-first, hero</td>
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
                                <code>default</code>
                            </td>
                            <td>—</td>
                            <td>Базовый вид</td>
                        </tr>
                        <tr>
                            <td>
                                <code>hover</code>
                            </td>
                            <td>—</td>
                            <td>Курсор над кнопкой</td>
                        </tr>
                        <tr>
                            <td>
                                <code>loading</code>
                            </td>
                            <td>
                                <code>Loading=true</code>
                                {' (нижний регистр в XS–L)'}
                            </td>
                            <td>Спиннер</td>
                        </tr>
                        <tr>
                            <td>
                                <code>disabled</code>
                            </td>
                            <td>
                                <code>Disabled=true</code>
                                {' (нижний регистр в XS–L)'}
                            </td>
                            <td>Недоступна</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="callout">
                <p>
                    {'Внимание: в IconButton XS–L используется нижний регистр '}
                    <code>true/false</code>
                    {', в XXS и XL — '}
                    <code>True/False</code>.
                </p>
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
                            <td>Перемещение фокуса</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Enter</code>
                            </td>
                            <td>Активация</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Space</code>
                            </td>
                            <td>Активация</td>
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
                                <code>{'<button>'}</code>
                            </td>
                            <td>—</td>
                            <td>Всегда</td>
                        </tr>
                        <tr>
                            <td>
                                <code>aria-label</code>
                            </td>
                            <td>Описание действия</td>
                            <td>Всегда (нет видимого текста)</td>
                        </tr>
                        <tr>
                            <td>
                                <code>aria-busy=&quot;true&quot;</code>
                            </td>
                            <td>—</td>
                            <td>
                                <code>Loading=true</code>
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
