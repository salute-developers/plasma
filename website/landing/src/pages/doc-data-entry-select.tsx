import { DocsPageLayout } from '../DocsPageLayout';
import { SiteLink } from '../shared';

export default function DocDataEntrySelectPage() {
    return (
        <DocsPageLayout>
            <nav className="crumbs">
                <SiteLink href="/docs">Документация</SiteLink>
                <i>/</i>
                <SiteLink href="/docs">Компоненты</SiteLink>
                <i>/</i>
                Data Entry
                <i>/</i>
                <span>Select</span>
            </nav>

            <div className="article-meta">
                <span className="post-kind">Data Entry</span>

                <span>Спецификация компонента</span>
                <span>·</span>
                <span>версия 1.5.0</span>
                <span>·</span>
                <SiteLink href="https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=12012-74693">
                    Открыть в Figma
                </SiteLink>
            </div>

            <h1>Select</h1>

            <p className="article-lead">
                Select — выпадающий список для выбора одного или нескольких значений из предустановленного набора.
            </p>

            <h2 id="p-1-key-principles-of-use">1. Key Principles of Use</h2>

            <h3 id="when-to-use">When to use</h3>

            <p>
                <b>Use</b>
                {' — когда вариантов более 5 и они не помещаются на экране. Для форм выбора страны, категории, типа.'}
            </p>

            <p>
                <b>Don&apos;t use:</b>
            </p>

            <ul className="article-list plain">
                <li>
                    {'До 5 вариантов — используйте '}
                    <b>RadioBox</b>
                    {' (Single) или '}
                    <b>CheckBox</b>
                    {' (Multiple)'}
                </li>
                <li>
                    {'Для поиска по длинному списку — используйте '}
                    <b>Autocomplete</b>
                    {' или '}
                    <b>ComboBox</b>
                </li>
            </ul>

            <h2 id="p-2-anatomy">2. Anatomy</h2>

            <p>Аналогично TextField, дополнительно:</p>

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
                                <code>trigger</code>
                            </td>
                            <td>Кнопка открытия списка (SelectButton)</td>
                        </tr>
                        <tr>
                            <td>
                                <code>dropdown</code>
                            </td>
                            <td>Выпадающий список опций</td>
                        </tr>
                        <tr>
                            <td>
                                <code>option</code>
                            </td>
                            <td>Отдельная опция в списке</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="p-3-variants">3. Variants</h2>

            <h3 id="figma-component-sets">Figma Component Sets</h3>

            <p>
                {'Именование: '}
                <code>{'Select/{Single|Multiple}/Select{T-shirt}'}</code>
            </p>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Имя</th>
                            <th>Режим</th>
                            <th>T-shirt</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>Select/Single/Select32XS</code>
                            </td>
                            <td>Single</td>
                            <td>XS</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Select/Single/Select40S</code>
                            </td>
                            <td>Single</td>
                            <td>S</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Select/Single/Select48M</code>
                            </td>
                            <td>Single</td>
                            <td>M</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Select/Single/Select56L</code>
                            </td>
                            <td>Single</td>
                            <td>L</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Select/Single/Select64XL</code>
                            </td>
                            <td>Single</td>
                            <td>XL</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Select/Multiple/Select32XS</code>
                            </td>
                            <td>Multiple</td>
                            <td>XS</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Select/Multiple/Select40S</code>
                            </td>
                            <td>Multiple</td>
                            <td>S</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Select/Multiple/Select48M</code>
                            </td>
                            <td>Multiple</td>
                            <td>M</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Select/Multiple/Select56L</code>
                            </td>
                            <td>Multiple</td>
                            <td>L</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Select/Multiple/Select64XL</code>
                            </td>
                            <td>Multiple</td>
                            <td>XL</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p>
                {'Отдельно: '}
                <code>{'SelectButton/{Single|Multiple}/SelectButton{T-shirt}'}</code>
                {' — изолированный триггер.'}
            </p>

            <h3 id="rezhimy">Режимы</h3>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Режим</th>
                            <th>Описание</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>Single</code>
                            </td>
                            <td>Выбор одного значения</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Multiple</code>
                            </td>
                            <td>Выбор нескольких значений</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="propy-analogichno-textfield">Пропы (аналогично TextField)</h3>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Проп</th>
                            <th>Значения</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>LabelPlacement</code>
                            </td>
                            <td>Outer / Inner / None (XS: только Outer/None)</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Value</code>
                            </td>
                            <td>Empty / Filled</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Opened</code>
                            </td>
                            <td>True / False</td>
                        </tr>
                        <tr>
                            <td>
                                <code>EmptyState</code>
                            </td>
                            <td>True / False — нет результатов</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Disabled</code>
                            </td>
                            <td>True / False</td>
                        </tr>
                        <tr>
                            <td>
                                <code>ReadOnly</code>
                            </td>
                            <td>True / False</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Required</code>
                            </td>
                            <td>True / False (осторожно: mixed case в разных сетах)</td>
                        </tr>
                        <tr>
                            <td>
                                <code>RequiredPlacement</code>
                            </td>
                            <td>None / Left / Right</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="p-4-sizes">4. Sizes</h2>

            <p>Аналогично TextField: XS(32) · S(40) · M(48) · L(56) · XL(64).</p>

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
                                <code>Value=Empty, Opened=False</code>
                            </td>
                            <td>Пустое, закрытое</td>
                        </tr>
                        <tr>
                            <td>
                                <code>filled</code>
                            </td>
                            <td>
                                <code>Value=Filled</code>
                            </td>
                            <td>Есть выбранное значение</td>
                        </tr>
                        <tr>
                            <td>
                                <code>opened</code>
                            </td>
                            <td>
                                <code>Opened=True</code>
                            </td>
                            <td>Список раскрыт</td>
                        </tr>
                        <tr>
                            <td>
                                <code>empty-state</code>
                            </td>
                            <td>
                                <code>EmptyState=True</code>
                            </td>
                            <td>Нет подходящих вариантов</td>
                        </tr>
                        <tr>
                            <td>
                                <code>disabled</code>
                            </td>
                            <td>
                                <code>Disabled=True</code>
                            </td>
                            <td>Недоступен</td>
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
                                <code>role=&quot;combobox&quot;</code>
                            </td>
                            <td>—</td>
                            <td>На триггере</td>
                        </tr>
                        <tr>
                            <td>
                                <code>aria-expanded</code>
                            </td>
                            <td>
                                <code>true</code>
                                {' / '}
                                <code>false</code>
                            </td>
                            <td>
                                <code>Opened=True/False</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>aria-haspopup=&quot;listbox&quot;</code>
                            </td>
                            <td>—</td>
                            <td>Всегда</td>
                        </tr>
                        <tr>
                            <td>
                                <code>role=&quot;listbox&quot;</code>
                            </td>
                            <td>—</td>
                            <td>На контейнере списка</td>
                        </tr>
                        <tr>
                            <td>
                                <code>role=&quot;option&quot;</code>
                            </td>
                            <td>—</td>
                            <td>На каждой опции</td>
                        </tr>
                        <tr>
                            <td>
                                <code>aria-selected</code>
                            </td>
                            <td>
                                <code>true</code>
                                {' / '}
                                <code>false</code>
                            </td>
                            <td>На опциях</td>
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
