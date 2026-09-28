import { DocsPageLayout } from '../DocsPageLayout';
import { SiteLink } from '../shared';

export default function DocDataDisplayChipPage() {
    return (
        <DocsPageLayout>
            <nav className="crumbs">
                <SiteLink href="/docs">Документация</SiteLink>
                <i>/</i>
                <SiteLink href="/docs">Компоненты</SiteLink>
                <i>/</i>
                Data Display
                <i>/</i>
                <span>Chip</span>
            </nav>

            <div className="article-meta">
                <span className="post-kind">Data Display</span>

                <span>Спецификация компонента</span>
                <span>·</span>
                <span>версия 1.5.0</span>
                <span>·</span>
                <SiteLink href="https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=10405-93573">
                    Открыть в Figma
                </SiteLink>
            </div>

            <h1>Chip</h1>

            <p className="article-lead">
                Chip — компактный интерактивный элемент для отображения значений, фильтров или тегов с возможностью
                удаления. Отличается от Badge наличием интерактивности и кнопки закрытия.
            </p>

            <h2 id="p-1-key-principles-of-use">1. Key Principles of Use</h2>

            <h3 id="when-to-use">When to use</h3>

            <p>
                <b>Use</b>
                {
                    ' — для отображения выбранных фильтров, тегов пользователя, значений множественного выбора с возможностью удаления.'
                }
            </p>

            <p>
                <b>Don&apos;t use</b>
                {' — для read-only статусных меток (используйте '}
                <b>Badge</b>
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
                                <code>contentBefore</code>
                            </td>
                            <td>
                                <code>ContentBefore</code>
                            </td>
                            <td>Avatar, Icon или пусто</td>
                        </tr>
                        <tr>
                            <td>
                                <code>label</code>
                            </td>
                            <td>—</td>
                            <td>Текст чипа</td>
                        </tr>
                        <tr>
                            <td>
                                <code>contentAfter</code>
                            </td>
                            <td>
                                <code>ContentAfter=true</code>
                            </td>
                            <td>Иконка или значение справа</td>
                        </tr>
                        <tr>
                            <td>
                                <code>closeButton</code>
                            </td>
                            <td>
                                <code>hasClose=true</code>
                            </td>
                            <td>Кнопка удаления (×)</td>
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
                                <code>Chip20XXS</code>
                            </td>
                            <td>20</td>
                            <td>XXS</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Chip24XS</code>
                            </td>
                            <td>24</td>
                            <td>XS</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Chip32S</code>
                            </td>
                            <td>32</td>
                            <td>S</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Chip40M</code>
                            </td>
                            <td>40</td>
                            <td>M</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Chip48L</code>
                            </td>
                            <td>48</td>
                            <td>L</td>
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
                                <code>Secondary</code>
                            </td>
                            <td>Вторичный</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Accent</code>
                            </td>
                            <td>Акцентный / активный</td>
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
                            <td>Негативный</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="contentbefore">ContentBefore</h3>

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
                            <td>Без левого контента</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Icon</code>
                            </td>
                            <td>Иконка</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Avatar</code>
                            </td>
                            <td>Аватар пользователя</td>
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
                            <td>Стандартное скругление</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Pilled</code>
                            </td>
                            <td>Полностью скруглённый</td>
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
                            <td>20</td>
                            <td>Встроенные в поля ввода</td>
                        </tr>
                        <tr>
                            <td>
                                <code>XS</code>
                            </td>
                            <td>24</td>
                            <td>Компактные тулбары</td>
                        </tr>
                        <tr>
                            <td>
                                <code>S</code>
                            </td>
                            <td>32</td>
                            <td>Строки таблиц</td>
                        </tr>
                        <tr>
                            <td>
                                <code>M</code>
                            </td>
                            <td>40</td>
                            <td>
                                {'Фильтры, стандартный — '}
                                <b>дефолт</b>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>L</code>
                            </td>
                            <td>48</td>
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
                            <td>—</td>
                            <td>Базовый вид</td>
                        </tr>
                        <tr>
                            <td>
                                <code>hover</code>
                            </td>
                            <td>—</td>
                            <td>Курсор над чипом</td>
                        </tr>
                        <tr>
                            <td>
                                <code>active</code>
                            </td>
                            <td>—</td>
                            <td>Нажатие</td>
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
                                <code>role=&quot;option&quot;</code>
                                {' или '}
                                <code>role=&quot;button&quot;</code>
                            </td>
                            <td>—</td>
                            <td>В зависимости от контекста</td>
                        </tr>
                        <tr>
                            <td>
                                <code>aria-label</code>
                                {' для кнопки закрытия'}
                            </td>
                            <td>«Удалить [название чипа]»</td>
                            <td>
                                <code>hasClose=true</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>aria-disabled</code>
                            </td>
                            <td>
                                <code>true</code>
                            </td>
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
