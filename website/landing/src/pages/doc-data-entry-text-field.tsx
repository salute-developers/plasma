import { DocsPageLayout } from '../DocsPageLayout';
import { SiteLink } from '../shared';

export default function DocDataEntryTextFieldPage() {
    return (
        <DocsPageLayout>
            <nav className="crumbs">
                <SiteLink href="/docs">Документация</SiteLink>
                <i>/</i>
                <SiteLink href="/docs">Компоненты</SiteLink>
                <i>/</i>
                Data Entry
                <i>/</i>
                <span>TextField</span>
            </nav>

            <div className="article-meta">
                <span className="post-kind">Data Entry</span>

                <span>Спецификация компонента</span>
                <span>·</span>
                <span>версия 1.5.0</span>
                <span>·</span>
                <SiteLink href="https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=8688-468">
                    Открыть в Figma
                </SiteLink>
            </div>

            <h1>TextField</h1>

            <p className="article-lead">
                Связанные компоненты: TextFieldClear (<code>14446:247159</code>
                ), TextFieldGroup (<code>13943:164509</code>
                ), TextFieldSlider (<code>22919:4905</code>)
            </p>

            <h2 id="p-1-key-principles-of-use">1. Key Principles of Use</h2>

            <h3 id="what-it-is">What it is</h3>

            <p>TextField — однострочное поле ввода текстовых данных. Основной инпут системы.</p>

            <h3 id="when-to-use">When to use</h3>

            <p>
                <b>Use</b>
                {' — для ввода имени, email, телефона, пароля, поискового запроса, числа.'}
            </p>

            <p>
                <b>Don&apos;t use:</b>
            </p>

            <ul className="article-list plain">
                <li>
                    {'Для длинных текстов — используйте '}
                    <b>TextArea</b>
                </li>
                <li>
                    {'Для выбора из списка — используйте '}
                    <b>Select</b>
                    {' или '}
                    <b>Autocomplete</b>
                </li>
                <li>
                    {'Для числового диапазона — используйте '}
                    <b>Range</b>
                </li>
            </ul>

            <h2 id="p-2-anatomy">2. Anatomy</h2>

            <pre className="doc-code">
                <code>
                    {
                        '[Label]\n┌──────────────────────────────────────────┐\n│ [prefix]  placeholder / value  [suffix]  │\n└──────────────────────────────────────────┘\n[Hint text]'
                    }
                </code>
            </pre>

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
                                <code>label</code>
                            </td>
                            <td>
                                <code>LabelPlacement</code>
                            </td>
                            <td>Метка поля. Может быть снаружи, внутри или скрыта</td>
                        </tr>
                        <tr>
                            <td>
                                <code>input</code>
                            </td>
                            <td>—</td>
                            <td>Само поле ввода</td>
                        </tr>
                        <tr>
                            <td>
                                <code>prefix</code>
                            </td>
                            <td>—</td>
                            <td>Иконка, текст или элемент слева внутри поля</td>
                        </tr>
                        <tr>
                            <td>
                                <code>suffix</code>
                            </td>
                            <td>—</td>
                            <td>Иконка, текст или элемент справа</td>
                        </tr>
                        <tr>
                            <td>
                                <code>hint</code>
                            </td>
                            <td>
                                <code>HintPlacement</code>
                            </td>
                            <td>Подсказка / текст ошибки</td>
                        </tr>
                        <tr>
                            <td>
                                <code>requiredMarker</code>
                            </td>
                            <td>
                                <code>RequiredPlacement</code>
                            </td>
                            <td>Маркер обязательности</td>
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
                                <code>{' TextField 32 XS'}</code>
                            </td>
                            <td>32</td>
                            <td>XS</td>
                        </tr>
                        <tr>
                            <td>
                                <code>{' TextField 40 S'}</code>
                            </td>
                            <td>40</td>
                            <td>S</td>
                        </tr>
                        <tr>
                            <td>
                                <code>{' TextField 48 M'}</code>
                            </td>
                            <td>48</td>
                            <td>M</td>
                        </tr>
                        <tr>
                            <td>
                                <code>{' TextField 56 L'}</code>
                            </td>
                            <td>56</td>
                            <td>L</td>
                        </tr>
                        <tr>
                            <td>
                                <code>TextField 64 XL</code>
                            </td>
                            <td>64</td>
                            <td>XL</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="view-sostoyanie-validacii">View (состояние валидации)</h3>

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
                                <code>Default</code>
                            </td>
                            <td>Нейтральное</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Error</code>
                            </td>
                            <td>Ошибка валидации</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Warning</code>
                            </td>
                            <td>Предупреждение</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Success</code>
                            </td>
                            <td>Успешная валидация</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="labelplacement">LabelPlacement</h3>

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
                                <code>Outer</code>
                            </td>
                            <td>Лейбл над полем</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Inner</code>
                            </td>
                            <td>Floating label внутри поля (XS не поддерживает)</td>
                        </tr>
                        <tr>
                            <td>
                                <code>None</code>
                            </td>
                            <td>Лейбл скрыт</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="hintplacement">HintPlacement</h3>

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
                                <code>Outer</code>
                            </td>
                            <td>Подсказка под полем</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Inner</code>
                            </td>
                            <td>Подсказка внутри при пустом поле</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="value-sostoyanie-zapolnennosti">Value (состояние заполненности)</h3>

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
                                <code>Empty</code>
                            </td>
                            <td>Поле пустое</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Single</code>
                            </td>
                            <td>Однострочное значение</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Multiple</code>
                            </td>
                            <td>Многострочное значение</td>
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
                                <code>XS</code>
                            </td>
                            <td>32</td>
                            <td>Тулбары, компактные формы</td>
                        </tr>
                        <tr>
                            <td>
                                <code>S</code>
                            </td>
                            <td>40</td>
                            <td>Вторичные формы</td>
                        </tr>
                        <tr>
                            <td>
                                <code>M</code>
                            </td>
                            <td>48</td>
                            <td>
                                {'Стандартные формы — '}
                                <b>дефолт</b>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>L</code>
                            </td>
                            <td>56</td>
                            <td>Акцентные поля</td>
                        </tr>
                        <tr>
                            <td>
                                <code>XL</code>
                            </td>
                            <td>64</td>
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
                                <code>default</code>
                            </td>
                            <td>
                                <code>View=Default</code>
                            </td>
                            <td>Нейтральное</td>
                        </tr>
                        <tr>
                            <td>
                                <code>focus</code>
                            </td>
                            <td>
                                <code>Focused=True</code>
                            </td>
                            <td>Фокус, выделение поля</td>
                        </tr>
                        <tr>
                            <td>
                                <code>filled</code>
                            </td>
                            <td>
                                <code>Value=Single/Multiple</code>
                            </td>
                            <td>Есть значение</td>
                        </tr>
                        <tr>
                            <td>
                                <code>error</code>
                            </td>
                            <td>
                                <code>View=Error</code>
                            </td>
                            <td>Ошибка</td>
                        </tr>
                        <tr>
                            <td>
                                <code>warning</code>
                            </td>
                            <td>
                                <code>View=Warning</code>
                            </td>
                            <td>Предупреждение</td>
                        </tr>
                        <tr>
                            <td>
                                <code>success</code>
                            </td>
                            <td>
                                <code>View=Success</code>
                            </td>
                            <td>Успех</td>
                        </tr>
                        <tr>
                            <td>
                                <code>disabled</code>
                            </td>
                            <td>
                                <code>Disabled=True</code>
                            </td>
                            <td>Недоступно</td>
                        </tr>
                        <tr>
                            <td>
                                <code>read-only</code>
                            </td>
                            <td>
                                <code>ReadOnly=True</code>
                            </td>
                            <td>Только чтение</td>
                        </tr>
                        <tr>
                            <td>
                                <code>required</code>
                            </td>
                            <td>
                                <code>Required=True</code>
                            </td>
                            <td>Обязательное</td>
                        </tr>
                        <tr>
                            <td>
                                <code>optional</code>
                            </td>
                            <td>
                                <code>Optional=True</code>
                            </td>
                            <td>Необязательное (маркер)</td>
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
                            <td>Переход к полю / из поля</td>
                        </tr>
                        <tr>
                            <td>Ввод символов</td>
                            <td>Заполнение значения</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Escape</code>
                            </td>
                            <td>Снять фокус (опционально)</td>
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
                                <code>{'<input>'}</code>
                                {' с '}
                                <code>{'<label>'}</code>
                            </td>
                            <td>—</td>
                            <td>Всегда</td>
                        </tr>
                        <tr>
                            <td>
                                <code>aria-invalid=&quot;true&quot;</code>
                            </td>
                            <td>—</td>
                            <td>
                                <code>View=Error</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>aria-describedby</code>
                            </td>
                            <td>ID hint-элемента</td>
                            <td>При наличии подсказки / ошибки</td>
                        </tr>
                        <tr>
                            <td>
                                <code>aria-required=&quot;true&quot;</code>
                            </td>
                            <td>—</td>
                            <td>
                                <code>Required=True</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>readonly</code>
                            </td>
                            <td>—</td>
                            <td>
                                <code>ReadOnly=True</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>disabled</code>
                            </td>
                            <td>—</td>
                            <td>
                                <code>Disabled=True</code>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="p-8-design-tokens">8. Design Tokens</h2>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Роль</th>
                            <th>SDDS Token</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Фон поля</td>
                            <td>
                                <code>Surfaces/Default/General/Solid/Secondary</code>
                            </td>
                        </tr>
                        <tr>
                            <td>Обводка default</td>
                            <td>
                                <code>Outlines/Default/General/Solid/Secondary</code>
                            </td>
                        </tr>
                        <tr>
                            <td>Обводка focus</td>
                            <td>
                                <code>Outlines/Default/Accent/Solid/Accent</code>
                            </td>
                        </tr>
                        <tr>
                            <td>Обводка error</td>
                            <td>
                                <code>Outlines/Default/Status/Solid/Error</code>
                            </td>
                        </tr>
                        <tr>
                            <td>Текст значения</td>
                            <td>
                                <code>Text&Icons/Default/General/Primary</code>
                            </td>
                        </tr>
                        <tr>
                            <td>Лейбл (outer)</td>
                            <td>
                                <code>Text&Icons/Default/General/Secondary</code>
                            </td>
                        </tr>
                        <tr>
                            <td>Placeholder</td>
                            <td>
                                <code>Text&Icons/Default/General/Tertiary</code>
                            </td>
                        </tr>
                        <tr>
                            <td>Hint (ошибка)</td>
                            <td>
                                <code>Text&Icons/Default/Status/Error</code>
                            </td>
                        </tr>
                        <tr>
                            <td>Disabled фон</td>
                            <td>
                                <code>Surfaces/Default/General/Solid/Tertiary</code>
                            </td>
                        </tr>
                        <tr>
                            <td>Disabled текст</td>
                            <td>
                                <code>Text&Icons/Default/General/Tertiary</code>
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
