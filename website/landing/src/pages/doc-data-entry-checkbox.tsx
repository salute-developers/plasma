import { DocsPageLayout } from '../DocsPageLayout';
import { SiteLink } from '../shared';

export default function DocDataEntryCheckboxPage() {
    return (
        <DocsPageLayout>
            <nav className="crumbs">
                <SiteLink href="/docs">Документация</SiteLink>
                <i>/</i>
                <SiteLink href="/docs">Компоненты</SiteLink>
                <i>/</i>
                Data Entry
                <i>/</i>
                <span>CheckBox</span>
            </nav>

            <div className="article-meta">
                <span className="post-kind">Data Entry</span>

                <span>Спецификация компонента</span>
                <span>·</span>
                <span>версия 1.5.0</span>
                <span>·</span>
                <SiteLink href="https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=8806-63106">
                    Открыть в Figma
                </SiteLink>
            </div>

            <h1>CheckBox</h1>

            <p className="article-lead">
                Связанный компонент: CheckBoxGroup (<code>10560:111515</code>)
            </p>

            <h2 id="p-1-key-principles-of-use">1. Key Principles of Use</h2>

            <h3 id="what-it-is">What it is</h3>

            <p>
                CheckBox — элемент выбора одного или нескольких значений из набора. Поддерживает три состояния: снято,
                выбрано, частично выбрано (indeterminate).
            </p>

            <h3 id="when-to-use">When to use</h3>

            <p>
                <b>Use</b>
                {
                    ' — для независимых опций, которые можно включать/выключать раздельно: настройки, фильтры, согласие с условиями.'
                }
            </p>

            <p>
                <b>Don&apos;t use</b>
                {' — для выбора одного из взаимоисключающих вариантов (используйте '}
                <b>RadioBox</b>
                ).
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
                                <code>control</code>
                            </td>
                            <td>—</td>
                            <td>Сам флажок</td>
                        </tr>
                        <tr>
                            <td>
                                <code>label</code>
                            </td>
                            <td>
                                <code>hasLabel=Yes</code>
                            </td>
                            <td>Текстовая метка</td>
                        </tr>
                        <tr>
                            <td>
                                <code>description</code>
                            </td>
                            <td>
                                <code>hasDescription=Yes</code>
                            </td>
                            <td>Дополнительное описание под лейблом</td>
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
                            <th>Размер</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>CheckBoxS</code>
                            </td>
                            <td>S</td>
                        </tr>
                        <tr>
                            <td>
                                <code>CheckBoxM</code>
                            </td>
                            <td>M</td>
                        </tr>
                        <tr>
                            <td>
                                <code>CheckBoxL</code>
                            </td>
                            <td>L</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="value-sostoyanie-vybora">Value (состояние выбора)</h3>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Value</th>
                            <th>Семантика</th>
                            <th>CSS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>Empty</code>
                            </td>
                            <td>Не выбран</td>
                            <td>
                                <code>unchecked</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>Single</code>
                            </td>
                            <td>Выбран</td>
                            <td>
                                <code>checked</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>Multiple</code>
                            </td>
                            <td>Частично (indeterminate)</td>
                            <td>
                                <code>indeterminate</code>
                            </td>
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
                            <th>Описание</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>Default</code>
                            </td>
                            <td>Стандартный</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Negative</code>
                            </td>
                            <td>Ошибка / невалидный выбор</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="callout">
                <p>
                    <b>Внимание:</b> <code>hasLabel</code>
                    {' и '}
                    <code>hasDescription</code>
                    {' используют '}
                    <code>Yes/No</code>
                    {' вместо стандартных '}
                    <code>True/False</code>.
                </p>
            </div>

            <div className="callout">
                <p>
                    <b>Внимание:</b>
                    {' в '}
                    <code>CheckBoxS</code> <code>Disabled=false/true</code>
                    {' (нижний регистр), в M и L — '}
                    <code>False/True</code>.
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
                            <td>Компактные формы, тулбары</td>
                        </tr>
                        <tr>
                            <td>
                                <code>M</code>
                            </td>
                            <td>
                                {'Стандартные формы — '}
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
                                <code>unchecked</code>
                            </td>
                            <td>
                                <code>Value=Empty</code>
                            </td>
                            <td>Не выбран</td>
                        </tr>
                        <tr>
                            <td>
                                <code>checked</code>
                            </td>
                            <td>
                                <code>Value=Single</code>
                            </td>
                            <td>Выбран</td>
                        </tr>
                        <tr>
                            <td>
                                <code>indeterminate</code>
                            </td>
                            <td>
                                <code>Value=Multiple</code>
                            </td>
                            <td>Частично</td>
                        </tr>
                        <tr>
                            <td>
                                <code>negative</code>
                            </td>
                            <td>
                                <code>View=Negative</code>
                            </td>
                            <td>Ошибка / невалидный выбор</td>
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
                                <code>{'<input type="checkbox">'}</code>
                            </td>
                            <td>—</td>
                            <td>Всегда</td>
                        </tr>
                        <tr>
                            <td>
                                <code>{'<label>'}</code>
                            </td>
                            <td>—</td>
                            <td>
                                <code>hasLabel=Yes</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>aria-checked=&quot;mixed&quot;</code>
                            </td>
                            <td>—</td>
                            <td>
                                <code>Value=Multiple</code>
                                {' (indeterminate)'}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>aria-invalid=&quot;true&quot;</code>
                            </td>
                            <td>—</td>
                            <td>
                                <code>View=Negative</code>
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

            <div className="article-foot">
                <span>Нашли расхождение документации и библиотеки — напишите команде.</span>

                <SiteLink className="side-cta" href="/contacts">
                    Сообщить о расхождении
                </SiteLink>
            </div>
        </DocsPageLayout>
    );
}
